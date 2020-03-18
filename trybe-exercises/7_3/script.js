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
  const efeitos = ['efeito1', 'efeito2']
  let createDiv = document.createElement('div');
  createDiv.classList.add(efeitos[Math.floor(Math.random() * efeitos.length)]);
  let createImg = document.createElement('img');
  createImg.src = './imgs/'+cartas[Math.floor(Math.random() * cartas.length)];
  createDiv.append(createImg)
  document.querySelector('.cartas').append(createDiv);
  
  
}

mainCard.addEventListener('click', addAnotherCard);
