// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:

//0      1   2
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]



// string with the given temperatures. Example: [17, 21, 23] will print

function printForecast(arr) {
  // do a lot of things
  console.log(arr);

  // intial empty string
  let displayMessage = '';


  // idea: use a for-loop
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    // adding the temperature to my string inside the loop
    // '' or ``
    // displayMessage += '...' + temp + 'ºC in .... '
    displayMessage += `${temp}ºC in ${i + 1} days... `


    console.log(displayMessage);




  }



  // this is our goal ⬇️⬇️
  //"... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
  return displayMessage;
}


let tempsOne = [17, 21, 23];

console.log(printForecast(tempsOne)); // [17, 21, 23];




















// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const anotherTemperatures = [3, -2, -6, -1, 'error', 18, 25, 98, 75, 35, 41];
















































// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?



// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it