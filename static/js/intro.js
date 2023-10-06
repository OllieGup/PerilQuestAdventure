var i = 0;
var txt = "Welcome to the offices of VIPERCALL TECHNOLOGIES - Your first day. \n\nYou are a keen gamer with decent technology skills and last week you finished working your dead-end job as a fast-food delivery rider. \n\nYou have just landed a job at a technology company who investigates scams within online games. \n\nThere is something new on the market - a groundbreaking and eagerly awaited video game called Peril Quest, \n\npowered by the first neural network games engine where players can enter breathtakingly realistic realms.\n\nAnd it's within this game that some of the most prolific online scams are currently taking place....";
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
        document.getElementById("startButton").style.display = "inline-block";
    }
}

// Call the typeWriter function when the page is fully loaded
window.onload = function() {
    typeWriter();
};

