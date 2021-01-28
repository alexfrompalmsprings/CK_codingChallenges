// Prompt
// Can you write a function that takes two arrays as inputs and returns to us their intersection? We can call the method intersection. Let's return the intersection of the two inputs in the form of an array. As a reminder, the definition of an intersection of two sets A and B is the set containing all elements of A that also belong to B (or equivalently, all elements of B that also belong to A).




/*

O - output
-- an array at the end
-- []

i - input
- two arrays
['green', 'orange', 'blue', 'red'];
['black', 'green', 'red', 'purple'];

c - constraints/conditions/ cases/ complexity
---first array but not on the 1st


e -- example


*/


function intersection(colors1, colors2) {
  // solution with a loop


  // define an empty 'result' array
  let result = [];

  // loop over the 1st array
  for (let i = 0; i < colors1.length; i++) {
    let one = colors1[i];

    // inner loop;
    for (let j = 0; j < colors2.length; j++) {
      let two = colors2[j];

      // console.log(one, two);
      // make a comparison
      if (one === two) {
        // push it into the result array
        result.push(one); // we can push either one or two bc the same

        console.log(result);
      }
    }
  }


  // return the 'result' array
  return result;

}

// console.log(intersection(firstColors, secondColors))


// {
//   name: 'alex'
// }


const firstColors = ['green', 'green', 'orange', 'blue', 'red'];
const secondColors = ['black', 'green', 'red', 'purple'];

function intersectionWithSets(colors1, colors2) {

  let setOne = new Set(colors1);
  console.log(setOne);

  let colorsTwo = colors2.filter(color => {
    return setOne.has(color)
  })

  return colorsTwo;


  // let setTwo = new Set(colorsTwo);
  // console.log(setTwo);


  // // ....
  // return [...setTwo];


}

console.log(intersectionWithSets(firstColors, secondColors))






























function intersectionFinderAlex(colors1, colors2) {


  // SOLUTION #1  - for loop

  /*
  let result = [];

  for (let i = 0; i < colors1.length; i++) {
    let one = colors1[i];

    for (let j = 0; j < colors2.length; j++) {
      let two = colors2[j];

      if (one === two) {
        result.push(one);
      }
    }
  }

  return result;
  */



  // SOLUTION #2 - filter & includes

  /*

  // filter through one array
  let intersection = colors1.filter((el) => {
    // the element is included in the second one
    return colors2.includes(el);
  });

  // return result
  return intersection;

  */



  // SOLUTION #3 - SETS

  /*

  //create new set
  let setOne = new Set(colors1);
  console.log(setOne);

  // filter on the set
  let filteredSet = new Set(colors2.filter((color) => setOne.has(color)));

  // two steps
  let colorsTwo = colors2.filter(color => {
    return setOne.has(color)
  })
  console.log(colorsTwo);

  let anotherFilterSet = new Set(colorsTwo);
  console.log(anotherFilterSet);


  console.log(filteredSet);


  // return into an array
  return [...filteredSet];

  */

}


// console.log(intersectionFinderAlex(firstColors, secondColors))