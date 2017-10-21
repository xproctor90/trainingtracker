const router = require("express").Router();
const exerciseRoutes = require("./exercise");
const workoutRoutes = require("./workout");
const userRoutes = require("./user");

// routes
router.use("/exercise", exerciseRoutes);
router.use("/workout", workoutRoutes);
router.use("/user", userRoutes);

module.exports = router;
