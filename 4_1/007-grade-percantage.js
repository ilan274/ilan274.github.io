/* Write a program that converts a grade given in percentage (from 0 to 100) into concepts from A to F. Following these rules:
Percentage> = 90 -> A
Percentage> = 80 -> B
Percentage> = 70 -> C
Percentage> = 60 -> D
Percentage> = 50 -> E
Percentage <50 -> F
The program should return an error message and end if the note passed is less than 0 or greater than 100. */

let grade = window.prompt("Enter the percentage: ");
if (grade == '' || grade < 0 || grade > 100) {
  result = "Please enter a valid grade (between 0 and 100)." 
} else if (grade >= 90) {
  result = 'A';
} else if (grade >= 80) {
  result = 'B';
} else if (grade >= 70) {
  result = 'C';
} else if (grade >= 60) {
  result = 'D';
} else if (grade >= 50) {
  result = 'E';
} else if (grade < 50) {
  result = 'F';
}

/* To interact with .html file, just create an id called 'perc' (no quotes) and remove the double slash bellow */
// let perc = document.getElementById("perc").innerHTML = move;