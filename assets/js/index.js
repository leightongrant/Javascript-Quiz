// Imports
import { quiz } from "./modules/logic.js";

// Show questions and answers
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    quiz.startQuiz();
});

const submitScore = document.querySelector("#submit");
submitScore.addEventListener('click', () => {
    quiz.submitScores();
});