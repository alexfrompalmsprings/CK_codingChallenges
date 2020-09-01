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

  // let vowels = 'aeiou'

  // two ways to do this right?!?

  // solution #1 - for loop

  for (let i = 0; i < word.length; i++) {
    let lowered = word[i].toLowerCase();
    console.log(lowered)

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