const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/trainingtracker",
  {
    useMongoClient: true
  }
);

const exerciseSeed = [
  {
    id: 1,
    name: "Crunches",
    description: "Lay down on your back a soft surface, the feet are on the floor. Ask a partner or use some other help (barbell, etc.) to keep them fixed, your hands are behind your head. From this position move your upper body up till your head or elbows touch your knees. Do this movement by rolling up your back.",
    image: ["https://wger.de/media/exercise-images/91/Crunches-1.png", "https://wger.de/media/exercise-images/91/Crunches-2.png"]
  }, 
  {
    id: 2,
    name: "Push-ups",
    description: "Start with your body streched, your hands are shoulder-wide appart on the ground. Push yourself off the ground till you strech your arms. The back is always straight and as well as the neck (always look to the ground). Lower yourself to the initial position and repeat.",
    image: ["https://wger.de/media/exercise-images/195/Push-ups-1.png", "https://wger.de/media/exercise-images/195/Push-ups-2.png"]
  },
  {
    id: 3,
    name: "Squats",
    description: "Make sure you have put the barbell at a height where you can comfortably take it out and put it back in. Take it out and make yourself ready:    The bar is somewhat lower than your shoulders. The feet are quite apart and point out. The head is in your neck and looks up. The chest is out. Go now slowly down, till your thighs are parallel with the floor, not lower. The knees point outwards, your butt, out. Make a small pause of 1 second and with as much energy as you can, push the weight up. Make a pause of 2 seconds and repeat.",
    image: ["https://wger.de/media/exercise-images/111/Wide-stance-squat-2.gif", "https://wger.de/media/exercise-images/111/Wide-stance-squat-1.gif"]
  },
  {
    id: 4,
    name: "Biceps Curls with Dumbbells",
    description: "Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).",
    image: ["https://wger.de/media/exercise-images/81/Biceps-curl-1.png", "https://wger.de/media/exercise-images/81/Biceps-curl-2.png"]
  },
  {
    id: 5,
    name: "Dumbbell Lunges Walking",
    description: "Take two dumbbells in your hands, stand straight, feet about shoulder wide. Take one long step so that the front knee is approximately forming a right angle. The back leg is streched, the knee is low but doesn't touch the ground. Complete the step by standing up and repeat the movement with the other leg.",
    image: ["https://wger.de/media/exercise-images/113/Walking-lunges-1.png", "https://wger.de/media/exercise-images/113/Walking-lunges-2.png"]
  }
];

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

const workoutSeed = [
  {
    id: 1,
    workoutName: "My first workout",
    exercises: [  
    {
      id: 1,
      name: "Crunches",
      description: "Lay down on your back a soft surface, the feet are on the floor. Ask a partner or use some other help (barbell, etc.) to keep them fixed, your hands are behind your head. From this position move your upper body up till your head or elbows touch your knees. Do this movement by rolling up your back.",
      image: ["https://wger.de/media/exercise-images/91/Crunches-1.png", "https://wger.de/media/exercise-images/91/Crunches-2.png"],
      reps: 20,
      sets: 3
    }, 
    {
      id: 2,
      name: "Push-ups",
      description: "Start with your body streched, your hands are shoulder-wide appart on the ground. Push yourself off the ground till you strech your arms. The back is always straight and as well as the neck (always look to the ground). Lower yourself to the initial position and repeat.",
      image: ["https://wger.de/media/exercise-images/195/Push-ups-1.png", "https://wger.de/media/exercise-images/195/Push-ups-2.png"],
      reps: 20,
      sets: 3
    },
    {
      id: 3,
      name: "Squats",
      description: "Make sure you have put the barbell at a height where you can comfortably take it out and put it back in. Take it out and make yourself ready:    The bar is somewhat lower than your shoulders. The feet are quite apart and point out. The head is in your neck and looks up. The chest is out. Go now slowly down, till your thighs are parallel with the floor, not lower. The knees point outwards, your butt, out. Make a small pause of 1 second and with as much energy as you can, push the weight up. Make a pause of 2 seconds and repeat.",
      image: ["https://wger.de/media/exercise-images/111/Wide-stance-squat-2.gif", "https://wger.de/media/exercise-images/111/Wide-stance-squat-1.gif"],
      reps: 15,
      sets: 3
    },
    {
      id: 4,
      name: "Biceps Curls with Dumbbells",
      description: "Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).",
      image: ["https://wger.de/media/exercise-images/81/Biceps-curl-1.png", "https://wger.de/media/exercise-images/81/Biceps-curl-2.png"],
      reps: 15,
      sets: 3
    },
    {
      id: 5,
      name: "Dumbbell Lunges Walking",
      description: "Take two dumbbells in your hands, stand straight, feet about shoulder wide. Take one long step so that the front knee is approximately forming a right angle. The back leg is streched, the knee is low but doesn't touch the ground. Complete the step by standing up and repeat the movement with the other leg.",
      image: ["https://wger.de/media/exercise-images/113/Walking-lunges-1.png", "https://wger.de/media/exercise-images/113/Walking-lunges-2.png"],
      time: 2
    }]
  }
];

db.Exercise
  .remove({})
  .then(() => db.Exercise.collection.insertMany(exerciseSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.Exercise.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Workout
  .remove({})
  .then(() => db.Exercise.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
