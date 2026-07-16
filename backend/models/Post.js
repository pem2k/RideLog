import { ObjectId } from "mongodb";
import { getDB } from "../db/connectDB.js";
import { isValidObjectId } from "../db/objectId.js";

const TITLE_MAX = 100;
const DESCRIPTION_MAX = 2000;
const IMAGE_PATTERN = /^https:\/\/.+|^data:image\/[a-z]+;base64,.+/;

function postsCollection() {
  return getDB().collection("posts");
}

function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

// validates post input and returns an errors object (empty if valid).
export function validatePostInput(body = {}) {
  const errors = {};

  if (typeof body.title !== "string" || body.title.trim().length === 0) {
    errors.title = "Title is required.";
  } else if (body.title.trim().length > TITLE_MAX) {
    errors.title = `Title must be ${TITLE_MAX} characters or fewer.`;
  }

  if (
    typeof body.description !== "string" ||
    body.description.trim().length === 0
  ) {
    errors.description = "Description is required.";
  } else if (body.description.trim().length > DESCRIPTION_MAX) {
    errors.description = `Description must be ${DESCRIPTION_MAX} characters or fewer.`;
  }

  if (body.imageData !== undefined && body.imageData !== null) {
    if (
      typeof body.imageData !== "string" ||
      !IMAGE_PATTERN.test(body.imageData)
    ) {
      errors.imageData = "Image must be an HTTPS URL or a valid data URI.";
    }
  }
  if (!body.rideDate || Number.isNaN(new Date(body.rideDate).getTime())) {
    errors.rideDate = "A valid ride date is required.";
  }
  if (!isFiniteNumber(body.distance) || body.distance <= 0) {
    errors.distance = "Distance is required and must be a positive number.";
  }
  if (!isFiniteNumber(body.elevation) || body.elevation < 0) {
    errors.elevation =
      "Elevation is required and must be a non-negative number.";
  }
  if (!isFiniteNumber(body.maxSpeed) || body.maxSpeed <= 0) {
    errors.maxSpeed = "Max speed is required and must be a positive number.";
  }

  return errors;
}

export { isValidObjectId as isValidId };

export async function createPost(authorId, body) {
  const post = {
    authorId: new ObjectId(authorId),
    title: body.title.trim(),
    description: body.description.trim(),
    imageData: body.imageData || null,
    rideDate: new Date(body.rideDate),
    distance: body.distance,
    elevation: body.elevation,
    maxSpeed: body.maxSpeed,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await postsCollection().insertOne(post);
  return { ...post, _id: result.insertedId };
}

export async function getPostById(id) {
  if (!isValidObjectId(id)) return null;
  return postsCollection().findOne({ _id: new ObjectId(id) });
}

export async function updatePost(id, body) {
  const update = {
    title: body.title.trim(),
    description: body.description.trim(),
    imageData: body.imageData || null,
    rideDate: new Date(body.rideDate),
    distance: body.distance,
    elevation: body.elevation,
    maxSpeed: body.maxSpeed,
    updatedAt: new Date(),
  };

  await postsCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: update },
  );
  return getPostById(id);
}

export async function deletePost(id) {
  await postsCollection().deleteOne({ _id: new ObjectId(id) });
}

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 50;

// validates page/limit query params. Limit is clamped to MAX_LIMIT rather
// than rejected; page/limit must otherwise be positive integers.
export function validateFeedQuery(query = {}) {
  const errors = {};
  let page = 1;
  let limit = DEFAULT_LIMIT;

  if (query.page !== undefined) {
    const parsed = Number(query.page);
    if (!Number.isInteger(parsed) || parsed < 1) {
      errors.page = "Page must be a positive integer.";
    } else {
      page = parsed;
    }
  }

  if (query.limit !== undefined) {
    const parsed = Number(query.limit);
    if (!Number.isInteger(parsed) || parsed < 1) {
      errors.limit = "Limit must be a positive integer.";
    } else {
      limit = Math.min(parsed, MAX_LIMIT);
    }
  }

  return { errors, page, limit };
}

export async function getFeed({ page, limit, following }) {
  const skip = (page - 1) * limit;
  const authorIds = (following || []).map((id) => new ObjectId(id));

  const matchStage =
    authorIds.length > 0
      ? { $match: { authorId: { $in: authorIds } } }
      : { $match: { _id: null } };

  const [posts, totalPosts] = await Promise.all([
    postsCollection()
      .aggregate([
        matchStage,
        { $sort: { rideDate: -1, _id: -1 } },
        { $skip: skip },
        { $limit: limit },
        {
          $lookup: {
            from: "users",
            localField: "authorId",
            foreignField: "_id",
            as: "author",
          },
        },
        { $unwind: "$author" },
        {
          $project: {
            title: 1,
            description: 1,
            imageData: 1,
            rideDate: 1,
            distance: 1,
            elevation: 1,
            maxSpeed: 1,
            createdAt: 1,
            "author._id": 1,
            "author.username": 1,
          },
        },
      ])
      .toArray(),
    postsCollection().countDocuments(
      authorIds.length > 0 ? { authorId: { $in: authorIds } } : { _id: null },
    ),
  ]);

  return {
    posts,
    page,
    limit,
    totalPosts,
    totalPages: Math.max(1, Math.ceil(totalPosts / limit)),
  };
}

export async function getPostsByAuthor(userId) {
  return postsCollection()
    .find({ authorId: new ObjectId(userId) })
    .sort({ createdAt: -1 })
    .toArray();
}

export async function ensureIndexes() {
  await postsCollection().createIndex({ authorId: 1, rideDate: -1, _id: -1 });
  await postsCollection().createIndex({ authorId: 1, createdAt: -1 });
}
