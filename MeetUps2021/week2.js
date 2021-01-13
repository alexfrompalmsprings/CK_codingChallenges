// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �


// 1. Store Mark's and John's mass and height in variables ✅
let mark = {
  height: 1.69,
  weight: 78,
}


let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)

function bmiFormula(mass, height) {
  // formula given in the coding challenge
  let result = (mass) / (height * height);
  return result;
}


function bmiFormulaWithObject(personObject) {
  // formula given in the coding challenge
  let result = (personObject.weight) / (personObject.height * personObject.height);
  return result;

}
console.log(bmiFormulaWithObject(mark));



let johnBMI = bmiFormula(johnWeight, johnHeight);
// console.log(johnBMI);

let markBMI = bmiFormula(markWeight, markHeight);
// console.log(markBMI);

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John. ✅
let markHigherBMI = johnBMI < markBMI; // true or false;
// console.log(markHigherBMI);



// First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I

// answer #1 -  iteration with the string
function reverseString(str) {
  // the string that we would like to return  at the end
  let newString = '';

  // looping through the string
  // position 10
  // zero index based

  for (var i = str.length - 1; i >= 0; i--) { // i-- ){

    // declare char
    let char = str[i];
    console.log('char :', char, 'i :', i);


    // adding the char to newString;
    newString += char;
    console.log(newString)
  }

  // return the string
  return newString;

}

// console.log(reverseString('Hello User'));



function secondReverse(str) {
  // empty array
  let reversed = [];

  // loop over the string
  for (let i = 0; i < str.length; i++) {

    // es6 --- spread operator
    let reversed2 = [str[i], ...reversed];
    console.log(reversed2)

    // assigning the rev2 to rev1
    reversed = reversed2;
    console.log(reversed)
  }

  return reversed.join('')

}

console.log(secondReverse('good bye...'))



// answer #2 - make into an array and just figure the rest...
























/*


     _______.  ______    __       __    __  .___________. __    ______   .__   __.
    /       | /  __  \  |  |     |  |  |  | |           ||  |  /  __  \  |  \ |  |
   |   (----`|  |  |  | |  |     |  |  |  | `---|  |----`|  | |  |  |  | |   \|  |
    \   \    |  |  |  | |  |     |  |  |  |     |  |     |  | |  |  |  | |  . `  |
.----)   |   |  `--'  | |  `----.|  `--'  |     |  |     |  | |  `--'  | |  |\   |
|_______/     \______/  |_______| \______/      |__|     |__|  \______/  |__| \__|



*/



function BMI_solution(mass, height) {
  // 2. Calculate both their BMIs using the formula (you can even implement both
  // versions)
  let formula = (mass) / (height * height);
  return formula;

}

// 1. Store Mark's and John's mass and height in variables
let markH = 1.69;
let markW = 78;

let johnH = 1.95;
let johnW = 92;

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
let marksBMI = BMI_solution(markW, markH);
// console.log(marksBMI);