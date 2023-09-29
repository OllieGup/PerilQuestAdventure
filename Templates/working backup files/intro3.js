
let i = 0;
const text = 'Lorem ipsum dummy text blabla.';
const speed = 50;

function typeText(elementId, text, speed) {
  const element = document.getElementById(elementId);

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing when this function is called
  typeWriter();
}

// Call the typeText function with your element ID, text, and speed
typeText("demo", text, speed);
