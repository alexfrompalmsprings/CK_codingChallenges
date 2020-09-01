/*                       _   ___  _ ___
                       | | |__ \| |__ \
__   _______      _____| |    ) | |  ) |
\ \ / / _ \ \ /\ / / _ \ |   / /| | / /
 \ V / (_) \ V  V /  __/ |  |_| |_||_|
  \_/ \___/ \_/\_/ \___|_|  (_) (_)(_)

*/

// create a function that tell us if the letter is a vowel

let areYouAvowel = function(letter){

  let lowered = letter.toLowerCase();

  return (lowered === 'a' || lowered === 'e' || lowered === 'i' || lowered === 'o' || lowered === 'u')

}
console.log(areYouAvowel('a'))
console.log(areYouAvowel('b'))
console.log(areYouAvowel('E'))