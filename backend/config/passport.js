import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { findByUsername, findById, verifyPassword } from "../models/User.js";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await findByUsername(username);
      if (!user) {
        return done(null, false, {
          message: "Incorrect username or password.",
        });
      }

      const isMatch = await verifyPassword(user, password);
      if (!isMatch) {
        return done(null, false, {
          message: "Incorrect username or password.",
        });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user._id.toString());
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findById(id);
    done(null, user || false);
  } catch (err) {
    done(err);
  }
});

export default passport;
