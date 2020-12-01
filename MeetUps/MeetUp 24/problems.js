//   _               _        __          _
//   ___| | __ _ ___ ___(_) ___  /__\ ___  __| |_   _  ___ ___
//  / __| |/ _` / __/ __| |/ __|/ \/// _ \/ _` | | | |/ __/ _ \
// | (__| | (_| \__ \__ \ | (__/ _  \  __/ (_| | |_| | (_|  __/
//  \___|_|\__,_|___/___/_|\___\/ \_/\___|\__,_|\__,_|\___\___|

// the most common reduce question you'll see.
// create a function that returns the sum of all the numbers in the array.
let numbers = [10, 20, 30, 40, 50];

// classic way
function classicSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    sum += number;
  }

  return sum;
}

console.log(classicSum(numbers));

// using reduce
let reduceSum = numbers.reduce(function (total, number) {
  return total + number;
}, classicSum(numbers)); // passing in a function here

console.log(reduceSum);


// _     _           _           __          _
// ___ | |__ (_) ___  ___| |_ ___    /__\ ___  __| |_   _  ___ ___
// / _ \| '_ \| |/ _ \/ __| __/ __|  / \/// _ \/ _` | | | |/ __/ _ \
// | (_) | |_) | |  __/ (__| |_\__ \ / _  \  __/ (_| | |_| | (_|  __/
// \___/|_.__// |\___|\___|\__|___/ \/ \_/\___|\__,_|\__,_|\___\___|
//         |__/

// return all the names of the students into an array.

let studentsInfo = [{
    name: 'alex',
    location: 'CA',
    system: 'mac'
  },
  {
    name: 'katie',
    location: 'WA',
    system: 'mac'
  },
  {
    name: 'nas',
    location: 'CA',
    system: 'windows'
  },
  {
    name: 'drew',
    location: 'DC',
    system: 'windows'
  },
];

function namesFunction(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let student = array[i];
    result.push(student.name);
  }

  return result;
};

console.log(namesFunction(studentsInfo));


let namesReduce = studentsInfo.reduce(function (namesArr, student) {
  namesArr.push(student.name);
  return namesArr;
}, []);

console.log(namesReduce);


// __             _                      ___      _       _
// / _| __ _ _ __ | |_ __ _ ___ _   _    / _ \___ (_)_ __ | |_ ___
// | |_ / _` | '_ \| __/ _` / __| | | |  / /_)/ _ \| | '_ \| __/ __|
// |  _| (_| | | | | || (_| \__ \ |_| | / ___/ (_) | | | | | |_\__ \
// |_|  \__,_|_| |_|\__\__,_|___/\__, | \/    \___/|_|_| |_|\__|___/
//                              |___/

// return the total amount of points of Alex's fantasy team during week 11
let alexsTeam = [{
    player: 'Kennan Allen',
    position: 'WR',
    points: 35,
    team: 'Chargers'
  },
  {
    player: 'Kyler Murray',
    position: 'QB',
    points: 20,
    team: 'Cardinals'
  },
  {
    player: 'Alvin Kamara',
    position: 'RB',
    points: 11,
    team: 'Saints'
  },
  {
    player: 'Gronk',
    position: 'TE',
    points: 5,
    team: 'Tampa'
  },
  {
    player: 'Steelers',
    position: 'D',
    points: 16,
    team: 'Steelers'
  },
];

let totalPointsSinceWeekOne = 850;

let totalPointsWeek11 = alexsTeam.reduce(function (total, activePlayer) {
  return total + activePlayer.points;
}, 0); // totalPointsSinceWeekOne

console.log(totalPointsWeek11);









// _            _                 ___                           _   _
// _ __ ___  __| |_   _  ___(_)_ __   __ _    / _ \_ __ ___  _ __   ___ _ __| |_(_) ___  ___
// | '__/ _ \/ _` | | | |/ __| | '_ \ / _` |  / /_)/ '__/ _ \| '_ \ / _ \ '__| __| |/ _ \/ __|
// | | |  __/ (_| | |_| | (__| | | | | (_| | / ___/| | | (_) | |_) |  __/ |  | |_| |  __/\__ \
// |_|  \___|\__,_|\__,_|\___|_|_| |_|\__, | \/    |_|  \___/| .__/ \___|_|   \__|_|\___||___/
//                                   |___/                  |_|