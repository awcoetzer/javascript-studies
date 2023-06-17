'use strict';

import { isFirstLesson, render } from "../../../assets/javascript/base.js";

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

const finlandPopluation = 6;
const averagePopulation = 33;
console.log(population > finlandPopluation);
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