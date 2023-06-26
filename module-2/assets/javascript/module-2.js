'use strict';

import { isFirstLesson, render } from "../../../assets/javascript/console-output.js";

render('Values and Variables')
// LECTURE: Values and Variables
const country = 'Bulgaria';
const continent = 'Europe';
let population = 6.8;

console.log(country, continent, population);

render('Data Types')
// LECTURE: Data Types
const isIsland = false;
let language;

console.log(isIsland, population, country, language);

render('let, const and var')
// LECTURE: let, const and var
language = 'Bulgarian'

render('Basic Operators')
// LECTURE: Basic Operators
const populationInHalf = population / 2;
console.log(populationInHalf);

console.log(population);
population++;
console.log(population);
population--;

const finlandPopulation = 6;
const averagePopulation = 33;
console.log(population > finlandPopulation);
console.log(population > averagePopulation);

// const description = 'Bulgaria is in Europe, and its 6.8 million people speak Bulgarian';

render('Strings & Template Literals')
// LECTURE: Strings & Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

render('Taking Decisions: if / else Statements')
// LECTURE: Taking Decisions: if / else Statements
if (population >= averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

render('Type Conversion & Coercion')
// LECTURE: Type Conversion & Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

render('Equality operators');
// LECTURE: Equality operators

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
const numNeighbours = 5;

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

render('Logical Operators');
// LECTURE: Logical Operators

if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

render('The Switch Statement');
// LECTURE: The Switch Statement

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

render('Statements & Expressions');
// LECTURE: Statements & Expressions

render('The conditional (ternary) operator');
// LECTURE: The conditional (ternary) operator
const isAboveOrBelowAverage = population > averagePopulation ? 'above' : 'below';

console.log(`${country}'s population is ${isAboveOrBelowAverage} average`);

