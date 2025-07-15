const quiz = [
  {
    q: "How many minutes of moderate exercise should an adult get per week?",
    a: "A",
    options: { A: "150 minutes", B: "60 minutes", C: "300 minutes" }
  },
  {
    q: "Which nutrient is essential for muscle growth?",
    a: "B",
    options: { A: "Carbohydrates", B: "Protein", C: "Fats" }
  },
  {
    q: "Which exercise is best for cardiovascular health?",
    a: "C",
    options: { A: "Deadlifts", B: "Squats", C: "Running" }
  }
];

let current = 0;

function loadQuestion() {
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const q = quiz[current];
  questionDiv.textContent = q.q;
  optionsDiv.innerHTML = "";

  for (const [key, val] of Object.entries(q.options)) {
    const btn = document.createElement("button");
    btn.textContent = `${key}: ${val}`;
    btn.onclick = () => checkAnswer(key);
    optionsDiv.appendChild(btn);
  }

  document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
  const correct = quiz[current].a;
  const result = document.getElementById("result");

  if (answer === correct) {
    result.textContent = "✅ Correct!";
  } else {
    result.textContent = "❌ Wrong!";
  }

  current = (current + 1) % quiz.length;
  setTimeout(loadQuestion, 1200);
}

window.onload = loadQuestion;

// ------------------- API Fetch: Random Workout --------------------
function getWorkout() {
  const workouts = [
    "🏃‍♂️ 20-minute run",
    "💪 3 sets of push-ups (15 reps)",
    "🧘 10-minute yoga session",
    "🚴 30-minute cycling",
    "🏋️‍♀️ 4 sets of squats (12 reps)",
    "🧗‍♂️ 10-minute climbing or stair workout"
  ];
  const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
  document.getElementById("jokeText").textContent = randomWorkout;
}
