function mutation(arr) {

  let obj1 = {}; 
  console.log(obj1)

  /*
  {
    h:true
    e:true
    l:true
    o:true
  }
  */
  

  let wordOne = arr[0].toLowerCase(); 
  let wordTwo = arr[1].toLowerCase(); 


  for(let i =0; i < wordOne.length; i++){
    let currentLetter = wordOne[i]
      // come back and show '!'
    if((obj1[currentLetter] === undefined)){
    console.log('this letter is not in the obj', '➡️' ,currentLetter)
      // insert ?!?! assignin to the obj 
      obj1[currentLetter] = true; 
    } else{
    console.log('bro you already have this in obj1', '➡️' ,currentLetter)
    }
  }

  console.log('------------------')
  console.log(obj1)
  console.log('------------------')

  for(let i =0; i < wordTwo.length; i++){
    let currentLetter = wordTwo[i]
      // come back and show '!'
    if(!(obj1[currentLetter])){
    console.log('this letter is not in the obj', '➡️' ,currentLetter)
      return false
    }
  }

  return true
}



mutation(["hello", "hey"]);
mutation(["hello", "Hello"])
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
mutation(["Alien", "line"])
