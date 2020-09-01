// link with all the questions : https://repl.it/@alexisaviles/MeetUp13#index.js

/*                       _   ___  _ ___
                       | | |__ \| |__ \
__   _______      _____| |    ) | |  ) |
\ \ / / _ \ \ /\ / / _ \ |   / /| | / /
 \ V / (_) \ V  V /  __/ |  |_| |_||_|
  \_/ \___/ \_/\_/ \___|_|  (_) (_)(_)

*/

// create a function that tell us if the letter is a vowel

let areYouAvowel = function (letter) {

  let lowered = letter.toLowerCase();

  return (lowered === 'a' || lowered === 'e' || lowered === 'i' || lowered === 'o' || lowered === 'u')

}
console.log(areYouAvowel('a'))
console.log(areYouAvowel('b'))
console.log(areYouAvowel('E'))



/*
                 _        _                                    _
                | |      (_)                                  | |
  ___ ___  _ __ | |_ __ _ _ _ __  ___  __   _______      _____| |___
 / __/ _ \| '_ \| __/ _` | | '_ \/ __| \ \ / / _ \ \ /\ / / _ \ / __|
| (_| (_) | | | | || (_| | | | | \__ \  \ V / (_) \ V  V /  __/ \__ \
 \___\___/|_| |_|\__\__,_|_|_| |_|___/   \_/ \___/ \_/\_/ \___|_|___/
                                                                                                                                        */
// create a function that returns true/false depending if the word includes a vowel

let doYouHaveVowels = function (word) {
  //! two ways to do this right?!?

  //! solution #1 - for loop
  for (let i = 0; i < word.length; i++) {
    let lowered = word[i].toLowerCase();
    // console.log(lowered)
    if (lowered === 'a' || lowered === 'e' || lowered === 'i' || lowered === 'o' || lowered === 'u') {

      return true
    }
  }
  return false;


}
console.log(doYouHaveVowels('alex'))
console.log(doYouHaveVowels('lexi'))
console.log(doYouHaveVowels('myths'))
console.log(doYouHaveVowels('psych'))
console.log(doYouHaveVowels('rhythms'))




 /*                      _                            _
                      | |                          | |
  ___ ___  _   _ _ __ | |_  __   _______      _____| |___
 / __/ _ \| | | | '_ \| __| \ \ / / _ \ \ /\ / / _ \ / __|
| (_| (_) | |_| | | | | |_   \ V / (_) \ V  V /  __/ \__ \
 \___\___/ \__,_|_| |_|\__|   \_/ \___/ \_/\_/ \___|_|___/

*/

// Create a function that tell us how many vowels each word contains

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

// console.log(getCount("abracadabra"), 5);
// console.log(getCount("a couple of vowels A E I O U"));


/*
     _ _                                          _   _             _ _
    | (_)                                        | | | |           | | |
  __| |_ ___  ___ _ __ _____   _______      _____| | | |_ _ __ ___ | | |___
 / _` | / __|/ _ \ '_ ` _ \ \ / / _ \ \ /\ / / _ \ | | __| '__/ _ \| | / __|
| (_| | \__ \  __/ | | | | \ V / (_) \ V  V /  __/ | | |_| | | (_) | | \__ \
 \__,_|_|___/\___|_| |_| |_|\_/ \___/ \_/\_/ \___|_|  \__|_|  \___/|_|_|___/

*/


// / Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// function disemvowel(str) {

//   let result = ''
//   let vowels = 'aeiouAEIOU';

//   let allLetters = str.split('');


//   allLetters.forEach((letter) => {
//     if (!(vowels.includes(letter))) {
//       result += letter;
//     }
//   })

//   //! using a filter
//   // let filtered = allLetters.filter((letter) => {

//   //   if (vowels.includes(letter)) {
//   //     return letter
//   //   } else {
//   //     result += letter
//   //   }

//   // })

//   return result
// }


// make a vowel obj
let vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
}

function disemvowel(str) {

  let result = '';

  for (let letter of str) {
    let lowered = letter.toLowerCase();

    if (!(vowels[lowered])) {
      result += letter;
    }
  }

  return result;
}

// console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")



/*
 _                                          _
| |                                        | |
| |___      _____   __   _______      _____| |___
| __\ \ /\ / / _ \  \ \ / / _ \ \ /\ / / _ \ / __|
| |_ \ V  V / (_) |  \ V / (_) \ V  V /  __/ \__ \
 \__| \_/\_/ \___/    \_/ \___/ \_/\_/ \___|_|___/

*/
//create a function that tell us returns the amount of times vowelA & vowelB appear in the sentence


let twoVowels = function(sentence, vowelA, vowelB){
  let lettersObj = {};

  for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i].toLowerCase();
    console.log(letter);

    if(lettersObj[letter] === undefined){
      lettersObj[letter] = 1;
    } else{
      lettersObj[letter]++
    }

  }

  console.log(lettersObj);

  return `total count of the two vowels ${vowelA}: ${lettersObj[vowelA]} && ${vowelB}: ${lettersObj[vowelB]}`

}
// console.log(twoVowels("This website is for losers LOL!", 'o', 'e'))