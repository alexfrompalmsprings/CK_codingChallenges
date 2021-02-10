// Fizz Buzz is a classic interview question that apparently many engineering candidates can't solve! Let's cover it today.

// We're given a number in the form of an integer n.

// Write a function that returns the string representation of all numbers from 1 to n based on the following rules:

// If it's a multiple of 3, represent it as "fizz".

// If it's a multiple of 5, represent it as "buzz".

// If it's a multiple of both 3 and 5, represent it as "fizzbuzz".

// If it's neither, just return the number itself.

function fizzBuzz(n) {

  /*
  O - output  ''
  I - input  -> number
  C - constraints/cases/ conditions ---- none
  E -
  */

  //result [holder/ container]
  let result = []


  // [ 1, 2, fizz, 4, buzz]
  for (let i = 1; i <= n; i++) {

    // if statement ---   ( % )
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzbuzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(i);
    }

    // check if the input of 3 or 5

  }


  //return result
  return result.join('');

}

// console.log(fizzBuzz(15))
// console.log(fizzBuzz(3))
// console.log(fizzBuzz(7))



// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.



function confirmEnding(str, target) {

  /*
  O - output (true/false)
  I - input - longstring & smallerstring checking the end
  C -  should not use the built-in method .endsWith()
  E -

  */

  let bigLen = str.length;
  let targetLen = target.length;

  // console.log(bigLen, targetLen);

  let checker = str.slice(bigLen - targetLen);
  // console.log(checker);


  return checker === target;
}
//⬇️
console.log(confirmEnding("Bastian", "n"));
//⬇️
console.log(confirmEnding("Congratulation", "os"))
//⬇️
console.log(confirmEnding("He has to give me a new name", "name"));