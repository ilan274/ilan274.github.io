/* Create a function that takes a string and returns true if it is a palindrome or false otherwise. */

function palindrome(x) {
  let inverted = "";
  for (i = x.length-1; i >= 0; i--) {
    inverted += x[i];
  }
  if (inverted.toLowerCase() === x.toLowerCase()) {
    return true
  } else {
    return false
  }
}

console.log(palindrome("typeHere"))