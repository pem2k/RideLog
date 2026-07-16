// Seed script for RideLog — generates 100 users, 1000 posts, 2000 comments.
// Run with:  ALLOW_SEED=true npm run seed
// To reset (drop collections first):  ALLOW_SEED=true ALLOW_SEED_RESET=true npm run seed

import "dotenv/config";
import { readFileSync } from "node:fs";
import { MongoClient, ObjectId } from "mongodb";
import bcrypt from "bcrypt";

// --------------- safety checks ---------------

if (process.env.NODE_ENV === "production") {
  console.error("ERROR: Seed script refuses to run in production mode.");
  process.exit(1);
}

if (process.env.ALLOW_SEED !== "true") {
  console.error("ERROR: Set ALLOW_SEED=true to run this script.");
  process.exit(1);
}

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME || "ridelog";

if (!uri) {
  console.error("ERROR: MONGO_URI is not set.");
  process.exit(1);
}

// --------------- word lists for deterministic data ---------------

const firstNames = [
  "Alex",
  "Jordan",
  "Casey",
  "Riley",
  "Morgan",
  "Taylor",
  "Quinn",
  "Avery",
  "Blake",
  "Drew",
  "Sage",
  "Kai",
  "Skyler",
  "Reese",
  "Peyton",
  "Dakota",
  "Rowan",
  "Finley",
  "Hayden",
  "Cameron",
  "Jamie",
  "Logan",
  "Parker",
  "Emery",
  "Charlie",
  "River",
  "Lennox",
  "Harley",
  "Remy",
  "Shay",
  "Jules",
  "Lane",
  "Devon",
  "Tatum",
  "Ellis",
  "Arden",
  "Briar",
  "Wren",
  "Sloan",
  "Hollis",
  "Cruz",
  "Milan",
  "Noel",
  "Jude",
  "Soren",
  "Bellamy",
  "Asher",
  "Keegan",
  "Phoenix",
  "Marlowe",
];

const routes = [
  "Canyon Loop",
  "River Trail",
  "Summit Climb",
  "Coastal Path",
  "Mountain Pass",
  "Valley Circuit",
  "Ridge Road",
  "Lakeside Loop",
  "Forest Trail",
  "Hillside Route",
  "Sunset Boulevard",
  "Creek Path",
  "Harbor Loop",
  "Meadow Trail",
  "Parkway",
  "Cliffside Road",
  "Bridge Circuit",
  "Orchard Lane",
  "Vineyard Route",
  "Desert Trail",
];

const adjectives = [
  "Morning",
  "Sunset",
  "Weekend",
  "Solo",
  "Group",
  "Rainy",
  "Windy",
  "Early",
  "Late",
  "Epic",
  "Chill",
  "Fast",
  "Easy",
  "Tough",
  "Long",
  "Short",
  "Beautiful",
  "Foggy",
  "Sunny",
  "Perfect",
];

const descriptions = [
  "Great ride today, felt strong the whole way.",
  "Legs were tired but pushed through to the end.",
  "Perfect weather for a ride. Could not ask for more.",
  "Hit a new personal best on the big climb.",
  "Easy spin to clear the head after a long week.",
  "Stopped for coffee halfway through. Worth it.",
  "Headwind on the way out, tailwind coming back.",
  "First time on this route. Definitely coming back.",
  "Rode with the crew today. Good times all around.",
  "Flat tire at mile 15 but still finished strong.",
  "The descent was absolutely incredible today.",
  "Started before sunrise and watched the sky light up.",
  "Testing out the new wheels. They feel amazing.",
  "Recovery ride after a hard training block.",
  "Explored some new gravel roads off the main route.",
  "Barely made it up that last hill. Need more climbing.",
  "Smooth roads, no traffic, just perfect.",
  "Got caught in the rain but honestly it was fun.",
  "Quick loop before work. Best way to start the day.",
  "Long ride with plenty of stops for photos.",
];

const commentTexts = [
  "Nice ride!",
  "Looks like a great route.",
  "How was the climb?",
  "Impressive speed!",
  "I need to try this route.",
  "Beautiful scenery.",
  "Strong effort!",
  "What bike are you riding?",
  "Great stats!",
  "That elevation is no joke.",
  "Love this route.",
  "Way to push through!",
  "I rode there last week too.",
  "Solid distance.",
  "Keep it up!",
  "That descent must have been fun.",
  "Perfect weather for it.",
  "How long did it take?",
  "Adding this to my list.",
  "Respect the grind.",
];

// --------------- helpers ---------------

function pick(arr, index) {
  return arr[index % arr.length];
}

function randomInRange(min, max, seed) {
  // Simple deterministic pseudo-random using seed
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  const r = x - Math.floor(x);
  return min + r * (max - min);
}

