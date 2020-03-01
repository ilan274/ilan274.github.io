/* Now invert the side of the triangle. For example:
    *
   **
  ***
 ****
***** */

let star = '*';
let space = ' ';

for (i = 4; i >= 0; i--) {
  console.log(space.repeat(i) + star.repeat(5-i))
}
