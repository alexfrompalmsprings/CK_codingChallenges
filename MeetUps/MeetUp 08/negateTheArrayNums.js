//Given an array of numbers, negate all elements contained within

let negate = (numbers) => {
  // solution #1
  let result = numbers;

  for(let i = 0; i < result.length; i++){
    result[i] *= -1;
  }

  return result;

}

console.log(negate([1, 2, 3, 4]))
console.log(negate([-1, 2, -3, 4]))
console.log(negate([-1, -2, -3, -4]))