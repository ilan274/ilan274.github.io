/* Create a function that takes an array of names and returns the name with the most characters. */

let names = ['Blablabla', 'Teshhhhhhtando', 'Ilan', 'Daniella']
let biggest = 0;
let name;

for (i in names) {
  if (names[i].length > biggest) { 
    name = names[i];
    biggest = names[i].length;
  }
}


