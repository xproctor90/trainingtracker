const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_6fkdpj10:f0j84fm11lgdm41kb4i6963odi@ds227565.mlab.com:27565/heroku_6fkdpj10",
  {
    useMongoClient: true
  }
);

const workoutSeed = [
    {
      id: 1,
      workoutName: "Workout 1",
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
    },
    {
      id: 2,
      workoutName: "Workout 2",
      exercises: [
        {
          id: 6,
          name: "Negative Crunches",
          description: "Sit yourself on the decline bench and fix your legs. Cross your arms over the chest and bring with a rolling movement your upper body up, go now without a pause and with a slow movement down again. Don't let your head move during the exercise.",
          image: ["https://wger.de/media/exercise-images/93/Decline-crunch-1.png", "https://wger.de/media/exercise-images/93/Decline-crunch-2.png"]
        },
        {
          id: 7,
          name: "Hyperextensions",
          description: "Lay on the hyperextension pad with the belly button just at the leading edge, the upper body can hang freely. Tense your whole back's muscles and bring your upper body up till it is horizontal, but not more. Go slowly down and don't relax your muscles.",
          image: ["https://wger.de/media/exercise-images/128/Hyperextensions-1.png", "https://wger.de/media/exercise-images/128/Hyperextensions-2.png"]
        },
        {
          id: 8,
          name: "Bench Press Narrow Grip",
          description: "Lay down on a bench, the bar is directly over your eyes, the knees form a slight angle and the feet are firmly on the ground. Hold the bar with a narrow grip (around 20cm.). Lead the weight slowly down till the arms are parallel to the floor (elbow: right angle), press then the bar up. When bringing the bar down, don't let it down on your nipples as with the regular bench pressing, but somewhat lower.",
          image: ["https://wger.de/media/exercise-images/88/Narrow-grip-bench-press-1.png", "https://wger.de/media/exercise-images/88/Narrow-grip-bench-press-2.png"]
        },
        {
          id: 9,
          name: "Dips",
          description: "Hold onto the bars at a narrow place (if they are not parallel) and press yourself up, but don't stretch the arms completely, so the muscles stay during the whole exercise under tension. Now bend the arms and go down as much as you can, keeping the elbows always pointing back, At this point, you can make a short pause before repeating the movement.",
          image: ["https://wger.de/media/exercise-images/82/Tricep-dips-2-1.png", "https://wger.de/media/exercise-images/82/Tricep-dips-2-2.png"]
        },
        {
          id: 10,
          name: "Leg Raises, Lying",
          description: "Lay down on a bench and hold onto the recliner with your hands to keep you stable. Hold your legs straight and lift them till they make an angle of about 45°. Make a short pause of 1 sec. and go slowly down to the initial position. To increase the intensity you can make a longer pause of 7 sec. every 5th time.",
          image: ["https://wger.de/media/exercise-images/125/Leg-raises-1.png", "https://wger.de/media/exercise-images/125/Leg-raises-2.png"]
        }]
      }
  ];

  db.Workout
  .remove({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
