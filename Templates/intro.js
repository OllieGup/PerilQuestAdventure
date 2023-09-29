document.addEventListener('DOMContentLoaded', function() {
    // Add a click event listener to the button
    const adventureButton = document.getElementById('introRollButton');
    adventureButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Make an AJAX request to your Flask server to get updated scores
        fetch('/get_scores')  // Replace with the correct endpoint
            .then(response => response.json())  // Assuming the server returns JSON
            .then(data => {
                // Update the scores on the page
                document.getElementById('skillScore').textContent = data.skillScore;
                document.getElementById('staminaScore').textContent = data.staminaScore;
                document.getElementById('luckScore').textContent = data.luckScore;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    // Function to simulate typing effect
    function typeText(elementId, text, delayMs) {
        const element = document.getElementById(elementId);
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delayMs); // Type next character after delayMs milliseconds
            }
        }

        // Start typing when this function is called
        type();
    }

     // Display the initial instructions with typing effect
     typeText("paragraph1", "A new, highly anticipated, ultra-realistic video game powered by the first Neural Network game engine has just been released", 50); // 50 milliseconds delay per character
     typeText("paragraph2", "Players are beckoned to gaming realms where imagination knows no bounds.", 50); // 50 milliseconds delay per character

    // Automatically submit the form when Enter key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });
});
