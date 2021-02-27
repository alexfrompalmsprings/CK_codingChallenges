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








console.log(whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
}));


console.log(whatIsInAName([{
  "apple": 1
}, {
  "apple": 1
}, {
  "apple": 1,
  "bat": 2
}], {
  "apple": 1
})); //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].



// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {

  let result = str.toLowerCase().split(' ').join('-')

  return result

}

console.log(spinalCase('This Is Spinal Tap'));




// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {

  let result;
  let vowels = 'aeiou';
  let first = str[0];

  if (!vowels.includes(first)) {
    result = str.slice(1);
    console.log(result);
    result += first;
    console.log(result);
    result += 'way';
    console.log(result);

  }





  return result;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));// should return "algorithmway".