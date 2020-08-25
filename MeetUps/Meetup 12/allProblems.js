// https://repl.it/@alexisaviles/MeetUp-12#index.js

/*
__      ____ _ _ __ _ __ ___    _   _ _ __
\ \ /\ / / _` | '__| '_ ` _ \  | | | | '_ \
 \ V  V / (_| | |  | | | | | | | |_| | |_) |
  \_/\_/ \__,_|_|  |_| |_| |_|  \__,_| .__/
                                     | |
                                     |_|
*/

// LOOPS 101 - Well not really...

// what are you expecting to happen once this code runs?!
for(let i = 0; i <= 10; i+=2){
  console.log(i);
}

// what are you expecting to happen here?
for(const i = 0; i <= 10; i++){
  console.log(i)
}

// what is happening with this code? Is it going to run?
let n = 2
while( n > 5){
 console.log('I am while loop', n)
 n--
}

// what are you expecting to happen once this code runs?!
for(let i = 10; i >= 0; i--){
console.log(i);
}

//  what is happening here?!?! How many console.log() are you expecting to see?
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log('Inner loop value of j:' + j);
  }
 console.log('Outer loop value of i:' + i);
}


/*
_      _   _                     _
| |    | | ( )                   | |
| | ___| |_|/ ___    ___ ___   __| | ___
| |/ _ \ __| / __|  / __/ _ \ / _` |/ _ \
| |  __/ |_  \__ \ | (_| (_) | (_| |  __/
|_|\___|\__| |___/  \___\___/ \__,_|\___|

*/



// queestion 1
/*
Create function that is able to take a number and console.log the pattern below.

*
**
***
****
*****
******

*/

const patternPrinter = function(n){
  let res = '';

  for(let i = 0; i <= n; i++ ){
    res+= '*'
    console.log(res)
  }
}



//   company has a list of employees and their salary in separate arrays. You are tasked
// with the job of printing out the name of each employee and the employee’s salary
// as a string in the format: 'Employee name: Employee salary:'

const namePrinter = function(emps, sal){

  let run;
  if(emps.length === sal.length){
    run = true;
  } else{
    console.log('Error: Please check the information is correct')
  }

  if(run){
    for(let i = 0; i < emps.length; i++){
      console.log(`${emps[i]}: ${sal[i]}`)
    }
  }


 }

 let employees = ['Lara', 'Sukhi', 'Evee', 'Simi','Beno','Jay'];
 let employeeSalary = [1000, 1300, 957.89, 3230.14, 750, 13900];


 /*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

/*

################################################################################
                   BASIC REQS COMPLETED
################################################################################
*/
var rockPaperScissors = function () {
  // O: array with multiple strings inside
  // I: a number
  // C: no constraints given
  // E: examples
  var string = 'RPS'
  var lettersRPS = string.split('');
  // result container to get the letters here
  var result = [];
  // we can easily solved this by looping.
  for(var r = 0; r < lettersRPS.length; r++){
    for(var p = 0; p < lettersRPS.length; p++){
      for(var s = 0; s < lettersRPS.length; s++){
        result.push(lettersRPS[r]+ lettersRPS[p] + lettersRPS[s]);
        // console.log('the result at the moment', result);
      }
    }
  }
  return result;
};



// var testOne = rockPaperScissors('RPS')
// console.log(testOne);


/*
################################################################################
                  EXTRA CREDIT VERSION
################################################################################
*/

var rockPaperScissors = function (num) {
  // initial vars
  var string = 'RPS'
  var lettersRPS = string.split('');

  // recursive base case
  if(num === 0){
    return [];
  }

  // result container --> []
  var result = [];

  // inner recursive function
  function rounds(plays){
    if(plays.length === num){
      result.push(plays)
      return;
    }
    lettersRPS.forEach(play =>{
      rounds(plays + play)
    })
  }

  // pass a string to rounds
  rounds('');
  // return it
  return result;
};


var testTwo = rockPaperScissors(2)
console.log(testTwo);