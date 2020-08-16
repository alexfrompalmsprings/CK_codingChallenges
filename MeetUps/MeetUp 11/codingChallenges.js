/*
  ___      _          ______  _
 / __)    | |        (____  \(_)
| |__ ____| |  _ ____ ____)  )_ ____
|  __) _  | | / ) _  )  __  (| |  _ \
| | ( ( | | |< ( (/ /| |__)  ) | | | |
|_|  \_||_|_| \_)____)______/|_|_| |_|


Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(string) {


}



/*
 _____  _   _            _          _____  _   _
|  __ \| \ | |   /\     | |        |  __ \| \ | |   /\
| |  | |  \| |  /  \    | |_ ___   | |__) |  \| |  /  \
| |  | | . ` | / /\ \   | __/ _ \  |  _  /| . ` | / /\ \
| |__| | |\  |/ ____ \  | || (_) | | | \ \| |\  |/ ____ \
|_____/|_| \_/_/    \_\  \__\___/  |_|  \_\_| \_/_/    \_\

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
For example:
"GCAT"  =>  "GCAU"
*/

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  let letters = dna.split('');
  let RNA = []

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i]

    if (letter === 'T') {
      RNA.push('U')
    } else {
      RNA.push(letter)
    }
  }

  return RNA.join('');
}
// console.log(DNAtoRNA("TTTT"));


/*  _____                            __  __          __   __      __  __ _____ _   _
 / ____|                          |  \/  |   /\    \ \ / /___  |  \/  |_   _| \ | |
| (___  _   _ _ __ ___    ______  | \  / |  /  \    \ V /( _ ) | \  / | | | |  \| |
 \___ \| | | | '_ ` _ \  |______| | |\/| | / /\ \    > < / _ \/\ |\/| | | | | . ` |
 ____) | |_| | | | | | |          | |  | |/ ____ \  / . \ (_>  < |  | |_| |_| |\  |
|_____/ \__,_|_| |_| |_|          |_|  |_/_/    \_\/_/ \_\___/\/_|  |_|_____|_| \_|



Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
*/

function sumArray(array) {

  //! solution #1
  //edge case
  // if(array === null ){
  //   return 0
  // }

  // var sum = 0;
  // var ordered = array.sort((a,b) => a -b)

  // for(let i = 1; i < ordered.length - 1; i++){
  //   sum+= ordered[i]
  // }

  // return sum;

  //! solution #2
  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum - max - min



}
console.log(sumArray([6, 2, 1, 8, 10]))


/*
 __     _     _   _              _____                                _   _
/_ |   | |   | \ | |            / ____|                              | | (_)
 | |___| |_  |  \| | ___  _ __ | |     ___  _ __  ___  ___  ___ _   _| |_ ___   _____
 | / __| __| | . ` |/ _ \| '_ \| |    / _ \| '_ \/ __|/ _ \/ __| | | | __| \ \ / / _ \
 | \__ \ |_  | |\  | (_) | | | | |___| (_) | | | \__ \  __/ (__| |_| | |_| |\ V /  __/
 |_|___/\__| |_| \_|\___/|_| |_|\_____\___/|_| |_|___/\___|\___|\__,_|\__|_| \_/ \___|


Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null2.
*/


function firstNonConsecutive(arr) {
  let diff;

  for (let i = 0; i < arr.length - 1; i++) {
    let first = arr[i]
    let second = arr[i + 1];

    diff = second - first;

    if (diff !== 1) {
      return second
    }

  }
  return null;

}


/*
  _____ _        _                _____                  _
 / ____| |      (_)              / ____|                | |
| (___ | |_ _ __ _ _ __   __ _  | |     ___  _   _ _ __ | |_
 \___ \| __| '__| | '_ \ / _` | | |    / _ \| | | | '_ \| __|
 ____) | |_| |  | | | | | (_| | | |___| (_) | |_| | | | | |_
|_____/ \__|_|  |_|_| |_|\__, |  \_____\___/ \__,_|_| |_|\__|
                          __/ |
                         |___/

Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
*/

function strCount(str, letter) {
  //! solution less advanced
  // let occurrences = 0;

  // for(let i = 0; i < str.length; i++ ){
  //   let current = str[i];

  //   if(current === letter){
  //     occurrences++;
  //   }
  // }

  // return occurrences;

  //! solution more advanced version
  let letters = str.split('');

  let map = {};


  for (let i = 0; i < letters.length; i++) {
    let current = letters[i];

    if (map[current] === undefined) {
      map[current] = 1;
    } else {
      map[current]++;
    }
  }

  return map[letter] === undefined ? 0 : map[letter];


}
console.log(strCount('Hello', 'l'));