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

console.log(evenFinder('alex'));
console.log(evenFinder('alexa'));



function filterEvenLengthWords(arr) {

  let filtered = arr.filter((word) => {
    return evenFinder(word)
  })

  return filtered;

}
console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four', 'Alex']));




// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);