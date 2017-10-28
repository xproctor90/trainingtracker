const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/trainingtracker",
  {
    useMongoClient: true
  }
);

const userSeed = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "jdoe123",
      password: "Password123",
      email: "john@doe.com",
      workouts: ["My first workout"]
    }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
