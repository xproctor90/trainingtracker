const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const PORT = process.env.PORT || 3001;

const cors = require('cors');
require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

app.use(cors());

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz(['read:messages']);

app.get('/api/public', function(req, res) {
  res.json({
    message: "Hello from a public endpoint! You don't need to be authenticated to see this."
  });
});

app.get('/api/private', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

app.listen(3001);
console.log('Listening on http://localhost:3001');










//  app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
//  })

//  app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 3000')
//  })

// // Configure body parser for AJAX requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // Serve up static assets
// app.use(express.static("client/build"));
// // Add routes, both API and view
// app.use(routes);
// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
// // process.env.MONGODB_URI || "mongodb://heroku_6fkdpj10:f0j84fm11lgdm41kb4i6963odi@ds227565.mlab.com:27565/heroku_6fkdpj10",
//   process.env.MONGODB_URI || "mongodb://localhost/trainingtracker",
//   {
//     useMongoClient: true
//   }
// );

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });