function displayParagraphWithDelay(paragraphId, text, delayMs) {
    setTimeout(function() {
        document.getElementById(paragraphId).textContent = text;
    }, delayMs);
}

// Wrap your code in an event listener for the "DOMContentLoaded" event
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the scores from session storage
    var skillScore = sessionStorage.getItem("skillScore");
    var luckScore = sessionStorage.getItem("luckScore");
    var staminaScore = sessionStorage.getItem("staminaScore");

    // Convert scores to strings
    var skillScoreString = skillScore.toString();
    var luckScoreString = luckScore.toString();
    var staminaScoreString = staminaScore.toString();

    // Populate the scores box with the retrieved values
    document.getElementById("skillScore").textContent = "Skill: " + skillScoreString;
    document.getElementById("luckScore").textContent = "Luck: " + luckScoreString;
    document.getElementById("staminaScore").textContent = "Stamina: " + staminaScoreString;
});




// Set the delays for each paragraph to ensure they run in order
displayParagraphWithDelay("paragraph1", "Your sitting at your desk and you look around.", 5000); // 5-second delay
displayParagraphWithDelay("paragraph2", "WHAT WILL YOU DO?.", 7000); // 7-second delay
displayParagraphWithDelay("paragraph3", "1 - Smile at a colleague dressed in a rock band t-shirt and beanie hat sitting opposite you?...", 8000); // 15-second delay
displayParagraphWithDelay("paragraph4", "2 - Offer to make the boss a coffee?.", 10000); // 20-second delay

// Add more paragraphs and delays as needed


