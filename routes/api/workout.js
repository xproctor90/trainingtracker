const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

// Matches with "/api/workout"
router.route("/workout")
  .get(workoutController.findAll)
  .post(workoutController.create);

// Matches with "/api/workout/:id"
router
  .route("/workout/:id")
  .get(workoutController.findById)
  .put(workoutController.update)
  .delete(workoutController.remove);

module.exports = router;
