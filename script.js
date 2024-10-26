// Define questions and correct answers
const questions = [
  { question: "What is Next.js?", answer: "A React framework" },
  { question: "How do you create a page in Next.js?", answer: "Create a file in pages folder" },
  { question: "What is getStaticProps used for?", answer: "For static generation" },
  { question: "Explain the purpose of getServerSideProps.", answer: "For server-side rendering" },
  { question: "How do you handle routing in Next.js?", answer: "Using pages folder" },
  { question: "What is dynamic routing in Next.js?", answer: "Routing based on URL params" },
  { question: "How to optimize images in Next.js?", answer: "Using next/image component" },
  { question: "Explain API routes in Next.js.", answer: "Create API endpoints in pages/api" },
  { question: "How do you deploy Next.js to Vercel?", answer: "Push to GitHub and link with Vercel" },
  { question: "What are serverless functions in Next.js?", answer: "Functions that run without managing servers" },
  { question: "What is pre-rendering in Next.js?", answer: "Rendering at build time" },
  { question: "What is the difference between static and dynamic pages?", answer: "Static is pre-rendered, dynamic updates on request" }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email) {
    console.log("Login successful! Welcome, " + name + " (" + email + ")");
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    showQuestion();
  } else {
    console.log("Please enter both name and email to start the quiz.");
  }
}

function showQuestion() {
  document.getElementById('question').textContent = questions[currentQuestion].question;
}

function submitAnswer() {
  const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score += 2; // Award 2 points for correct answers
    console.log(`Question ${currentQuestion + 1}: Correct answer!`);
  } else {
    console.log(`Question ${currentQuestion + 1}: Incorrect answer.`);
  }

  document.getElementById('answer').value = ""; // Clear input
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  document.getElementById('quiz-section').classList.add('hidden');
  document.getElementById('result-section').classList.remove('hidden');

  let resultText;
  if (score < 20) {
    resultText = "Aww! Better luck next time!";
    console.log("Final Result: Failed - Score below 20");
  } else {
    resultText = "Congratulations!";
    console.log("Final Result: Passed - Score 20 or above");
  }

  document.getElementById('result-text').textContent = resultText;
  document.getElementById('score').textContent = `You scored ${score} out of 24.`;
  console.log(`Final Score: ${score} out of 24`);
}
