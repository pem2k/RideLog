import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";
import { findById } from "../models/User.js";
import { ObjectId } from "mongodb";

const router = Router();

router.use(ensureAuthenticated);

router.get("/:userId", async (req, res, next) => {
  try {
    if (!ObjectId.isValid(req.params.userId)) {
      return res.status(400).json({ error: "Invalid user id" });
    }

    const user = await findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

export default router;
