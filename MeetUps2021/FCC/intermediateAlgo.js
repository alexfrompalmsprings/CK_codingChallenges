// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {

  // ---- alexs code; a bit messy
  let sorted = arr.sort((a, b) => a - b);
  let sum = 0;
  let [first, second] = sorted;

  while (second >= first) {
    sum += first;
    console.log(sum);
    first++
  }


  return sum;
}

sumAll([1, 4]);