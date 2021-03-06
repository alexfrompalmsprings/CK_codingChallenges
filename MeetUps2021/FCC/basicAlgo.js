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

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);




// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
function confirmEnding(str, target) {

  let checker = str.slice(str.length - target.length);
  // console.log(checker);

  return checker === target;
}

confirmEnding("Bastian", "n");


// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
  // ---- simple solution
  // let result = ;

  // for(let i = num; i > 0; i--){
  //   result+= str;
  // }

  // return result;


  // ---- recursive solution
  if (num < 1) {
    return '';
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);


// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  let sliced = str.slice(0, num);

  return str.length <= num ? str : sliced + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {

  let finder = arr.find(ele => {
    return func(ele);
  })

  return finder;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
function booWho(bool) {

  return typeof bool === 'boolean';
}

booWho(null);


// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
  let result = [];
  let words = str.toLowerCase().split(' ');

  words.forEach(word => {
    word = word[0].toUpperCase() + word.slice(1);
    result.push(word)
  })

  return result.join(' ')

}

titleCase("I'm a little tea pot");


// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {

  let part1 = arr2.slice(0, n);
  let part2 = arr2.slice(n);


  return [...part1, ...arr1, ...part2]
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
function bouncer(arr) {

  let result = arr.filter(ele => {
    if (ele) {
      return ele;
    }
  })

  return result;

}


bouncer([7, "ate", "", false, 9]);

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {

  // alex's code was messy af!
  // let idx;
  // let sorted = arr.sort((a, b) => a - b);



  // for (let i = 0; i < sorted.length; i++) {
  //   let ele = sorted[i];

  //   if (ele >= num) {
  //     idx = i;
  //     return idx;
  //   }
  // }


  // return arr.length;


  // clever way adding the num to an array  and look for the number
  let sorted = [...arr];
  sorted.push(num);
  sorted = sorted.sort((a, b) => a - b);

  return sorted.indexOf(num);





}

getIndexToIns([40, 60], 50);


// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
function mutation(arr) {
  let [first, second] = arr;

  let firstLetters = {};

  for (let letter of first) {
    if (firstLetters[letter] === undefined) {
      firstLetters[letter] = true;
    }
  }


  for (let letter of second.toLowerCase()) {
    if (firstLetters[letter] === undefined) {
      return false;
    }
  }



  return true;
}

mutation(["hello", "hey"]);


// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let result = [];
  let copy = [...arr];

  for (let i = 0; i < arr.length; i += size) {
    result.push(copy.slice(i, i + size));
  }


  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

