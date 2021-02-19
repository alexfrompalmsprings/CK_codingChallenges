// Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit = (celsius * (9 / 5)) + 32;
  return fahrenheit;
}

console.log(convertToF(30));



// Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  // ---- clean and simple
  // let reversed = "";
  // for(let char of str){
  //   reversed = char+ reversed;
  // }
  // return reversed;



  // --- reduce
  let result = str
    .split('')
    .reduce((res, char) => {
      return char + res;
    }, [])

  return result;


}

reverseString("hello");



// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {

  // recursive function
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1)
  }

}
factorialize(5);



// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWordLength(str) {

  let words = str.split(' ');
  let longest = words[0];

  words.forEach(word => {
    if (word.length >= longest.length) {
      longest = word;
    }
  })



  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {

  // --- using the spread operator
  let result = arr.map(array => {
    return Math.max(...array);
  })

  return result
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
function confirmEnding(str, target) {
  let len = str.length - target.length;
  console.log(len);

  let checker = str.slice(str.length - target.length);
  console.log(checker);




  return str;
}

confirmEnding("Bastian", "n");