function roundTo(num, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

function loadFeaturedImages() {
  const imageCount = 7;

  return Array.from({ length: imageCount }, (_, index) => {
    const fileNumber = String(index + 1).padStart(2, "0");
    const imageFile = new URL(
      `./images/ride-${fileNumber}.jpg`,
      import.meta.url,
    );
    const imageBase64 = readFileSync(imageFile).toString("base64");

    return `data:image/jpeg;base64,${imageBase64}`;
  });
}

// --------------- main ---------------

async function seed() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  console.log(`Connected to database: "${dbName}"`);

  // Handle reset if requested
  if (process.env.ALLOW_SEED_RESET === "true") {
    console.log(
      `RESETTING database "${dbName}" — dropping users, posts, comments...`,
    );
    await db
      .collection("users")
      .drop()
      .catch(() => {});
    await db
      .collection("posts")
      .drop()
      .catch(() => {});
    await db
      .collection("comments")
      .drop()
      .catch(() => {});
    console.log("Collections dropped.");
  }

  // Pre-hash one password for all seed users: "password1"
  const sharedHash = await bcrypt.hash("password1", 10);

  // ---- Generate 100 users ----
  const USER_COUNT = 100;
  const users = [];
  const now = new Date();

  for (let i = 0; i < USER_COUNT; i++) {
    const name = pick(firstNames, i);
    const username = `${name.toLowerCase()}${i + 1}`;
    users.push({
      _id: new ObjectId(),
      username,
      email: `${username}@ridelog.example`,
      passwordHash: sharedHash,
      displayName: `${name} R.`,
      bio: `Cyclist #${i + 1}. Love riding ${pick(routes, i).toLowerCase()}.`,
      following: [],
      followers: [],
      createdAt: new Date(now.getTime() - (USER_COUNT - i) * 86400000),
    });
  }

  // Create one documented demo account at index 0
  users[0].username = "demo";
  users[0].email = "demo@ridelog.example";
  users[0].displayName = "Demo User";
  users[0].bio = "Love riding canyon loop. Always looking for new routes.";

  // ---- Set up follow relationships ----
  // Demo user (index 0) follows everyone and is followed by everyone
  for (let i = 1; i < USER_COUNT; i++) {
    users[0].following.push(users[i]._id);
    users[i].followers.push(users[0]._id);
    users[i].following.push(users[0]._id);
    users[0].followers.push(users[i]._id);
  }

  // Each non-demo user also follows the next 3 users (wrapping, skip 0)
  for (let i = 1; i < USER_COUNT; i++) {
    for (let offset = 1; offset <= 3; offset++) {
      const targetIdx = ((i - 1 + offset) % (USER_COUNT - 1)) + 1;
      const myId = users[i]._id;
      const theirId = users[targetIdx]._id;

      if (!users[i].following.some((id) => id.equals(theirId))) {
        users[i].following.push(theirId);
      }
      if (!users[targetIdx].followers.some((id) => id.equals(myId))) {
        users[targetIdx].followers.push(myId);
      }
    }
  }

  await db.collection("users").insertMany(users);
  console.log(`Inserted ${users.length} users.`);

  // ---- Generate 1000 posts ----
  const POST_COUNT = 1000;
  const posts = [];
  const featuredImages = loadFeaturedImages();

  for (let i = 0; i < POST_COUNT; i++) {
    const isFeaturedPost = i < featuredImages.length;
    const authorIdx = isFeaturedPost ? i + 1 : i % USER_COUNT;
    const daysAgo = isFeaturedPost
      ? i
      : featuredImages.length + Math.floor((i - featuredImages.length) / 3);
    const postDate = new Date(now.getTime() - daysAgo * 86400000);
    const distance = roundTo(randomInRange(10, 30, i), 1);
    const avgSpeed = roundTo(randomInRange(10, 25, i + 5000), 1);
    const maxSpeed = roundTo(avgSpeed * randomInRange(1.3, 2.0, i + 3000), 1);
    const elevation = Math.round(randomInRange(50, 2500, i + 7000));

    posts.push({
      _id: new ObjectId(),
      authorId: users[authorIdx]._id,
      title: `${pick(adjectives, i)} ${pick(routes, i + 3)}`,
      description: pick(descriptions, i),
      imageData: isFeaturedPost ? featuredImages[i] : null,
      rideDate: postDate,
      distance,
      elevation,
      maxSpeed,
      createdAt: postDate,
      updatedAt: postDate,
    });
  }

  await db.collection("posts").insertMany(posts);
  console.log(`Inserted ${posts.length} posts.`);

  // ---- Generate 2 comments per post (2000 total) ----
  const COMMENTS_PER_POST = 2;
  const comments = [];

  for (let p = 0; p < POST_COUNT; p++) {
    for (let c = 0; c < COMMENTS_PER_POST; c++) {
      const i = p * COMMENTS_PER_POST + c;
      // Comment author is different from post author
      const authorIdx = posts[p].authorId.equals(
        users[(p + c + 1) % USER_COUNT]._id,
      )
        ? (p + c + 2) % USER_COUNT
        : (p + c + 1) % USER_COUNT;

      comments.push({
        _id: new ObjectId(),
        postId: posts[p]._id,
        authorId: users[authorIdx]._id,
        text: pick(commentTexts, i),
        createdAt: new Date(posts[p].createdAt.getTime() + (c + 1) * 60000),
      });
    }
  }

  await db.collection("comments").insertMany(comments);
  console.log(`Inserted ${comments.length} comments.`);

  // ---- Create indexes ----
  await db.collection("posts").createIndex({ createdAt: -1, _id: -1 });
  await db.collection("posts").createIndex({ authorId: 1 });
  await db.collection("comments").createIndex({ postId: 1, createdAt: 1 });
  console.log("Indexes created.");

  // ---- Summary ----
  const total = users.length + posts.length + comments.length;
  console.log("\n--- Seed Summary ---");
  console.log(`Users:    ${users.length}`);
  console.log(`Posts:    ${posts.length}`);
  console.log(`Comments: ${comments.length}`);
  console.log(`Total:    ${total} documents`);
  console.log(`\nDemo account — username: demo, password: password1`);

  await client.close();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
