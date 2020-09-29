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


/*
  Write a function, intersection, that takes two arrays and returns
  the elements that are in both arrays.
  var a = [4, 1, 2, 3];
  var b = [3, 7, 5, 1, 9, 8];
  intersection(a, b)
  should return [1, 3]
*/

var intersection = function(arrA, arrB) {

  // solution #1
  let duplicates =[]; 

  for(let i = 0; i < arrB.length -1; i++){
    let current = arrB[i]; 

    if(arrA.includes(current)){
      duplicates.push(current);
    }
  }

  return duplicates; 


  // solution #2
  let result = [];
  let objectB = {}

  for(let i = 0; i < arrB.length; i++){
    let currentNum = arrB[i]

    if(objectB[currentNum] === undefined){
      objectB[currentNum] = true;
    }
    // console.log(objectB)
  }

  for(let j =0; j < arrA.length; j++){
    let currentNumA = arrA[j]

    if(objectB[currentNumA]){
      result.push(currentNumA)
    }
    // console.log(result)
  }


  return result;
};

// console.log(intersection([4, 1, 2, 3],[3, 7, 5, 1, 9, 8]))


// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
function fizzbuzz(n) {
  // we will store the resulting numbers within an array
  var result = [];

  // loop from 1 to n
  for (let i = 1; i <= n; i++) {
    let add = '';
    // check if there is a remainder when dividing by 3, if not
    // then we know this number is divisible by 3
    if (i % 3 === 0) {
      add += 'Fizz';
    }
    // check if divisible by 5
    if (i % 5 === 0) {
      add += 'Buzz';
    }

    // not divisible by either 3 or 5
    if (add === '') {
      result.push(i);
    } else {
      result.push(add);
    }
  }

  return result;


  // the logic of the problem
  //   for (var i=1; i < 101; i++){
  //     if (i % 15 == 0) console.log("FizzBuzz");
  //     else if (i % 3 == 0) console.log("Fizz");
  //     else if (i % 5 == 0) console.log("Buzz");
  //     else console.log(i);
  // }
}


console.log(fizzbuzz(1))
console.log(fizzbuzz(5))
console.log(fizzbuzz(3))
console.log(fizzbuzz(15))
// FizzBuzz();



// 771. Jewels and Stones


// Share
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.


var numJewelsInStones = function(J, S) {

  let counter = 0;
  let map = {};

  for(let i =0; i < S.length; i++){
    let currentStone = S[i];

    if(map[currentStone] === undefined){
      map[currentStone] =1
    } else{
      map[currentStone]++
    }
  }


  for(let j = 0; j < J.length; j++){
    let currentJewel = J[j]
    console.log(`i am checking this jewel ${currentJewel}`)

    if(map[currentJewel]){
      counter += map[currentJewel]
    }
  }


  return counter;
};

// console.log(numJewelsInStones('aA','aAAbbbb' ))