const mainCard = document.querySelector('.carta img');
const cartas = [
  "cinco-de-ouros.png",
  "nove-de-espadas.png",
  "quatro-de-paus.png",
  "seis-de-copas.png",
  "sete-de-espadas.png",
  "sete-de-paus.png",
  "tres-de-ouros.png",
];

function addAnotherCard() {
  let createDiv = document.createElement('div');
  createDiv.classList.add('carta');
  let createImg = document.createElement('img');
  createImg.src = './imgs/'+cartas[Math.floor(Math.random() * 7)];
  createDiv.append(createImg)
  document.querySelector('.cartas').append(createDiv);
  
}

mainCard.addEventListener('click', addAnotherCard);
