// Get each pallete position
let pallete = document.querySelectorAll('.color');
let clearAll = document.querySelectorAll('#clear-board')[0];
let allPixels = document.querySelectorAll('.pixel');
let getButton = document.querySelectorAll('button');
let getInput = document.querySelector('input');

// Set default selected color as black
sessionStorage.setItem('color', 'black');
pallete[0].className += ' selected';

// Set collors initially
function setColors() {
  pallete[0].style.backgroundColor = 'black';
  pallete[1].style.backgroundColor = 'red';
  pallete[2].style.backgroundColor = 'blue';
  pallete[3].style.backgroundColor = 'grey';
}
setColors();

// Color selector
pallete[0].addEventListener('click', function() {
  sessionStorage.setItem('color', pallete[0].style.backgroundColor);
  for (let i = 0; i < pallete.length; i += 1) {
    if (i === 0) {
      pallete[i].className += ' selected';
    } else {
      pallete[i].className = 'color';
    }
  }
});
pallete[1].addEventListener('click', function() {
  sessionStorage.setItem('color', pallete[1].style.backgroundColor);
  for (let i = 0; i < pallete.length; i += 1) {
    if (i === 1) {
      pallete[i].className += ' selected';
    } else {
      pallete[i].className = 'color';
    }
  }
});
pallete[2].addEventListener('click', function() {
  sessionStorage.setItem('color', pallete[2].style.backgroundColor);
  for (let i = 0; i < pallete.length; i += 1) {
    if (i === 2) {
      pallete[i].className += ' selected';
    } else {
      pallete[i].className = 'color';
    }
  }
});
pallete[3].addEventListener('click', function() {
  sessionStorage.setItem('color', pallete[3].style.backgroundColor);
  for (let i = 0; i < pallete.length; i += 1) {
    if (i === 3) {
      pallete[i].className += ' selected';
    } else {
      pallete[i].className = 'color';
    }
  }
});

// Pixel detection
let getPixel = document.querySelectorAll('.pixel');
let pixelSize = document.querySelectorAll('.pixel').length;

// Set initial pixel colors to white
for (let i = 0; i < pixelSize; i += 1) {
  getPixel[i].style.backgroundColor = 'white';
}

function detectarCores() {
  for (let i = 0; i < pixelSize; i += 1) {
    getPixel[i].addEventListener('click', function() {
      getPixel[i].style.backgroundColor = sessionStorage.color;
    });
  }
}
detectarCores();

// Clear all pixels
clearAll.addEventListener('click', function() {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = 'white';
  }
});

function randomColor() {
  return Math.floor(Math.random() * 255);
}

function criaClique(event) {
  event.target.style.backgroundColor = sessionStorage.color;
}

// Validate number between 5 and 50
function verificarValidez() {
  console.log(event.target.innerText);
  if (getInput.value < 5) {
    getInput.value = 5;
  } else if (getInput.value > 50) {
    getInput.value = 50;
    alert('Valor maior que 50, considerar 50 como padrão.');
  }

  getPixelBoard.innerHTML = '';
  let numCaixas = getInput.value * getInput.value;
  for (let i = 0; i < numCaixas; i += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'pixel';
    getPixelBoard.appendChild(createDiv);
    createDiv.addEventListener('click', criaClique);
  }
  getPixel = document.querySelectorAll('.pixel');
  getPixelBoard.style.height = getInput.value * 40 + 'px';
  getPixelBoard.style.width = getInput.value * 42 + 'px';
}

// Generate 3 random colors each time page loads
function randomPixels() {
  for (let i = 1; i < 4; i += 1) {
    pallete[i].style.backgroundColor =
      'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
  }
}
randomPixels();

// Create your own pixels
let getPixelBoard = document.querySelectorAll('section')[1];
getButton[1].addEventListener('click', verificarValidez);
