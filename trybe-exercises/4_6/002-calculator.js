function squareNumber() {
  let pegarCampo = document.getElementById("square-input").value;
  let squareResult = Math.pow(pegarCampo,2);
  let squareMessage = "The square of: " + pegarCampo + " is: " + squareResult;
  console.log(squareMessage)
}

function halfNumber(x) {
  let halfResult = x / 2;
  let halfMessage = "Half of " + x + " is " + halfResult
  return halfMessage;
}

function percentOf(x,y) {
  let percentOf = (100 / y) * x;
  let percentMessage = x + " is " + percentOf.toPrecision(4) + "% of: " + y;
}

function areaOfCircle(x) {
  let areaOf = (2 * 3.14) * 2;
  let = areaMessage = "The area for a cicrle with radius " + x + " is: " + areaOf.toPrecision(4);
  return areaMessage;
}

function allTogether(x) {
  let half = halfNumber(x);
  let square = squareNumber(half);
  let circleArea = areaOfCircle(square);
  let result = percentOf(square, circleArea);
  
}

let pegarBotao = document.getElementById("square-button");
pegarBotao.addEventListener('click', squareNumber)
