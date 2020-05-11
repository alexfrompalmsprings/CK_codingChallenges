/*
reverseString.js - Write a function that takes a string as input and returns the string reversed.
reverseString("never") // returns "reven"
*/

/*
    1 What are we given?
  Inputs; A string that could be any size.
  Outputs: Another string that is going to be reversed (as in the example)
  Constraints: The only constraint I see is the string not being a string. So we might need to incorporate this into the code, so we can exclude nonstring parameters.
*/


function reverseString(str){
  let resultString = ''

  for(let i = str.length -1; i>=0; i--){
      let letter = str[i]
      resultString += letter

  }

  return resultString;
}

console.log(reverseString('MothersDay'))