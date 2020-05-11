// Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the last index at which the character exists or -1 if the character is not found.
// Do not use the built in String.lastIndexOf() function!

function stringLastIndexOf(str, char) {

  for(let i = str.length -1; i > 0; i--){
    let current = str[i]

    if(current === char){
      return i;
    }
  }

  return -1;
}

// Examples:
console.log(stringLastIndexOf('awesome', 'e')); // 6
console.log(stringLastIndexOf('awesome', 'z')); // -1