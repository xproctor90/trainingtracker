var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id:  Number,
  firstName: String,
  lastName: String,
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  workouts: [String],
  userCreated: {
    type: Date,
    default: Date.now
  },
  baseline: {
    height: String,
    weight: String,
    bloodPressure: String,
    restHeartRate: String,
    waist: String,
    pullUps: String,
    pushUps: String,
    sitUps: String,
    mile: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;