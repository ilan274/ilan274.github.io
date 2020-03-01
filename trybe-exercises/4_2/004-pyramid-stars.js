/* Then, make a pyramid with n basic asterisks: */

n = 11;
let space = ' ';
let star = '*';

for (i = (n+1)/2; i >= 1; i--) {
  console.log(space.repeat(n-i)+star)
  n -= 2;
  star += '**';
}