'use strict';

import { isFirstLesson, render } from "../../../assets/javascript/console-output.js";

render('Activating Strict Mode')
// LECTURE: Activating Strict Mode

render('Functions')
// LECTURE: Functions

function describeCountry (country, population, capitalCity) {
  const description = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return description;
}

const bulgaria = describeCountry('Bulgaria', '6.8', 'Sofia');
const france = describeCountry('France', '67', 'Paris');
const southAfrica = describeCountry('South Africa', '59', 'Cape Town, Pretoria and Bloemfontein');

console.log(bulgaria);
console.log(france);
console.log(southAfrica);

render('Function Declarations vs. Expressions')
// LECTURE: Function Declarations vs. Expressions
// function declarations
function percentageOfWorldOne (population) {
  const worldPopulation = 7900;
  return population / worldPopulation * 100;
}

const germanyOne = percentageOfWorldOne(83);
const usaOne = percentageOfWorldOne(331);
const indiaOne = percentageOfWorldOne(1408);

console.log(germanyOne.toFixed(1), usaOne.toFixed(1), indiaOne.toFixed(1));

// function expressions
const percentageOfWorldTwo = function (population) {
  const worldPopulation = 7900;
  return population / worldPopulation * 100;
}

const germanyTwo = percentageOfWorldTwo(83);
const usaTwo = percentageOfWorldTwo(331);
const indiaTwo = percentageOfWorldTwo(1408);

console.log(germanyTwo.toFixed(1), usaTwo.toFixed(1), indiaTwo.toFixed(1));

render('Arrow Functions')
// LECTURE: Arrow Functions

render('Functions Calling Other Functions')
// LECTURE: Functions Calling Other Functions

render('Reviewing Functions')
// LECTURE: Reviewing Functions

render('Introduction to Arrays')
// LECTURE: Introduction to Arrays

render('Basic Array Operations (Methods)')
// LECTURE: Basic Array Operations (Methods)

render('Introduction to Objects')
// LECTURE: Introduction to Objects

render('Dot vs. Bracket Notation')
// LECTURE: Dot vs. Bracket Notation

render('Object Methods')
// LECTURE: Object Methods

render('Iteration: The for Loop')
// LECTURE: Iteration: The for Loop

render('Looping Arrays, Breaking and Continuing')
// LECTURE: Looping Arrays, Breaking and Continuing

render('Looping Backwards and Loops in Loops')
// LECTURE: Looping Backwards and Loops in Loops

render('The while Loop')
// LECTURE: The while Loop


