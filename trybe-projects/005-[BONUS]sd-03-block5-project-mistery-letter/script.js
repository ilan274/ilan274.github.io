// Get variables
const createButton = document.getElementById('criar-carta');
const getCarta = document.querySelectorAll('span').length;

function estilo() {
  const classes = ['newspaper', 'magazine1', 'magazine2'];
  return classes[Math.floor(Math.random() * 3)];
}

function tamanho() {
  const classes = ['medium', 'big', 'reallybig'];
  return classes[Math.floor(Math.random() * 3)];
}

function rotacao() {
  const classes = ['rotateleft', 'rotateright'];
  return classes[Math.floor(Math.random() * 2)];
}

function inclinacao() {
  const classes = ['skewleft', 'skewright'];
  return classes[Math.floor(Math.random() * 2)];
}

/*function classesAleatorias() {
  const style = classes[Math.floor(Math.random() * 2)];
  const size = classes[1][Math.floor(Math.random() * 2)];
  const rotation = classes[2][Math.floor(Math.random() * 1)];
  const inclination = classes[[Math.floor(Math.random() * 1)]
  resultArray = [style];
  
  return resultArray.join(',').replace(/,/g, " ");
}*/

function alterarClasses() {
  this.className = '';
  this.classList.add(estilo(), tamanho(), rotacao(), inclinacao());
}

function contadorDePalavras() {
  document.querySelector(
    '#carta-contador'
  ).innerHTML = document.querySelectorAll('span').length;
}

function createLetter() {
  const separadas = document.getElementById('carta-texto').value.split(' ');
  if (document.querySelectorAll('span').length > 0) {
    document.querySelectorAll('#carta-gerada')[0].innerHTML = '';
  }
  for (let i = 0; i < separadas.length; i += 1) {
    const createSpan = document.createElement('span');
    const cartaGerada = document.getElementById('carta-gerada');
    createSpan.innerHTML = separadas[i];
    cartaGerada.appendChild(createSpan);
    createSpan.classList.add(estilo(), tamanho(), rotacao(), inclinacao());
  }
  for (let i = 0; i < document.querySelectorAll('span').length; i += 1) {
    document
      .querySelectorAll('span')
      [i].addEventListener('click', alterarClasses);
  }
  contadorDePalavras();
}

// Event listeners
createButton.addEventListener('click', createLetter);
