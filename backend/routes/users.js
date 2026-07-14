import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";
import {
  findById,
  updateUser,
  followUser,
  unfollowUser,
  searchUsers,
} from "../models/User.js";

const router = Router();

router.use(ensureAuthenticated);

router.get("/search", async (req, res, next) => {
  try {
    const searchQuery = (req.query.q || "").trim();
    if (searchQuery.length < 2) {
      return res.status(200).json([]);
    }
    const results = await searchUsers(searchQuery);
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.patch("/me", async (req, res, next) => {
  try {
    const updated = await updateUser(req.user._id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    if (err && err.status === 400) {
      return res.status(400).json({ errors: err.errors });
    }
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const user = await findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/:userId/follow", async (req, res, next) => {
  try {
    const updated = await followUser(
      req.user._id.toString(),
      req.params.userId,
    );
    res.status(200).json(updated);
  } catch (err) {
    if (err && err.status) {
      return res.status(err.status).json({ error: err.error });
    }
    next(err);
  }
});

router.delete("/:userId/follow", async (req, res, next) => {
  try {
    const updated = await unfollowUser(
      req.user._id.toString(),
      req.params.userId,
    );
    res.status(200).json(updated);
  } catch (err) {
    if (err && err.status) {
      return res.status(err.status).json({ error: err.error });
    }
    next(err);
  }
});

export default router;
