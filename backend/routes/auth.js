import { Router } from "express";
import passport from "../config/passport.js";
import { createUser, sanitizeUser } from "../models/User.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    const user = await createUser(req.body || {});
    req.login(user, (err) => {
      if (err) return next(err);
      return res.status(201).json(user);
    });
  } catch (err) {
    if (err && err.status === 400) {
      return res.status(400).json({ errors: err.errors });
    }
    next(err);
  }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res
        .status(401)
        .json({ error: info?.message || "Invalid credentials" });
    }
    req.login(user, (loginErr) => {
      if (loginErr) return next(loginErr);
      return res.status(200).json(sanitizeUser(user));
    });
  })(req, res, next);
});

router.post("/logout", ensureAuthenticated, (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.status(204).end();
  });
});

router.get("/me", ensureAuthenticated, (req, res) => {
  res.status(200).json(sanitizeUser(req.user));
});

export default router;
