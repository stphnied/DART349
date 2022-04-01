'use strict';
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');

    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


// TESTING ---
createWords();
blinkEye();
setInterval(createWords, 5000)


// Function: createWords()
// Creates and display words randomly on the screen
function createWords() {
  // collect all the text
  // let words = [
  //   `What if...`,
  //   `How can I...`,
  //   `I can't...`,
  //   `Don't...`,
  //   `I've made a mistake...`,
  //   `I'm doing this all wrong...`,
  //   `They probably all hate me...`,
  //   `Why do I even bother...`,
  //   `am I good enough...`,
  //   `What do they really think of me...`
  // ];

  let thoughtsP = document.querySelectorAll('.thoughts-container p');
  // get window width and height
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  // loop for all text
  for (let i = 0; i < thoughtsP.length; i++) {

    let thisP = thoughtsP[i];

    // get random numbers 
    let randomTop = getRandomNumber(0, winHeight);
    let randomLeft = getRandomNumber(0, winWidth);
    let randomFont = getRandomNumber(1,5);

    // update top and left position
    thisP.style.top = randomTop + "px";
    thisP.style.left = randomLeft + "px";
    thisP.style.fontSize = randomFont + "em";

    thisP.style.animation = "words-up 10s 2s ease-out infinite";
    // thisP.onanimationend = () => {

    // }
  }
}


// Function: blinkEye
// makes the eye blinks after hovering
function blinkEye() {
  let eyeballs = document.querySelectorAll('.eyeball');

  for (let i = 0; i < eyeballs.length; i++) {
    let thisEyeball = eyeballs[i];
  
    let randomTime = Math.floor(Math.random()*10)+1;

    thisEyeball.addEventListener("mouseover", function(evt){
      thisEyeball.style.animation = "fade "+randomTime+"s 2s linear alternate infinite";
    })
  }

}



// Function: getRandomNumber
// returns a random number between a min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;

}