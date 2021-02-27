// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {

  // ---- alexs code; a bit messy
  // also could have used minn & max
  let sorted = arr.sort((a, b) => a - b);
  let sum = 0;
  let [first, second] = sorted;

  while (second >= first) {
    sum += first;

    console.log(sum);
    first++
  }



  return sum;
}

// console.log(sumAll([1, 4]));


// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  var newArr = [];

  // ---- using two for eachs
  arr1.forEach(ele => {
    if (!arr2.includes(ele)) {
      newArr.push(ele)
    }
  });

  arr2.forEach(ele => {
    if (!arr1.includes(ele)) {
      newArr.push(ele)
    }
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.
function destroyer(arr, ...args) {
  let copyArr = arr;


  let filtered = copyArr.filter(ele => {
    return !(args.includes(ele));
  })


  return filtered;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
function whatIsInAName(collection, source) {

  let sourceKeys = Object.keys(source);
  // console.log(sourceKeys);


  let filtered = collection.filter((obj) => {

    for (let key of sourceKeys) {

      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });



  return filtered;
}








// console.log(whatIsInAName([{
//   first: "Romeo",
//   last: "Montague"
// }, {
//   first: "Mercutio",
//   last: null
// }, {
//   first: "Tybalt",
//   last: "Capulet"
// }], {
//   last: "Capulet"
// }));


// console.log(whatIsInAName([{
//   "apple": 1
// }, {
//   "apple": 1
// }, {
//   "apple": 1,
//   "bat": 2
// }], {
//   "apple": 1
// })); //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].



// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {

  let result = str.toLowerCase().split(' ').join('-')

  return result

}

// console.log(spinalCase('This Is Spinal Tap'));




// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {

  let result;
  let vowels = 'aeiou';
  let first = str[0];

  // first case vowels and
  if (!vowels.includes(first)) {
    result = str.slice(1);
    console.log(result);
    result += first;
    console.log(result);
    result += 'way';
    console.log(result);

  } else {
    result = str;
    result += 'way'
  }

  return result;
}

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("algorithm")); // should return "algorithmway".


// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


let upperCaseFunction = function (word) {
  let result = '';

  let first = word.toUpperCase()[0];
  result = first + word.slice(1);

  return result;
}

// console.log(upperCaseFunction('alex'))




function myReplace(str, before, after) {

  // all these code checks if the words needs to be formatted to upper case
  let upperCheckTrue;
  let formattedWord;

  let firsLetter = before[0];
  let firsLetterUpper = before.toUpperCase()[0];

  upperCheckTrue = firsLetterUpper === firsLetter ? true : false;
  console.log(upperCheckTrue);

  if (upperCheckTrue) {
    formattedWord = upperCaseFunction(after);
  } else {
    formattedWord = after.toLowerCase();
  }



  // lets do the replacing
  let result = [];

  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    if (currentWord === before) {
      result.push(formattedWord);
    } else {
      result.push(currentWord);
    }

  }

  return result.join(' ');


}

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));


// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  let pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  }


  let letters = str.split('');
  console.log(letters);

  let result = letters.map(letter => {
    let pair = [letter, pairs[letter]];


    return pair;
  })


  return result;
}

// console.log(pairElement("GCG"));


// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"

  let letters = str.split('');
  console.log(letters);

  let firsLetter = letters[0];
  let lastLetter = letters[letters.length - 1];
  console.log(firsLetter, lastLetter);

  let startIdx = alphabet.indexOf(firsLetter)
  let endIdx = alphabet.indexOf(lastLetter)
  console.log(startIdx, endIdx);

  let range = alphabet.slice(startIdx, (endIdx + 1)).split('');
  console.log(range);

  let filtered = range.filter(rangeLetter => {
    if (!letters.includes(rangeLetter)) {
      return true;
    }
    return false;
  })

  return filtered.length > 0 ? filtered.join('') : undefined;
}
// console.log(fearNotLetter("efgij"));


// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(...arr) {
  // // simplet solution with a result container
  // let arrays = [...arr];

  // let result = [];

  // arrays.forEach(array => {
  //   for (let i = 0; i < array.length; i++) {
  //     let num = array[i];

  //     if (!result.includes(num)) {
  //       result.push(num);
  //       console.log(result)
  //     }
  //   }
  // })


  // return result;




  // let use a set
  let arrays = [...arr];

  let result = new Set();

  arrays.forEach(array => {
    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      result.add(num);

    }
  })


  return [...result];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));