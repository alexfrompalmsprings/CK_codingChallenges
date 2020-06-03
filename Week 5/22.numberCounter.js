// Write a function called countNumbers, which accepts an array of strings.
//The function should return a count of the number of strings in the array that can be successfully converted into a number.
//For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

function countNumbers(arr){

}

// Examples:
countNumbers(['a','b','3','awesome','4']); // 2
countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
countNumbers([]); // 0
countNumbers(['0','1','3','NaN']); // 3
countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4