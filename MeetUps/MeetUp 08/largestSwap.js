//write a function that takes a two-digit number and
//determine if its largest of two possibilities digit swaps


let helperFunc = (num) => {

  let reversed = num.toString().split('').reverse().join('')

  let toNum = Number(reversed);

  return toNum;
}

// console.log(helperFunc(14))



let largestSwap = (num) => {

  let original = num;
  let comparison = num;

  let swapped = helperFunc(comparison);


  // console.log(original, swapped)
  return original >= swapped;

}

console.log(largestSwap(14))
console.log(largestSwap(53))
console.log(largestSwap(99))