// Imports
import { quiz } from "./modules/logic.js";

// Show questions and answers
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    quiz.startQuiz();
});

// Submit scores
const submitScore = document.querySelector("#submit");
submitScore.addEventListener('click', () => {
    quiz.submitScores();
});

// Styling
document.querySelector("#end-screen").setAttribute("style", "border: 1px solid #d8d8d8;padding: 20px;border-radius: 6px;margin-top: 50px;font-family: monospace;");