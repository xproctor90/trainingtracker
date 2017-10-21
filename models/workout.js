var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  id:  Number,
  workoutName: String,
  exercises: [{name: String, description: String, image: String, reps: Number, sets: Number, distance: Number, time: Number}]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;