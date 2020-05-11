// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
// /**
//  * @param {number[][]} coordinates
//  * @return {boolean}
//  */


let findSlope = function(coordinate1, coordinate2){
  //  [[1,1],[2,2],
  let x1 =  coordinate1[0]
  let y1 = coordinate1[1]
  let x2 = coordinate2[0]
  let y2 = coordinate2[1]

  let slopeFormula = ((y2-y1)/(x2-x1))

  return slopeFormula;
}
// console.log(findSlope([1,1],[2,2]))


// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
var checkStraightLine = function(coordinates) {

  let referencePoint = coordinates[0]
  let checkPoint = coordinates[1]
  let slopeOfTheLine = findSlope(referencePoint, checkPoint)
  console.log(slopeOfTheLine)


  for(let i =2; i < coordinates.length; i++ ){

    if(slopeOfTheLine !== findSlope(referencePoint, coordinates[i])){
      return false
    }
  }

  return true;
};

console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]))
console.log(checkStraightLine([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]]))






// The problem comes directly from LeetCode .
// https://leetcode.com/problems/check-if-it-is-a-straight-line/