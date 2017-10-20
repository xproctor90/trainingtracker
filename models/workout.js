var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  id:  Number,
  exercises: [{exercise: String, reps: Number, sets: Number, distance: Number, time: Number  }],
  name:   String,
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;