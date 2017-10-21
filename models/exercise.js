var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  id:  Number,
  name: String,
  description: String,
  image: [String]
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;