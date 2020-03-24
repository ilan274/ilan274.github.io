const assert = require( 'assert' );

const longestWord = words => {
  const arrWords = words.split( ' ' );
  let maxLength = 0;
  let biggestWord = null;

  for ( let i = 0; i < arrWords.length; i += 1 ) {
    if ( arrWords[i].length > maxLength ) {
      maxLength = arrWords[i].length;
      biggestWord = arrWords[i];
    }
  }
  return `Biggest word is "${biggestWord}" with ${maxLength} characters`;
};

const phrase = "Just writing some words to check if my function's working";

console.log( longestWord( phrase ) );
