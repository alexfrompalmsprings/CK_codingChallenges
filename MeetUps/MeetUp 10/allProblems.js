// Link: https://repl.it/@alexisaviles/MeetUp10#index.js

/*
 ______ _          _     _____
|  ____(_)        | |   |  __ \
| |__   _ _ __ ___| |_  | |__) |_____   _____ _ __ ___  ___
|  __| | | '__/ __| __| |  _  // _ \ \ / / _ \ '__/ __|/ _ \
| |    | | |  \__ \ |_  | | \ \  __/\ V /  __/ |  \__ \  __/
|_|    |_|_|  |___/\__| |_|  \_\___| \_/ \___|_|  |___/\___|


First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example:

if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I

*/

const firstReverse = function (string) {
  // solution #1
  let result = '';
  // show them the error with undefined - len
  for (let i = string.length - 1; i >= 0; i--) {
    let letter = string[i];
    result += letter;
  }
  return result;

  // solution #2 - simple and clean
  // let finalResult = string.split('').reverse().join('')

  // return finalResult;
}

// console.log(firstReverse('javascript'))
// console.log(firstReverse('pretty awesome class'))
// console.log(firstReverse('thank you for coming'))





/*
 ______ _          _     ______         _             _       _
|  ____(_)        | |   |  ____|       | |           (_)     | |
| |__   _ _ __ ___| |_  | |__ __ _  ___| |_ ___  _ __ _  __ _| |
|  __| | | '__/ __| __| |  __/ _` |/ __| __/ _ \| '__| |/ _` | |
| |    | | |  \__ \ |_  | | | (_| | (__| || (_) | |  | | (_| | |
|_|    |_|_|  |___/\__| |_|  \__,_|\___|\__\___/|_|  |_|\__,_|_|


First Factorial
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
Examples
Input: 4
Output: 24
Input: 8
Output: 40320
*/

const firstFactorial = function (num) {
  var result = 1;
  var i = 1;

  while (i <= num) {
    result *= i
    i++
  }

  return result
}
// console.log(firstFactorial(5))
// console.log(firstFactorial(4))
// console.log(firstFactorial(3))


/*
 _                                 _    __          __           _
| |                               | |   \ \        / /          | |
| |     ___  _ __   __ _  ___  ___| |_   \ \  /\  / /__  _ __ __| |
| |    / _ \| '_ \ / _` |/ _ \/ __| __|   \ \/  \/ / _ \| '__/ _` |
| |___| (_) | | | | (_| |  __/\__ \ |_     \  /\  / (_) | | | (_| |
|______\___/|_| |_|\__, |\___||___/\__|     \/  \/ \___/|_|  \__,_|
                    __/ |
                   |___/



Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

const longestWord = function (sentence) {

  var words = sentence.split(' ')
  var longest = words[0]

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word
      // console.log(longest)
    }
    // do not need to have this learning purposes
    // else{
    //   console.log('not it keep trying')
    // }

  }

  return longest
}

// console.log(longestWord('What is the longest word'))
// console.log(longestWord('This class is not that fun today'))
// console.log(longestWord('JK this class is awesome'))


/*
 ______ _         ____
|  ____(_)       |  _ \
| |__   _ _______| |_) |_   _ ________
|  __| | |_  /_  /  _ <| | | |_  /_  /
| |    | |/ / / /| |_) | |_| |/ / / /
|_|    |_/___/___|____/ \__,_/___/___|

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
So	your	program	should	output:
1
2
Fizz
4
Buzz
Fizz
7
.
.
.

*/

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


/*
 _          _   _               _____            _ _        _ _
| |        | | | |             / ____|          (_) |      | (_)
| |     ___| |_| |_ ___ _ __  | |     __ _ _ __  _| |_ __ _| |_ _______
| |    / _ \ __| __/ _ \ '__| | |    / _` | '_ \| | __/ _` | | |_  / _ \
| |___|  __/ |_| ||  __/ |    | |___| (_| | |_) | | || (_| | | |/ /  __/
|______\___|\__|\__\___|_|     \_____\__,_| .__/|_|\__\__,_|_|_/___\___|
                                          | |
                                          |_|

Letter Capitalize
Have the function LetterCapitalize(str) take the str parameter
being passed and capitalize the first letter of each word.
Words will be separated by only one space.
*/

const letterCapitalize = function (sentence) {

  // var words = sentence.split(" ");

  // for (var i = 0; i < words.length; i++) {
  //   let word = words[i]

  //   word = word.charAt(0).toUpperCase() + word.slice(1);
  // }

  // return words.join(" ");



  var arr = sentence.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");

}

// console.log(letterCapitalize('we need to have capitals'))
// console.log(letterCapitalize('in the first letter of'))
// console.log(letterCapitalize('each word to get this horrible'))
// console.log(letterCapitalize('problem completed'))