// Imports
import { questions } from "./modules/questions.js";

// Quiz object
const quiz = {
    questions: questions,
    duration: 10,
    question: 0,
    score: 0,
    startTimer () {
        let timeDisplay = document.querySelector('#time');

        const countdown = () => {
            timeDisplay.innerText = this.duration;
            this.duration -= 1;
            if (this.duration < 0) {
                clearInterval(clearTimer);
            }
        };
        let clearTimer = setInterval(countdown, 1000);
    }
};


console.log(quiz.startTimer());

