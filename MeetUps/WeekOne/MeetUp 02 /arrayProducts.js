// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

let arrayProducts = (arr) => {

  let result = [];
  let numProduct;

  let product = 1;
  let count = 0;

  while(arr.length > count){
    product*= arr[count]
    console.log(product)
    count++
  }

  for(let i = 0; i < arr.length; i++ ){
    numProduct = product / arr[i]
    result.push(numProduct)
    console.log(result);
  }

  return result;
}


arrayProducts([1, 2, 3, 4, 5]) // [120, 60, 40, 30, 24]
arrayProducts([3, 2, 1]) // [120, 60, 40, 30, 24]

// Follow-up: what if you can't use division?