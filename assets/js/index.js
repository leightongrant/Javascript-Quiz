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