// --- wordsCombination
// given two strings, write a function to determine if string 2 can be created with the letters of the string 1

function wordsCombo(str1, str2) {

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    console.log(letter);

    if (!(str1.includes(letter))) {
      console.log(`this letter is not in the first word`)
      return false;
    }

  }
  return true;
}
// console.log(wordsCombo('anagram', 'gram'))
// console.log(wordsCombo('anagram', 'grams'))
// console.log(wordsCombo('cinema', 'iceman'))
// console.log(wordsCombo('cinema', 'ireman'))



// --- words Combinations Counter
// Given two strings, write a function to determine if strings 2 can be created with the letters of the string 1. Make sure you

function freqCounter(arr) {
  let obj = {};

  for (let item of arr) {
    if (obj[item] === undefined) {
      obj[item] = 1;
    } else {
      obj[item]++
    }
  }

  return obj;
}

// console.log(freqCounter([2, 2, 2, 4, 4, 4, 5, 5, 5, 10]))


function anagramHash(str1, str2) {

  let oneCounter = freqCounter(str1)
  let twoCounter = freqCounter(str2)

  for (letter of str2) {
    // break one at time
    if ((oneCounter[letter] < twoCounter[letter]) || (oneCounter[letter] === undefined)) {
      console.log(oneCounter[letter]);
      return false;
    }
  }

  return true;
}

// console.log(anagramHash('anagram', 'hana'))
// console.log(anagramHash('cinema', 'iceman'))


// --- averagePairLoop

// write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair ofa values in the array where the average equals the target value.
// There maybe one more than one pair that matches the average target.

function averagePairLoop(arr, target) {

  let avg;

  for (let i = 0; i < arr.length; i++) {
    let one = arr[i];

    for (let j = i; j < arr.length; j++) {
      let two = arr[j];
      // console.log(one, two)

      avg = (one + two) / 2

      if (avg === target) {
        return [one, two]
      }
    }
  }

}
// console.log(averagePairLoop([1, 2, 3], 2.5)) // true
// console.log(averagePairLoop([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) //true
// console.log(averagePairLoop([-1, 0, 3, 4, 5, 6], 4.1)) // false
// console.log(averagePairLoop([], 4)) //false




// averagePair

// write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair ofa values in the array where the average equals the target value.
// There maybe one more than one pair that matches the average target.

function averagePair(arr, target) {

  let small = 0;
  let big = arr.length - 1;
  let avg;

  while (arr[big] > arr[small]) {
    avg = (arr[big] + arr[small]) / 2;
    // console.log(avg);

    if (avg === target) {
      return [arr[big], arr[small]]
    } else if (avg > target) {
      big--
    } else {
      small++
    }
  }

  return null

}
// console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) //true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
// console.log(averagePair([], 4))