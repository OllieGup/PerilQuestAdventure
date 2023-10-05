var i = 0;
var txt = "The main office of Vipercall Technologies consists of two rows of four desks and a large curved communications screen. \n\nThe owners have purposely kept everything uncluttered and minimal within the small office. \n\nOne of the rows of desks has just enough room to house powerful PCs, monitors, and keyboards. \n\nA separate demonstration room called Studio X is situated at the far end of the office within which is a stand where four sleek, translucent headbands and haptic skins are placed. \n\nYou are keen to get to know your new coworkers and make an impression. \n\nYour current aim is to find out what goes on in Studio X.";
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
        document.getElementById("continueButton").style.display = "inline-block";
}
}

// Call the typeWriter function when the page is fully loaded
window.onload = function() {
typeWriter();
};

// JavaScript function to navigate to roll2.html
function continueToRoll2() {
    // Use window.location.href to navigate to roll2.html
        window.location.href = "/roll2"; // Modify the path as needed
}