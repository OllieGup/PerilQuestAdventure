// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to roll two dice and update scores
function introRollDice() {
    // Roll two dice (each with values from 1 to 6)
    var dice1 = getRandomNumber(1, 6);
    var dice2 = getRandomNumber(1, 6);

    // Calculate skill, luck, and stamina scores
    var skillScore = dice1 + dice2;
    var luckScore = getRandomNumber(1, 6);
    var staminaScore = getRandomNumber(1, 6);

    // Display the rolled values and scores
    document.getElementById("diceRollerTitle").style.display = "block";
    document.getElementById("diceRollerTitle").innerHTML = "Dice Roller Results";
    document.getElementById("introRollButton").style.display = "none";
    document.getElementById("introRollResults").innerHTML = "Dice 1: " + dice1 + "<br>Dice 2: " + dice2 + "<br>Skill: " + skillScore + "<br>Luck: " + luckScore + "<br>Stamina: " + staminaScore;

    // Update the hidden input fields with the scores
    document.getElementById("skillScore").textContent = skillScore;
    document.getElementById("luckScore").textContent = luckScore;
    document.getElementById("staminaScore").textContent = staminaScore;
}
