const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');


// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: "https://training-tracker.auth0.com/.well-known/jwks.json"
//   }),
//   audience: 'https://training-tracker-app.heroku.com',
//   issuer: "https://training-tracker.auth0.com/",
//   algorithms: ['RS256']
// });

// router.use(jwtCheck);

// router.get('/authorized', jwtCheck, function (req, res) {
//   res.send('Secured Resource');
// });

// Matches with "/api/workout"
// router.route("/", jwtCheck)
router.route("/")
  .get(workoutController.findAll)
  .post(workoutController.create);

// Matches with "/api/workout/:id"
router
  // .route("/:id", jwtCheck)
  .route("/:id")  
  .get(workoutController.findById)
  .put(workoutController.update)
  .delete(workoutController.remove);

module.exports = router;
