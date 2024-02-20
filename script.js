document.addEventListener('DOMContentLoaded', function () {
  // Array of strings to be typed
  var strings = ["a developer", "a designer", "a freelancer"];

  var index = 0;
  var currentText = '';
  var letterIndex = 0;
  var typingSpeed = 100; // Adjust typing speed (milliseconds per character)

  function type() {
      if (letterIndex < strings[index].length) {
          currentText += strings[index].charAt(letterIndex);
          document.querySelector('.auto-type').innerText = currentText;
          letterIndex++;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(erase, 2000); // Wait 2 seconds before erasing
      }
  }

  function erase() {
      if (letterIndex > 0) {
          currentText = strings[index].substring(0, letterIndex - 1);
          document.querySelector('.auto-type').innerText = currentText;
          letterIndex--;
          setTimeout(erase, typingSpeed / 2);
      } else {
          index++;
          if (index >= strings.length) {
              index = 0;
          }
          setTimeout(type, 500); // Wait 0.5 second before typing next string
      }
  }
  // Start typing
  setTimeout(type, 1000); // Wait 1 second before starting typing
});
