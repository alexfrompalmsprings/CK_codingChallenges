
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


//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {




}


// given two strings, write a function to determine if string 2
// is an anagram of the first string.

// function anagramQuadratic(str1, str2) {
  let checker = str1.split('');

  for (let i = 0; i < str2.length; i++) {
    let letter = checker[i];

    if (!(checker.includes(letter))) {
      return false
    } else {
      console.log(`I found a letter ➡️ ${letter}`)
      checker.splice(i, 1);
      console.log(checker);
    }
  }

  return true
// }
// console.log(anagramQuadratic('anagram', 'anna'))
// console.log(anagramQuadratic('cinema', 'iceman'))


function getCount(str) {
  //! solution #1 just a loop with if statements
  // var vowelsCount = 0;

  // for(let i = 0; i < str.length; i++){
  //   let letter = str[i];

  //   if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u' ){
  //     console.log('we found a vowel', vowelsCount)
  //     vowelsCount++;
  //   }
  // }

  // return vowelsCount;

  //! solution #2 -make an obj with all the letters - seem a bit like a lot of work though
  // let vowelsObj = {
  //   a: 0,
  //   e: 0,
  //   i: 0,
  //   o: 0,
  //   u: 0,
  // }

  // for(let i = 0; i < str.length; i++){
  //   let letter = str[i].toLowerCase();

  //   if(vowelsObj[letter] !== undefined){
  //     vowelsObj[letter]++
  //   }
  // }
  // return vowelsObj['a'] + vowelsObj['e'] + vowelsObj['i'] + vowelsObj['o'] + vowelsObj['u'];

  //! solution #3 - using filter and includes
  let vowels = "aeiouAEIOU"

  let letters = str.split('');
  let filtered = letters.filter((letter) => {
    return vowels.includes(letter);
  })

  return filtered.length;
}