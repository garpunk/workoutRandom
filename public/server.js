const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define workout categories and exercises
const workouts = {
  legs: [
    { name: 'Squats', reps: '15 reps' },
    { name: 'Lunges', reps: '10 reps per leg' },
    { name: 'Calf Raises', reps: '20 reps' },
    { name: 'Step-Ups', reps: '10 reps per leg' },
    { name: 'Wall Sit', reps: '30 seconds' },
  ],
  upperbody: [
    { name: 'Push-Ups', reps: '15 reps' },
    { name: 'Pull-Ups', reps: '5 reps' },
    { name: 'Dumbbell Press', reps: '12 reps' },
    { name: 'Tricep Dips', reps: '15 reps' },
    { name: 'Plank Shoulder Taps', reps: '10 reps per side' },
  ],
  abs: [
    { name: 'Sit-Ups', reps: '20 reps' },
    { name: 'Plank', reps: '30 seconds' },
    { name: 'Bicycle Crunches', reps: '15 reps per side' },
    { name: 'Mountain Climbers', reps: '20 reps per side' },
    { name: 'Leg Raises', reps: '15 reps' },
  ],
  cardio: [
    { name: 'Jumping Jacks', reps: '30 seconds' },
    { name: 'High Knees', reps: '30 seconds' },
    { name: 'Burpees', reps: '10 reps' },
    { name: 'Skater Jumps', reps: '15 reps per side' },
    { name: 'Butt Kicks', reps: '30 seconds' },
  ],
};

// Function to generate a randomized workout
function generateWorkout() {
  const randomizedWorkout = {};
  for (const [category, exercises] of Object.entries(workouts)) {
    const randomExercise =
      exercises[Math.floor(Math.random() * exercises.length)];
    randomizedWorkout[category] = randomExercise;
  }
  return randomizedWorkout;
}

// API route to get a randomized workout
app.get('/api/workout', (req, res) => {
  const workout = generateWorkout();
  res.json(workout);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
