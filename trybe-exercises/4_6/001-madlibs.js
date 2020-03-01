/* 1st exercise from https://www.teaching-materials.org/jsweb/exercises/events
1) Add a script tag to the bottom of the page for your code.
2) Add an event listener to the button so that it calls a makeMadLib function when clicked.
3) In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.") */
const findButton = document.getElementById("lib-button");
const findNoun = document.getElementById("noun");
const findAdjective = document.getElementById("adjective");
const findName = document.getElementById("person");
const findStoryDiv = document.getElementById("story");


function makeMadLib() {
  let getNoun = findNoun.value;
  let getAdjective = findAdjective.value;
  let getName = findName.value;
  let story = getName + " " + getAdjective + " " + getNoun;
  findStoryDiv.innerHTML = story
  
}

findButton.addEventListener('click', makeMadLib)
