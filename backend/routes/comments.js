import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";
import { isValidId, getCommentById, deleteComment } from "../models/Comment.js";

const router = Router();

router.use(ensureAuthenticated);

router.delete("/:commentId", async (req, res, next) => {
  try {
    if (!isValidId(req.params.commentId)) {
      return res.status(400).json({ error: "Invalid comment id" });
    }

    const existing = await getCommentById(req.params.commentId);
    if (!existing) {
      return res.status(404).json({ error: "Comment not found" });
    }
    if (existing.authorId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You may only delete your own comments" });
    }

    await deleteComment(req.params.commentId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
