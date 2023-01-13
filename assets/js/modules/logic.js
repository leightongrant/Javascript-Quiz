// Imports
import { questions } from "./questions.js";
//const questions = require('./questions.js');

// Quiz object
const quiz = {
    questions: questions,
    duration: 60,
    question: 0,
    score: 0,
    startTimer () {
        let timeDisplay = document.querySelector('#time');

        const countdown = () => {
            timeDisplay.innerText = this.duration;
            this.duration--;
            if (this.duration < 0) {
                clearInterval(clearTimer);
                // Shows final score if timer runs out
                document.querySelector('#questions').setAttribute('class', 'hide');
                document.querySelector('#end-screen').setAttribute('class', 'show');
                document.querySelector('#final-score').textContent = this.score;

            } else {
                // Hide start button once quiz has started
                document.querySelector('#start').style.visibility = 'hidden';
            }
        };
        let clearTimer = setInterval(countdown, 1000);
    },
    showForm () {
        // Display question
        document.querySelector('#question-title').innerHTML = `Question ${this.question + 1}<br><hr>${this.questions[this.question][1]}`;

        // Generate Answer Choices
        const choices = document.querySelector('#choices');
        let answerChoices = "<form>";
        this.questions[this.question][2].forEach((q) => {
            answerChoices += `<input type="radio" name="${this.questions[this.question][0]}" id="ans-${q}" value="${q}"><label for="${q}">${q}</label><br>`;
        });
        answerChoices += "<button type='submit' class='submit'>Check Answer</button>";
        answerChoices += "</form>";
        choices.innerHTML = answerChoices;

        // Check Answer
        const checkAnswer = document.querySelector('.submit');
        // Disable button until answer is chosen
        checkAnswer.disabled = true;
        // Enable button if answer selected
        const choiceName = document.querySelectorAll(`[name="${this.questions[this.question][0]}"]`);
        choiceName.forEach((choice) => {
            choice.addEventListener('click', () => {
                checkAnswer.disabled = false;
            });
        });
        // Get value from selected answer and check if correct
        checkAnswer.addEventListener('click', (event) => {
            event.preventDefault();
            choiceName.forEach((choice) => {
                if (choice.checked) {
                    if (choice.value === this.questions[this.question][3]) {
                        this.score += 5;
                        const audio = new Audio('./assets/sfx/correct.wav');
                        audio.play();
                    } else {
                        this.duration -= 10;
                        const audio = new Audio('./assets/sfx/incorrect.wav');
                        audio.play();
                    }

                };

            });

            // Increment proper to select next question
            this.question++;

            // Call buildFrom until quiz is finished
            if (this.question < 2) {
                this.showForm();
            } else {
                //Shows final score if all questions answered
                document.querySelector('#questions').setAttribute('class', 'hide');
                document.querySelector('#end-screen').setAttribute('class', 'show');
                document.querySelector('#final-score').textContent = this.score;
            }



        });
    },

    startQuiz () {
        // Sets the question property back to zero
        this.question = 0;
        // Display form
        this.showForm();
        // Start timer
        this.startTimer();
    }
};


export { quiz };

//module.exports = quiz

