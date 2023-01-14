import { quiz } from "./modules/logic.js";

// Render highscores
quiz.renderHighScores();

// Clear highscores
const clearHighScores = document.querySelector("#clear");
clearHighScores.addEventListener('click', () => {
    quiz.clearHighScores("highScores");
    location.assign("highscores.html");
});
