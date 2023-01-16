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

    //quiz.submitScores();
    let subscore = document.querySelector("#initials").value;
    const inputFeedback = (message) => {
        document.querySelector("#initials").style.backgroundColor = "pink";
        document.querySelector("#initials").setAttribute('placeholder', message);
        setTimeout(() => {
            document.querySelector("#initials").style.backgroundColor = "white";
        }, 1000);
    };

    if (subscore.length === 0) {
        inputFeedback('Please enter your initials');
    } else if (document.querySelector("#initials").value.match("[a-zA-Z]+") === null) {
        inputFeedback('Letters only');
    } else {
        quiz.submitScores(document.querySelector("#initials").value.trim().match("[a-zA-Z]+")[0].slice(0, 2).toUpperCase());
    }
});

// Styling
document.querySelector("#end-screen").setAttribute("style", "border: 1px solid #d8d8d8;padding: 20px;border-radius: 6px;margin-top: 50px;font-family: monospace;");