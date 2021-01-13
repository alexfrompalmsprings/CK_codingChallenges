function numStringSum(n) {
  // ...
  let string = String(n);
  let split = string.split('')


  let result = 0;

  split.forEach(num => {
      result+= Number(num)
  })

  return result;
}

console.log(numStringSum(25))


// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {

  //edge case
  if (n < 0) {
    return null
    //base case
  } else if (n === 0) {
    return 1;
    //recursive case
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {

  // //solve it iteratively
  // let sum = 0;

  // for(let i =0; i < array.length; i++){
  //   sum = sum + array[i]
  // }

  // console.log(sum);
  // return sum;

  let i = array.length - 1;

  //base case
  if (i < 0) {
    return 0;
  }

  return array[i] + sum(array.slice(0, i))

};




// recursion
function digital_root(n) {
// base case
if(n < 10) {
  return n;
}

// make a numbers array
let numberArray = n.toString().split("");
// initialize the result to zero
var result = 0;

// loop to add all the numbers
for(var i = 0; i < numberArray.length; i++) {
  result += Number(numberArray[i]);
}

// conditional statement & recursive function
return result < 10 ? result : digital_root(result);
}

console.log(digital_root(100))

