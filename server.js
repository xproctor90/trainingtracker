const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3001;

app.use(cors())

app.get('/products/:id', function (req, res, next) {
 res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3000, function () {
 console.log('CORS-enabled web server listening on port 3000')
})

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_6fkdpj10:f0j84fm11lgdm41kb4i6963odi@ds227565.mlab.com:27565/heroku_6fkdpj10",
  // process.env.MONGODB_URI || "mongodb://localhost/trainingtracker",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});