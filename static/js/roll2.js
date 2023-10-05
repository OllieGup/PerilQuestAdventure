var i = 0;
        var txt = "Before embarking on your venture, you must first establish some initial strengths. \n\nYou have been preparing for this quest for quite some time, by learning technology and gaming skills, some of which you have become highly knowledgeable in. \n\nTo progress to each new level you will have to navigate through various scenarios, using your luck and skill scores, and hold a decent stamina score to progress to the next stage. \n\nIt's time to start your adventure. \n\nPress Roll to roll the dice to determine your initial SKILL, LUCK and STAMINA score...";
        var speed = 40;
        
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("intro").innerHTML += txt.charAt(i);
                if (txt.charAt(i) === '\n') {
            document.getElementById("intro").innerHTML += '<br>'; // Convert newline characters to HTML line breaks
            }
            i++;
            setTimeout(typeWriter, speed);
        } else {
                // Typewriter text has finished, show the "Start Adventure" button
                document.getElementById("diceRollerButton").style.display = "inline-block";
  }
}

        // Call the typeWriter function when the page is fully loaded
    window.onload = function() {
        typeWriter();
    };

    // Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to roll two dice and update scores
function introRollDice() {
    // Disable the "Roll" button
    document.getElementById("diceRollerButton").disabled = true;
    
    // Roll two dice (each with values from 1 to 6) for skill
    var dice1Skill = getRandomNumber(1, 6);
    var dice2Skill = getRandomNumber(1, 6);

    // Calculate skill score
    var skillScore = dice1Skill + dice2Skill;

    // Roll two dice (each with values from 1 to 6) for luck
    var dice1Luck = getRandomNumber(1, 6);
    var dice2Luck = getRandomNumber(1, 6);

    // Calculate luck score
    var luckScore = dice1Luck + dice2Luck;

    // Roll two dice (each with values from 1 to 6) for stamina
    var dice1Stamina = getRandomNumber(1, 6);
    var dice2Stamina = getRandomNumber(1, 6);
    
    // Calculate stamina score
    var staminaScore = dice1Stamina + dice2Stamina;

    // Store the scores in session storage
    sessionStorage.setItem("skillScore", skillScore);
    sessionStorage.setItem("luckScore", luckScore);
    sessionStorage.setItem("staminaScore", staminaScore);

    // Display the rolled values and scores
    document.getElementById("diceRollerTitle").style.display = "block";
    document.getElementById("diceResults").style.display = "block";
    document.getElementById("diceResults").innerHTML = "Skill: " + dice1Skill + " + " + dice2Skill + " = " + skillScore + "<br>Luck: " + dice1Luck + " + " + dice2Luck + " = " + luckScore + "<br>Stamina: " + dice1Stamina + " + " + dice2Stamina + " = " + staminaScore;

    // Update the hidden input fields with the scores
    document.getElementById("skillScore").textContent = skillScore;
    document.getElementById("luckScore").textContent = luckScore;
    document.getElementById("staminaScore").textContent = staminaScore;

    // Display the score message and "Continue" button
    document.getElementById("scoreMessage").style.display = "block";
}


// JavaScript function to navigate to game.html
function continueToGame() {
    window.location.href = '/game';
}


    