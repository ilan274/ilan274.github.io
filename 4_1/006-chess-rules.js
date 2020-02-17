/* Write a program that is named after a chess piece and returns the movements it makes.
As a challenge, make the program work both if you receive the name of a piece with uppercase letters and with lowercase letters; without increasing the number of conditionals.
As a tip, you can search for a function that makes a string have all lower case letters.
If the part passed is invalid, the program should return an error message.
Example: bishop -> diagonals */


let piece = window.prompt("Type a Chess piece: ");
let lower = piece.toLowerCase();

switch (lower) {
  case ('king'):
    move = 'horizontals, verticals, or diagonals'
    break;
  case ('queen'):
    move = 'diagonals, horizontals, or verticals'
    break;
  case ('rook'):
    move = 'verticals or horizontals'
    break;
  case ('bishop'):
    move = 'diagonals'
    break;
  case ('king'):
    move = 'one square horizontally, vertically, or diagonally'
    break;
  case ('king'):
    move = 'one square horizontally, vertically, or diagonally'
    break;
  default:
    move = 'Please type a valid name, like \'bishop\' for eg.'
}

/* To interact with .html file, just create an id called 'direction' (no quotes) and remove the double slash bellow */
// let direction = document.getElementById("direction").innerHTML = move;