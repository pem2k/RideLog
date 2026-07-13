import { ObjectId } from "mongodb";
import { getDB } from "../db/connectDB.js";

// Minimal helper - only what cascading a post delete needs. No comment
// routes exist yet.
export async function deleteManyByPostId(postId) {
  await getDB()
    .collection("comments")
    .deleteMany({ postId: new ObjectId(postId) });
}
