var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id:  Number,
  name: [{firstName: String, lastName: String}],
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
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  workouts: [{workout: [Schema.Types.Mixed]}],
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;