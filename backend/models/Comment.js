import { ObjectId } from "mongodb";
import { getDB } from "../db/connectDB.js";
import { isValidObjectId } from "../db/objectId.js";

const MAX_TEXT_LENGTH = 500;

function commentsCollection() {
  return getDB().collection("comments");
}

// validates comment input and returns an errors object (empty if valid).
export function validateCommentInput(body = {}) {
  const errors = {};

  if (typeof body.text !== "string" || body.text.trim().length === 0) {
    errors.text = "Comment text is required.";
  } else if (body.text.trim().length > MAX_TEXT_LENGTH) {
    errors.text = `Comment text must be ${MAX_TEXT_LENGTH} characters or fewer.`;
  }

  return errors;
}

export { isValidObjectId as isValidId };

export async function createComment(postId, authorId, text) {
  const comment = {
    postId: new ObjectId(postId),
    authorId: new ObjectId(authorId),
    text: text.trim(),
    createdAt: new Date(),
  };

  const result = await commentsCollection().insertOne(comment);
  return { ...comment, _id: result.insertedId };
}

export async function getCommentsByPostId(postId) {
  return commentsCollection()
    .aggregate([
      { $match: { postId: new ObjectId(postId) } },
      { $sort: { createdAt: 1, _id: 1 } },
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
          postId: 1,
          text: 1,
          createdAt: 1,
          "author._id": 1,
          "author.username": 1,
        },
      },
    ])
    .toArray();
}

export async function getCommentById(id) {
  if (!isValidObjectId(id)) return null;
  return commentsCollection().findOne({ _id: new ObjectId(id) });
}

export async function deleteComment(id) {
  await commentsCollection().deleteOne({ _id: new ObjectId(id) });
}

// Only what cascading a post delete needs.
export async function deleteManyByPostId(postId) {
  await commentsCollection().deleteMany({ postId: new ObjectId(postId) });
}

export async function ensureIndexes() {
  await commentsCollection().createIndex({ postId: 1, createdAt: 1 });
}
