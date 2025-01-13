/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Paul');
console.log(23);

let firstName = "Julie";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let $function = 27;

// Variable name conventions
let person = "Wardie";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Ramp Agent";

console.log(myFirstJob);

let country = "United Kingdom";
let continent = "Europe";
let population = 70000000;

console.log("Counry " + country);
console.log("Continent " + continent);
console.log("Population " + population)

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 30);
// console.log(typeof "Paul");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(typeof year);

console.log(typeof null);


let age = 63;
age = 64;

const birthYear = 1961;
// birthYear = 1960;
// const job = "programmer";

var job = 'Programmer';
job = "Ramp Agent";

lastName = "Ward";
console.log(lastName);



// Maths Operators
const now = 2037;
const agePaul = now - 1961;
const ageJulie = now - 1959;
console.log(agePaul, ageJulie);

console.log(agePaul * 2, agePaul / 10, 2 ** 3);
// 2 **3 means 2 to thepower of 3 == 2 * 2 * 2

const firstName = "Paul";
const lastName = "Ward";
console.log(firstName + " " + lastName)

// Assignment Operators
let x = 10 + 5;
x += 10; // += x = x + 10 = 25
x *= 4 // x = x * 4 == 25 * 4 = 100
x++ // x = x + 1 = 101
x-- // x = x - 1 = 99;
console.log(x);

// Comparison Operators
console.log(agePaul > ageJulie); //  >, <, >=, <=
console.log(ageJulie >= 18);

const fullAge = ageJulie >= 18;

console.log(now - 1961 > now - 1959);



const now = 2037;
const agePaul = now - 1961;
const ageJulie = now - 1959;

console.log(now - 1961 > now - 1959);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = ((agePaul + ageJulie) / 2);
console.log(agePaul, ageJulie);
console.log(averageAge);

const massPaul = 81.1;
const heightPaul = 1.82;

const massJulie = 50.8;
const heightJulie = 1.64;

const BMIpaul = massPaul / heightPaul ** 2;
const BMIjulie = massJulie / (heightJulie * heightJulie);

console.log("Paul's BMI is " + BMIpaul);
console.log("Julie's BMI is " + BMIjulie);

const higherBMI = BMIpaul > BMIjulie;
console.log(higherBMI);



const firstName = 'Paul';
const job = 'Ramp Agent';
const birthYear = 1961;
const currentYear = 2025;

const paul = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + "!";

console.log(paul);

const paulNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(paulNew);

console.log(`Just a regaular string.....`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`)



const age = 15;

if (age >= 18) {
  console.log("Julie can start her driving!");
} else {
  yearsLeft = 18 - age;
  console.log(
    `Julie is too young you will have to wait another ${yearsLeft} years`
  );
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


const inputYear = 1961;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Paul`));
console.log(typeof NaN);

console.log(String(23), 23);

// Type of Coercion
console.log(`I am ` + 63 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` / `2`);

let n = `1` + 1; // `11`
n = n - 1;
console.log(n);



// 5 Falsy Values: 0, ' ', undefined, null and NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Paul`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 0;
if (money) {
  console.log(`Don't spend it all!!`);
} else {
  console.log(`You should get a job!`);
}

let height = 1.82;
if (height) {
  console.log(`YAY !! height is defined`);
} else {
  console.log(`Height is undefined!`);
}

const age = 63;
if (age === 63) console.log("You just became an old man!");

*/

const hasDriversLicense = true; // Variable A
const hasGoodVision = true; // Variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive....`);
// } else {
//   console.log(`Someone else should drive!....`);
// }

const isTired = false; // Vairable C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive....`);
} else {
  console.log(`Someone else should drive!....`);
}
