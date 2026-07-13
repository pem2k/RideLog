import { ObjectId } from "mongodb";
import { getDB } from "../db/connectDB.js";

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
  }
  if (typeof body.description !== "string" || body.description.trim().length === 0) {
    errors.description = "Description is required.";
  }
  if (body.imageData !== undefined && body.imageData !== null && typeof body.imageData !== "string") {
    errors.imageData = "Image data must be a base64-encoded string.";
  }
  if (!body.rideDate || Number.isNaN(new Date(body.rideDate).getTime())) {
    errors.rideDate = "A valid ride date is required.";
  }
  if (!isFiniteNumber(body.distance) || body.distance <= 0) {
    errors.distance = "Distance is required and must be a positive number.";
  }
  if (!isFiniteNumber(body.elevation) || body.elevation < 0) {
    errors.elevation = "Elevation is required and must be a non-negative number.";
  }
  if (!isFiniteNumber(body.maxSpeed) || body.maxSpeed <= 0) {
    errors.maxSpeed = "Max speed is required and must be a positive number.";
  }

  return errors;
}

export function isValidId(id) {
  return ObjectId.isValid(id);
}

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
  if (!isValidId(id)) return null;
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

  await postsCollection().updateOne({ _id: new ObjectId(id) }, { $set: update });
  return getPostById(id);
}

export async function deletePost(id) {
  await postsCollection().deleteOne({ _id: new ObjectId(id) });
}
