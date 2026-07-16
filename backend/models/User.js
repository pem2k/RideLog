// user collection helpers. No Mongoose
// mongodb driver collection, matching the pattern in db/connectDB.js

import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { getDB } from "../db/connectDB.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SALT_ROUNDS = 10;

function usersCollection() {
  return getDB().collection("users");
}

// validates registration input and returns { errors } (empty object if valid).
function validateRegistration({ username, email, password }) {
  const errors = {};

  if (typeof username !== "string" || username.trim().length < 3) {
    errors.username = "Username is required and must be at least 3 characters.";
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    errors.email = "A valid email is required.";
  }
  if (typeof password !== "string" || password.length < 8) {
    errors.password = "Password is required and must be at least 8 characters.";
  }

  return errors;
}

// creates a new user. Throws { status, errors } on validation/duplicate failure.
export async function createUser({ username, email, password }) {
  const errors = validateRegistration({ username, email, password });
  if (Object.keys(errors).length > 0) {
    throw { status: 400, errors };
  }

  const collection = usersCollection();
  const normalizedUsername = username.trim();
  const normalizedEmail = email.trim().toLowerCase();

  const existing = await collection.findOne({
    $or: [{ username: normalizedUsername }, { email: normalizedEmail }],
  });
  if (existing) {
    const dupErrors = {};
    if (existing.username === normalizedUsername)
      dupErrors.username = "Username is already taken.";
    if (existing.email === normalizedEmail)
      dupErrors.email = "Email is already registered.";
    throw { status: 400, errors: dupErrors };
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = {
    username: normalizedUsername,
    email: normalizedEmail,
    passwordHash,
    following: [],
    followers: [],
    createdAt: new Date(),
  };

  try {
    const result = await collection.insertOne(user);
    return {
      _id: result.insertedId,
      username: user.username,
      email: user.email,
    };
  } catch (err) {
    if (err.code === 11000) {
      const dupErrors = {};
      if (err.keyPattern?.username) {
        dupErrors.username = "Username is already taken.";
      }
      if (err.keyPattern?.email) {
        dupErrors.email = "Email is already registered.";
      }
      throw { status: 400, errors: dupErrors };
    }
    throw err;
  }
}

export async function findByUsername(username) {
  return usersCollection().findOne({ username });
}

export async function findById(id) {
  if (!ObjectId.isValid(id)) return null;
  const user = await usersCollection().findOne({ _id: new ObjectId(id) });
  if (!user) return null;
  return sanitizeUser(user);
}

export async function verifyPassword(user, password) {
  return bcrypt.compare(password, user.passwordHash);
}

export function sanitizeUser(user) {
  const safeUser = {
    _id: user._id,
    username: user.username,
    email: user.email,
    displayName: user.displayName || null,
    bio: user.bio || null,
    following: user.following || [],
    followers: user.followers || [],
    createdAt: user.createdAt,
  };
  return safeUser;
}

export async function updateUser(id, updates) {
  const errors = {};

  if (updates.displayName !== undefined) {
    if (
      typeof updates.displayName !== "string" ||
      updates.displayName.length > 50
    ) {
      errors.displayName = "Display name must be 50 characters or less.";
    }
  }

  if (updates.bio !== undefined) {
    if (typeof updates.bio !== "string" || updates.bio.length > 300) {
      errors.bio = "Bio must be 300 characters or less.";
    }
  }

  if (Object.keys(errors).length > 0) {
    throw { status: 400, errors };
  }

  await usersCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: { displayName: updates.displayName, bio: updates.bio } },
  );

  return findById(id);
}

export async function followUser(currentUserId, targetUserId) {
  if (currentUserId === targetUserId) {
    throw { status: 400, error: "You cannot follow yourself." };
  }

  if (!ObjectId.isValid(targetUserId)) {
    throw { status: 400, error: "Invalid user id." };
  }

  const targetUser = await usersCollection().findOne({
    _id: new ObjectId(targetUserId),
  });

  if (!targetUser) {
    throw { status: 404, error: "User not found." };
  }

  await usersCollection().updateOne(
    { _id: new ObjectId(currentUserId) },
    { $addToSet: { following: new ObjectId(targetUserId) } },
  );

  await usersCollection().updateOne(
    { _id: new ObjectId(targetUserId) },
    { $addToSet: { followers: new ObjectId(currentUserId) } },
  );

  return findById(currentUserId);
}

export async function unfollowUser(currentUserId, targetUserId) {
  if (!ObjectId.isValid(targetUserId)) {
    throw { status: 400, error: "Invalid user id." };
  }

  await usersCollection().updateOne(
    { _id: new ObjectId(currentUserId) },
    { $pull: { following: new ObjectId(targetUserId) } },
  );

  await usersCollection().updateOne(
    { _id: new ObjectId(targetUserId) },
    { $pull: { followers: new ObjectId(currentUserId) } },
  );

  return findById(currentUserId);
}

export async function searchUsers(query) {
  const trimmed = query.trim();
  if (trimmed.length < 2) {
    return [];
  }

  const results = await usersCollection()
    .find({
      $or: [
        { username: { $gte: trimmed, $lt: trimmed + "\uffff" } },
        { displayName: { $gte: trimmed, $lt: trimmed + "\uffff" } },
      ],
    })
    .collation({ locale: "en", strength: 2 })
    .limit(10)
    .toArray();

  return results.map(sanitizeUser);
}

export async function ensureIndexes() {
  await usersCollection().createIndex({ username: 1 }, { unique: true });
  await usersCollection().createIndex({ email: 1 }, { unique: true });
}
