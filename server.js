const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// var cors = require('cors')
const PORT = process.env.PORT || 3001;
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://training-tracker.auth0.com/.well-known/jwks.json"
  }),
  audience: 'https://training-tracker-app.heroku.com',
  issuer: "https://training-tracker.auth0.com/",
  algorithms: ['RS256']
});

app.use(jwtCheck);

<<<<<<< HEAD
app.get('/authorized', function (req, res) {
res.send('Secured Resource');
});

// ====================
// Passport
=======
var passport = require('passport');
var session = require('express-session');
var db = require('./models');
>>>>>>> master

// var passport = require('passport');
// var session = require('express-session');

// app.use(session({ secret: 'training-tracker',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// // load passport strategies
// require('./config/passport.js')(passport, db.User);

// var authRoute = require('./routes/api/auth-routes.js')(app, passport);
// =====================

// CORS 
// app.use(cors())

//  app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
//  })

//  app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 3000')
//  })

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