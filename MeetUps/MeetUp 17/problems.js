/*
                                               _
                                              | |
  __ _ _ __ _ __ __ _ _   _   _ __   __ _ _ __| |_ _   _
 / _` | '__| '__/ _` | | | | | '_ \ / _` | '__| __| | | |
| (_| | |  | | | (_| | |_| | | |_) | (_| | |  | |_| |_| |
 \__,_|_|  |_|  \__,_|\__, | | .__/ \__,_|_|   \__|\__, |
                       __/ | | |                    __/ |
                      |___/  |_|                   |___/
*/


/*
__           ______           _
/ _|         |  ____|         | |
| |_ ___  _ __| |__   __ _  ___| |__
|  _/ _ \| '__|  __| / _` |/ __| '_ \
| || (_) | |  | |___| (_| | (__| | | |
  |_| \___/|_|  |______\__,_|\___|_| |_|

  */

// create a function that returns the length of each word

function eachFunc(arr) {

  let lengths = [];
  arr.forEach((word) => {
    lengths.push(word.length);
  })
  return lengths;
}
// console.log(eachFunc(['One', 'Two', 'Three', 'Four', 'Alex']));


/*
_ __ ___   __ _ _ __
| '_ ` _ \ / _` | '_ \
| | | | | | (_| | |_) |
|_| |_| |_|\__,_| .__/
                | |
                |_|
*/

function addANum(arr, num){

  // var arr = [1, 2, 3, 4];
  // var plus5 = [];
  // for(var i = 0; i < arr.length; i++) {
  //     plus5[i] = arr[i] + 5;
  // }

  // using map
  let mapped = arr.map((int) => {
    return int+ num;
  })

  return mapped;
}

let plus10 = [6,7,8,9]
console.log(addANum(plus10, 10))








/*
  __ _ _ _
 / _(_) | |
| |_ _| | |_ ___ _ __
|  _| | | __/ _ \ '__|
| | | | | ||  __/ |
|_| |_|_|\__\___|_|
 */


// Write a function called "filterEvenLengthWords".
// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

function evenFinder(word) {
  return word.length % 2 === 0 ? true : false;
}

// console.log(evenFinder('alex'));
// console.log(evenFinder('alexa'));


function filterEvenLengthWords(arr) {

  let filtered = arr.filter((word) => {
    return evenFinder(word)
  })

  return filtered;

}
// console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four', 'Alex']));