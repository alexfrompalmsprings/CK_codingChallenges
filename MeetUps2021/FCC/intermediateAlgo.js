// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {

  // ---- alexs code; a bit messy
  // also could have used minn & max
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


// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  var newArr = [];

  // ---- using two for eachs
  arr1.forEach(ele => {
    if (!arr2.includes(ele)) {
      newArr.push(ele)
    }
  });

  arr2.forEach(ele => {
    if (!arr1.includes(ele)) {
      newArr.push(ele)
    }
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);