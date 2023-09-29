// common.js

function updateSkillScore(score) {
    document.getElementById("skillScore").textContent = score;
}

function updateStaminaScore(score) {
    document.getElementById("staminaScore").textContent = score;
}

function updateLuckScore(score) {
    document.getElementById("luckScore").textContent = score;
}

function displayParagraphWithDelay(paragraphId, text, delayMs) {
    setTimeout(function() {
        document.getElementById(paragraphId).textContent = text;
    }, delayMs);
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Roll a 6-sided die
}
