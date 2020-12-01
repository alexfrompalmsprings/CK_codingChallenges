//   _               _        __          _
//   ___| | __ _ ___ ___(_) ___  /__\ ___  __| |_   _  ___ ___
//  / __| |/ _` / __/ __| |/ __|/ \/// _ \/ _` | | | |/ __/ _ \
// | (__| | (_| \__ \__ \ | (__/ _  \  __/ (_| | |_| | (_|  __/
//  \___|_|\__,_|___/___/_|\___\/ \_/\___|\__,_|\__,_|\___\___|

// the most common reduce question you'll see.
// create a function that returns the sum of all the numbers in the array.
let numbers = [10, 20, 30, 40, 50];

// classic way
function classicSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    sum += number;
  }

  return sum;
}

console.log(classicSum(numbers));

// using reduce
let reduceSum = numbers.reduce(function (total, number) {
  return total + number;
}, classicSum(numbers));

console.log(reduceSum);