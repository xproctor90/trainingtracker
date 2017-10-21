const router = require("express").Router();
const exerciseController = require("../../controllers/exerciseController");

// Matches with "/api/exercise"
router.route("/exercise")
  .get(exerciseController.findAll)
  .post(exerciseController.create);

// Matches with "/api/exercise/:id"
router
  .route("/exercise/:id")
  .get(exerciseController.findById)
  .put(exerciseController.update)
  .delete(exerciseController.remove);

module.exports = router;
