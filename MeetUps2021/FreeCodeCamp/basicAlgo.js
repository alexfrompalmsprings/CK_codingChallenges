// Convert Celsius to FahrenheitPassed
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
function convertToF(celsius) {

  /*
  o - output ~ should return a number ✅
  i - input ~ variable that represents a temp ~ number ✅
  c - don't worry about this for now ✅
  e - examples & edge cases ~  ✅
  */


  let fahrenheit = (celsius * (9 / 5)) + 32;
  return fahrenheit;
}

// console.log(convertToF(30));


// Reverse a StringPassed
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
function reverseString(str) {
  /*
o - output ~ should return "string" ✅
i - input ~ string ✅
*/

  // // convert string into an array
  // let letters = str.split('');
  // console.log(letters);

  // // method called reverse
  // let reversed = letters.reverse();

  // // method called join to make [] --> ''
  // let joined = reversed.join('')

  // return joined;


  // upgrading our question using chaining
  return str
    .split('')
    .reverse()
    .join('')


}

// console.log(reverseString("hello"));


// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {

  /*
    o - output ~ number ✅
    i - input ~ number ✅
  */

  // //create result variable
  // let result = 1;

  // // use a loop | either for(loop) or while loop
  // for (let i = 1; i <= num; i++) {
  //   // console.log(i);

  //   // assign the result of [i * result]
  //   result *= i; // result = result * i
  //   // console.log(i, result);
  // }


  // // return result
  // return result



  // using recursion

  // condition  to stop
  if (num === 0) {
    return 1
  } else {

    // recursive call happens
    return num * (factorialize(num - 1));
  }


}

// console.log(factorialize(5));



// Find the Longest Word in a StringPassed
// Return the length of the longest word in the provided sentence.

// Your response should be a number.
function findLongestWordLength(str) {
  /*
   o - output ~ number  ✅
   i - input ~ string ✅
 */


  // create an array with all the words
  let words = str.split(' ');
  console.log(words);

  let lens = [];

  // create result variable
  let result = words[0].length;

  // suggestion to use a loop | forEach
  // array + method + (ele/function)
  words.forEach(function (word) {

    lens.push(word.length);

    // comparing the lengths using an if statement
    if (word.length > result) {
      result = word.length;
      console.log(result)
    }

  }) // initial value = result

  return result


}

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));






// Return Largest Numbers in ArraysPassed
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {

  /*
   o - output ~ [number]  ✅
   i - input ~ [[] [] [] []] ✅
 */

  // arr.forEach(ele => {
  //   console.log(ele);
  // })


  // creating an empty array our result array
  // let result =[]; // [0,0,0,0]



  // map  ~ forEach + return an array at the end
  let result = arr.map(array => {

    // ele -> using the math max method
    // ...destr

    // getting the max of each of the array that we are looping
    return Math.max(...array)







  }) //  [ele, ele, ele, ele ]





  return result;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



// Confirm the EndingPassed
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {

  /*
  output ~  boolean (true/false)
  input ~ one 'string' & target 'str'
  */

  // suggestion #FCC - use a substring
  // with the substring compare to the target
  // true/ false

  // zero index ~
  //0123456
  // "Bastian"
  // 0 1 2 3 4 5 6 7
  // ['b a s t i a n]
  //6
  // [ c o n g r a t s]

  // how do get the start index and end index
  // 7 -1  = 6
  // 8 -2 = 6

  let startIndex = str.length - target.length;
  console.log(startIndex);


  // create a substring to check the target
  let endingStr = str.slice(startIndex);


  // // return true/false
  // if (endingStr === target) {
  //   return true;
  // } else {
  //   return false;
  // }


  return endingStr === target; // true or false


}


// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("CongratsOnYourBday", "on")); // true or false



// Repeat a String Repeat a StringPassed
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {

  // input  ~ ( str & num)
  // output ~ string

  // examples ~

  // suggestions & ideas

  // create an empty string



  let result = '';
  let arr = []; // an empty array []

  // if the num is not positive return an empty string
  if (num < 1) {
    return result
  }

  // using a foor loop
  // starting point;  -- NUM (3)
  // condition to end;  -- (0)
  // increment it / reduce it | Num -1

  for (let i = num; i > 0; i = i - 1) {

    console.log(i)

    arr.push(str); //   ['abc ,abc, abc'] - not memory efficient | data structure takes more space
    // console.log(arr);
    result += str;
    // console.log(result)


  }

  console.log(arr); // ['abc ,abc, abc']
  console.log(arr.join('')); // changing to the string

  // arr = 25;
  // console.log(arr);

  //return result
  return result;
}

console.log(repeatStringNumTimes("abc", 3));