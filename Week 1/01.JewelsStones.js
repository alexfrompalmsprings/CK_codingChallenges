// 771. Jewels and Stones


// Share
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.


var numJewelsInStones = function(J, S) {

  let counter = 0;
  let map = {};

  for(let i =0; i < S.length; i++){
    let currentStone = S[i];

    if(map[currentStone] === undefined){
      map[currentStone] =1
    } else{
      map[currentStone]++
    }
  }


  for(let j = 0; j < J.length; j++){
    let currentJewel = J[j]
    console.log(`i am checking this jewel ${currentJewel}`)

    if(map[currentJewel]){
      counter += map[currentJewel]
    }
  }


  return counter;
};

console.log(numJewelsInStones('aA','aAAbbbb' ))