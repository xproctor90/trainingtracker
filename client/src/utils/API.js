import axios from "axios";

export default {
  // Gets all exercises
  getExercises: function() {
    return axios.get("/api/exercise");
  },
  // Gets the exercise with the given id
  getExercise: function(id) {
    return axios.get("/api/exercise/" + id);
  },
  // Deletes the exercise with the given id
  deleteExercise: function(id) {
    return axios.delete("/api/exercise/" + id);
  },
  // Saves an exercise to the database
  saveExercise: function(exerciseData) {
    return axios.post("/api/exercise", exerciseData);
  },
  // Gets all workouts
  getWorkouts: function() {
    return axios.get("/api/workout");
  },
  // Gets the workout with the given id
  getWorkout: function(id) {
    return axios.get("/api/workout/" + id);
  },
  // Deletes the workout with the given id
  deleteWorkout: function(id) {
    return axios.delete("/api/workout/" + id);
  },
  // Saves a workout to the database
  saveWorkout: function(workoutData) {
    return axios.post("/api/workout", workoutData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
