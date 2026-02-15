function printName(name, lastName) {
  console.log(name + ' ' + lastName);
}

printName('Tanya', 'Test');

function multBy2(number) {
  return number * 2;
}

console.log(multBy2(5));

import { printAge } from './print_helper.js';
printAge(25);

var firstName = 'John';
let lastName = 'Smith';

console.log(`${firstName} is`);

var result = 20 < 10;

console.log(6 !== 10);

var hour = 21;
/*
function message(hour) {
  if (hour >= 6 && hour < 12) {
    console.log(`Good morning, Time is ${hour}`);
  } else if (hour >= 12 && hour < 18) {
    console.log(`Good afternoon, Time is ${hour}`);
  } else {
    console.log(`Good evening, Time is ${hour}`);
  }
}
message(hour);  
*/

for (let i = 0; i < 5; i++) {
  console.log(`Hello Word ${i}`);
}

var cars = ['Volvo', 'Toyota', 'Tesla'];

/*for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}*/

/*for (const car of cars) {
  console.log(car);
}*/

cars.forEach((element) => {
  console.log(element);
});

import { CustomerDetails } from './print_helper.js';

var customerDetails = new CustomerDetails();
customerDetails.printFirstName('Tina');

var familySize = 2;
var plannedDistanceToDrive = 100;

function recommendedCar(familySize, plannedDistanceToDrive) {
  if (familySize <= 4 && plannedDistanceToDrive < 200) {
    return 'Tesla';
  } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
    return 'Toyota Camry';
  } else {
    return 'Minivan';
  }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));
