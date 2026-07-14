// This file is in charge of connecting to our MongoDB database
// We use the official mongodb driver directly (NOT Mongoose) because
// the class rubric doesn't allow Mongoose for this project

import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME || "ridelog";

// These stay private to this file. Other files use connectDB()/getDB()
// below instead of touching the MongoDB client directly.
let client;
let db;

// Opens the connection to MongoDB. Call this ONCE when the server starts.
export async function connectDB() {
  if (db) {
    // already connected - just reuse the existing connection.
    return db;
  }

  if (!uri) {
    throw new Error(
      "MONGO_URI is not set. Copy backend/.env.example to backend/.env and fill it in.",
    );
  }

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);

  console.log(`Connected to MongoDB database "${dbName}"`);
  return db;
}

// Lets any other file ,routes, passport config, etc., grab the already open
// database connection without having to connect again.
export function getDB() {
  if (!db) {
    throw new Error(
      "Database not connected yet. Call connectDB() first (see server.js).",
    );
  }
  return db;
}
