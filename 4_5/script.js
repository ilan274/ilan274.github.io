/* Even though the exercises doesn't ask, I'll create a function for each one since I'm doing all the exercises in one single file.*/
// 1.1) Add the h1 tag with the text Exercise 4.5 - JavaScript DOM as a child of the body tag
function createAndChangeH1() {
  const getBodyTag = document.getElementsByTagName("body")[0];
  const createH1 = document.createElement("h1");
  getBodyTag.insertAdjacentElement('afterbegin', createH1);
  document.getElementsByTagName("body")[0].firstChild.innerHTML = "Exercício 4.5 - JavaScript DOM";
}
createAndChangeH1()

// 1.2) Add the div tag with the main-content class as a child of the body tag
function createDivAndClass() {
  document.getElementsByTagName("script")[0].insertAdjacentElement('beforebegin', document.createElement("div"));
  document.getElementsByTagName("div")[0].className = "main-content";
}
createDivAndClass()

// 1.3) Add the div tag with the center-content class as a child of the div tag created in step 2
function divAndAppend() {
  let var3 = document.createElement("div");
  var3.className = 'center-content';
  document.getElementsByClassName("main-content")[0].appendChild(var3);
}
divAndAppend()

// 1.4) Add the p tag as a child of the div created in step 3 and add some text
function addPTagInsideDiv() {
  let pTag = document.createElement("p");
  document.getElementsByClassName("center-content")[0].appendChild(pTag);
  document.querySelector(".center-content p").innerHTML = "\"Adding the p tag as a child of the div created in step 3 and add some text\" worked like a charm :)"
}
addPTagInsideDiv()

// 1.5) Add the div tag with the left-content class as a child of the div tag created in step 2
function leftDiv() {
  let leftDiv = document.createElement("div");
  leftDiv.className = "left-content";
  document.getElementsByClassName("main-content")[0].appendChild(leftDiv);
}
leftDiv()

// 1.6) Add the div tag with the right-content class as a child of the div tag created in step 2
function rightDiv() {
  let rightDiv = document.createElement("div");
  rightDiv.className = "right-content";
  document.getElementsByClassName("main-content")[0].appendChild(rightDiv);
}
rightDiv()

// 1.7) Add an image with src set to the https://picsum.photos/200 value and small-image class. This element must be a child of the div created in step 5
function imgWithSrc() {
  let createImg = document.createElement("img");
  createImg.src = "https://picsum.photos/200";
  createImg.className = "small-image";
  document.getElementsByClassName("main-content")[0].children[1].appendChild(createImg);
}
imgWithSrc()

// 1.8) Add an unordered list with the values ​​from 1 to 10 in full, that is, one, two, three, ... as list values. This list must be a child of the div created in step 6
function ulInsideDiv() {
  let createUl = document.createElement("ul");
  document.getElementsByClassName("right-content")[0].appendChild(createUl);
  valores = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

  for (let i = 0; i < 10; i++) {
    document.getElementsByClassName("right-content")[0].firstChild.appendChild(document.createElement("li")).innerHTML = valores[i];
  }
}
ulInsideDiv()

// 1.9) Add 3 h3 tags, all children of the div created in step 2
function h3Tags() {
  let getDiv = document.getElementsByClassName("main-content")[0];
  for (let i = 0; i < 3; i++) {
    getDiv.appendChild(document.createElement("h3"));
  }
}
h3Tags()

// 2.1) Add class "title" to the h1 tag
function h1TagClass() {
  let h1Grep = document.getElementsByTagName("h1")[0];
  h1Grep.className = "title";
}
h1TagClass()

// 2.2) Add "description" class to the 3 h3 tags created
function descriptionH3() {
  for (let i = 0; i < 3; i++) {
    document.getElementsByTagName("h3")[i].className = "description";
  }
}
descriptionH3()

// 2.3) Remove the div created in step 5 (the one with the left-content class). Use the .removeChild () function
function removeLeftContentDiv() {
let mainDiv = document.getElementsByClassName("main-content")[0];
let insideDiv = document.getElementsByClassName("left-content")[0];
let removedDiv = mainDiv.removeChild(insideDiv);
}
removeLeftContentDiv()

// 2.4) Center the div created in step 6 (the one that has the right-content class). Tip: to centralize, just configure margin-right: auto from div
function centerDiv() {
  let getDiv = document.getElementsByClassName("right-content")[0];
  getDiv.style.marginRight = "auto"
"auto"
}
centerDiv()

// 2.5) Change the background color of the parent element of the div created in step 3 (the one that has the center-content class) to green
function changeToGreen() {
  let getClass = document.getElementsByClassName("center-content")[0];
  getClass.style.backgroundColor = "green";
}
changeToGreen()

// 2.6) Remove the last two elements (nine and ten) from the list created in step 8
function deleteLastTwo() {
  let deleteFirst = document.getElementsByClassName("right-content")[0].firstElementChild.removeChild(document.getElementsByTagName("li")[8])
  let deleteSecond = document.getElementsByClassName("right-content")[0].firstElementChild.removeChild(document.getElementsByTagName("li")[8])
}
deleteLastTwo()