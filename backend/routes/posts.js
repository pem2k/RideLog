import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";
import {
  validatePostInput,
  isValidId,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../models/Post.js";
import { deleteManyByPostId } from "../models/Comment.js";

const router = Router();

router.use(ensureAuthenticated);

router.post("/", async (req, res, next) => {
  try {
    const errors = validatePostInput(req.body);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const post = await createPost(req.user._id, req.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

router.get("/:postId", async (req, res, next) => {
  try {
    if (!isValidId(req.params.postId)) {
      return res.status(400).json({ error: "Invalid post id" });
    }

    const post = await getPostById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
});

router.patch("/:postId", async (req, res, next) => {
  try {
    if (!isValidId(req.params.postId)) {
      return res.status(400).json({ error: "Invalid post id" });
    }

    const existing = await getPostById(req.params.postId);
    if (!existing) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (existing.authorId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "You may only edit your own posts" });
    }

    const errors = validatePostInput(req.body);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const updated = await updatePost(req.params.postId, req.body);
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/:postId", async (req, res, next) => {
  try {
    if (!isValidId(req.params.postId)) {
      return res.status(400).json({ error: "Invalid post id" });
    }

    const existing = await getPostById(req.params.postId);
    if (!existing) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (existing.authorId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "You may only delete your own posts" });
    }

    await deletePost(req.params.postId);
    await deleteManyByPostId(req.params.postId);

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
