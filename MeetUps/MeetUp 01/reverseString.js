
// freeCodeCamp.org

// Basic Algorithm Scripting: Reverse a StringPassed
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.




function reverseString(str) {
  let result = ''

  for(let i = str.length -1; i >= 0; i--){
    let currentLetter = str[i]

    console.log('one by one ---->>>>',currentLetter)

    result+=currentLetter
    console.log('result ---> ',result)
  }


  return result;
}

reverseString("hello");
