/*
  Write a function, intersection, that takes two arrays and returns
  the elements that are in both arrays.
  var a = [4, 1, 2, 3];
  var b = [3, 7, 5, 1, 9, 8];
  intersection(a, b)
  should return [1, 3]
*/

var intersection = function(arrA, arrB) {

  let result = [];
  let objectB = {}

  for(let i = 0; i < arrB.length; i++){
    let currentNum = arrB[i]

    if(objectB[currentNum] === undefined){
      objectB[currentNum] = true;
    }
    // console.log(objectB)
  }

  for(let j =0; j < arrA.length; j++){
    let currentNumA = arrA[j]

    if(objectB[currentNumA]){
      result.push(currentNumA)
    }
    // console.log(result)
  }


  return result;
};

console.log(intersection([4, 1, 2, 3],[3, 7, 5, 1, 9, 8]))