// Imports
import { quiz } from "./modules/logic.js";
//const quiz = require('./modules/logic.js');


// Show questions and answers
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    //document.querySelector('#questions').setAttribute('class', 'show');
    quiz.startQuiz();
});