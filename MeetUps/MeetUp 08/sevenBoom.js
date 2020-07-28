// create a function that takes an array numbers
// and return BOOM if the number 7 appears in the array


let helperFunc = (num) => {
  let string = num.toString()

  return string;
}
// console.log(helperFunc(98))


let checker = (str, num) => {

  for(let i = 0; i < str.length; i++){
    let letter = str[i];
    // console.log(letter)

    if(Number(letter) === num){
      return num;
    }
  }
}
// console.log(checker('9997', 7))


let sevenBoom = (arr) => {


  // solution #1
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    // console.log('my current',current)

    let str = helperFunc(current)
    // console.log('my str',str)

    let number = checker(str, 7)
    // console.log(number)

    if(number === 7){
      return 'Boom!'
    }

  }

  return 'there is no 7 in the array'

}

console.log(sevenBoom([1,2,3,4,5,6,7]))
console.log('####################')
console.log(sevenBoom([8,6,33,100]))
console.log('####################')
console.log(sevenBoom([2,55,60,97,86]))