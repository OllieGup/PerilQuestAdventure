// roll.js (for intro or roll.html)

// Set the delays for each paragraph to ensure they run in order
displayParagraphWithDelay("paragraph1", "Welcome to Stage 1. The offices of VIPERCALL TECHNOLOGIES - YOUR FIRST DAY.", 5000); // 5-second delay
displayParagraphWithDelay("paragraph2", "You are a keen gamer with decent technology skills and last week you finished working your dead-end job as a fast-food delivery rider.", 10000); // 10-second delay
displayParagraphWithDelay("paragraph3", "You've recently secured a new job at a start-up company called Vipercall Technologies which investigates online scams. There's something new on the market - a groundbreaking and eagerly awaited video game called Peril Quest, powered by the first neural network games engine where players can enter breathtakingly realistic realms. And it's within this game that some of the most prolific online scams are currently taking place...", 15000); // 15-second delay
displayParagraphWithDelay("paragraph4", "The main office of Vipercall Technologies consists of two rows of four desks and a large curved communications screen. The owners have purposely kept everything uncluttered and minimal within the small office. One of the rows of desks has just enough room to house powerful PCs, monitors, and keyboards. A separate demonstration room called Studio X is situated at the far end of the office within which is a stand where four sleek, translucent headbands and haptic skins are placed. You are keen to get to know your new coworkers and make an impression. Your current aim is to find out what goes on in Studio X.", 28000); // 20-second delay
displayParagraphWithDelay("paragraph5", "Before embarking on your venture, you must first establish some initial strengths. You have been preparing for this quest for quite some time, by learning technology and gaming skills. Some of which you have become highly knowledgeable in.", 38000); // 25-second delay
displayParagraphWithDelay("paragraph6", "To progress to each new level you will have to navigate through various scenarios, using your luck and skill scores, and hold a decent stamina score to progress to the next stage.", 58000); // 30-second delay
displayParagraphWithDelay("paragraph7", "It's time to start your adventure. You will now roll dice to determine your Skill, Stamina, and Luck scores.", 63000); // 35-second delay
displayParagraphWithDelay("paragraph8", "Press Roll to roll the dice to determine your initial SKILL, STAMINA and LUCK score...", 70000); // 40-second delay
// Add more paragraphs and delays as needed

// Automatically submit the form when Roll button is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('form').submit();
    }
});
