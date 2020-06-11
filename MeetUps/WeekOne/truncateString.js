// Basic Algorithm Scripting: Truncate a StringPassed
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(str, num) {

  if(str.length <= num){
    return str;
  }



 let splitWord = str.split('')

 let result = ''
 let counter = 0;

 while(num > counter){
   result+= str[counter]
   console.log(str[counter])
   counter++
 }


 result+="..."
 console.log(result);
 return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);