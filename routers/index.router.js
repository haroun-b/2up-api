const router = require(`express`).Router();

router.get(`/`, (req, res, next) => {
  try {
    res.status(200).json({
      message: `Welcome to Evently (NOT MEETUP) 😁`,
      apiGithubRepo: `https://github.com/haroun-b/evently`,
    });
  } catch (err) {
    next(err);
  }
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use("/signup", require("./signup.router"));
router.use("/login", require("./login.router"));
router.use("/verify", require("./verifyEmail.router"));
router.use(`/reset-password`, require(`./resetPassword.router`));
router.use("/user", require("./user.router"));
router.use("/event", require("./event.router"));
router.use("/request", require("./attendanceRequest.router"));

module.exports = router;
