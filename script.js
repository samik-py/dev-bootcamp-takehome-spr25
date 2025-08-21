const text = "    Hi! I'm Samik Shah, and I'm a freshman Computer Science major who likes volunteering at my local library to help kids learn the importance of reading from a young age.";
const typingSpeed = 40;

let i = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", type);
