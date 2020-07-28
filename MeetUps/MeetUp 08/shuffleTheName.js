// Create a function that accepts a string
// and returns a string with the first and last name swapped

let shuffleName = (string) => {

  //solution 1
  // let splitted = string.split(' ')

  // let result = ''

  // result+= splitted[1] + ' ' + splitted[0];

  // return result;


  //solution 2
  let splitted = string.split(' ')
  let reversed = splitted.reverse()
  let joined = reversed.join(' ')

  return joined;

}

console.log(shuffleName('Alex Avila'))
console.log(shuffleName("Rosie O'Donell"))
console.log(shuffleName('Seymour Butts'))