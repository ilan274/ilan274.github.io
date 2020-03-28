const assert = require('assert');

const firstTestPhrase = "Just writing some words to check if my function's working";
const secondTestPhrase = "Hello, recruiiiiteeeer, (pls ignore those tests, if only to check my function) :)"

const maiorPalavra = (el => el.split(' ').reduce((acumulador, valoratual) => {
  (valoratual.length > acumulador.length) ? acumulador = valoratual : acumulador = acumulador;
  return `${acumulador}`;
}, '0'));


console.log(maiorPalavra(secondTestPhrase));