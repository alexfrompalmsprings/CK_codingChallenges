// You get a job an airline…your boss asks to create a few functions
// for them.

// 1.	Create a function that tell us the total price of an order based
// on the seats. The current price of a ticket is $80.Window seats
// are $25 more than regular seats
// Window Seats = ‘1A’ & ‘1F’
// Regular Seats = ‘1B – 1E’
// 	The customer’s order would look like this:
// 	Order1 = [‘10A’, ‘10B’, ‘11A’, ‘11B’]

// We would like to return a confirmation of the order with a
// message such as this one:
// ‘The Total is $230. 1 window seat & 1 middle seat’

// outputs, inputs, complexity and constraints (regarding both space and time), and edge cases and examples,
/*

output - price
      - number

input - array of strings

constraint and cases -- TRY TO BREAK MY APPLICATION
              -- case 1 : always gets an of array of string
              -- case 2 : empty array
examples -

*/



//


// we need something to check the price of the seat
// helper function: a new function that checks the price of the seat
//                      '10A', '10B'
function checkWindowSeat(seat) {
  //10A.includes('A'); true or false
  let seatPrice; //undefined

  let last = seat.slice(-1);
  // console.log(last);

  if (last === 'A' || last === 'F') {
    seatPrice = 105;
  } else {
    seatPrice = 80;
  }
  console.log(seatPrice);

  return seatPrice;
}

// console.log(checkWindowSeat('10A'))
// console.log(checkWindowSeat('10F'))
// console.log(checkWindowSeat('10B'))


function orderTotal(arr) {

  //variable for the total
  let total = 0;

  // use a for loop over the array
  for (let i = 0; i < arr.length; i = i + 1) {
    let seat = arr[i];
    console.log(seat);

    // using helper function to get the seatPrice && adding the seat price to the total
    total += checkWindowSeat(seat);

    console.log(total);
  }

  // return the total at the end
  return total;

}
//105 80
let order1 = ['10A', '10B', '11A', '11B']
// console.log(orderTotal(order1));





// 2.	We also need to have the flights information displayed for
// everyone waiting in the lobby. The information comes from
// an API and it looks like this:


// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


// helper function : ???
function helperFunction(flight) {
  // console.log(flight);

  let chunks = flight.split(';')
  // console.log(chunks);

  // ✅     ✅    ✅     ✅
  let [one, two, three, time] = chunks;

  one = one.replaceAll('_', ' ')
  // console.log(one);

  two = two.slice(0, 3).toUpperCase();
  // console.log(two); // chunks[1];

  three = three.slice(0, 3).toUpperCase();
  // console.log(three); // chunks[1];

  time = time.replaceAll(':', 'h')
  // console.log(time);


  // return  `🔴 ${one} from ${two} to ${three} (${time})`;
  return one.includes('Delayed') ? `🔴 ${one} from ${two} to ${three} (${time})` : `      ${one} from ${two} to ${three} (${time})`

}
// 🔴 Delayed Departure from FAO to TXL (11h25)
// console.log(helperFunction('_Delayed_Departure;fao93766109;txl2133758440;11:25'))

let flightsDisplayBar = function (flightsInfo) {
  let data = flightsInfo.split('+');
  console.log(data);

  // loops the data
  for (let flight of data) {
    // use helper function
    // console.log(flight)

    console.log(helperFunction(flight));
  }
};

//'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flightsDisplayBar(flights));