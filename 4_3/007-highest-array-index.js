/* Create a function that takes an array of integers and returns the index of the lowest value. */

function highestIndex(list) {
  let highest = 0;

  for (i in list) {
    if (list[i] > list[highest]) {
      highest = i;
    }
  }
  return highest
}

let list = [45,1,62,70,-51];
console.log(highestIndex(list))
