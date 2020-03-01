/* Create a function that takes an array of integers and returns the index of the lowest value. */

function lowestIndex(list) {
  let lowest = 0;

  for (i in list) {
    if (list[i] < list[lowest]) {
      lowest = i;
    }
  }
  return lowest
}

let list = [45,-52,62,70,-51];
console.log(lowestIndex(list))
