import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { connectDB } from "./db/connectDB.js";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";
import { ensureIndexes } from "./models/Post.js";
import { ensureIndexes as ensureCommentIndexes } from "./models/Comment.js";

const app = express();
const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  app.set("trust proxy", 1);
}

app.use(express.json({ limit: "5mb" }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      dbName: process.env.MONGO_DB_NAME || "ridelog",
    }),
    cookie: {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

// --- API routes ---
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);

// Unknown API paths get a JSON 404, not index.html
app.all("/api/{*splat}", (req, res) => {
  res.status(404).json({ error: "API route not found" });
});

// --- Production: serve the compiled React app ---
if (isProduction) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const distPath = path.join(__dirname, "..", "frontend", "dist");

  app.use(express.static(distPath));

  // Client-side route fallback — any non-API GET returns index.html
  // so React Router can handle the path in the browser.
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const port = process.env.PORT || 3000;

connectDB()
  .then(async () => {
    await ensureIndexes();
    await ensureCommentIndexes();
    app.listen(port, () => {
      console.log(`RideLog backend listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
