#### <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" alt="Scrimba's website">JONAS SCHMEDTMANN | THE COMPLETE JAVASCRIPT COURSE 2023 ... | MODULE 3 | JS FUNDAMENTALS PART 2
</a> 

This repository is for the Udemy course course provided by Jonas Schmedtmann. This is to supplement the Scrimba course. 

Welcome to module 3, JavaScript fundamentals part 2. 

<br>

#### NOTES
## Module 3 Notes

<br>

## • Activating Strict Mode
```javascript
// activating strict mode
'use strict';

// Bugged code
const hasDriversLicense = false;
const hasPassedTest = true;

if (hasPassedTest) hasDriverLicense = true; // we omitted the 's'
if (hasDriversLicense) console.log('Just got drivers license')
```

**Strict mode** is a way for us to write secure JavaScript code. All we have to do to activate strict mode is to write `"'use strict';"`.  
This line of code must come before anything else in the file.

What is meant by **secure code** is that strict mode helps us avoid introducing bugs into our code in two ways. First, strict mode forbids us from doing certain things, and it also creates visible errors when something goes wrong. Otherwise, JavaScript would fail silently, and we would not know why.

##### **MORE INFO FROM MDN**

1. Strict mode eliminates some JavaScript **silent errors** by changing them to **throw errors**.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not in strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

In the example above, we wrote some buggy code. Without strict mode activated, this would fail silently. However, with strict mode enabled, we can see where the error is. This feature has been updated since ES2015, but it is still good to use.

<br>

## • Functions
```javascript
function logger () {
  console.log('My name is Andre')
}

// calling / running / invoking
logger(); //My name is Andre
logger(); //My name is Andre
logger(); //My name is Andre
```

A function in it's most simplest of forms, is a piece of code we can reuse over and over again, a little bit like a variable. A variable holds a value, where functions hold chunks of code. In the example above, we wrote a function that logs `My name is Andre` to the console whenever we call it.

There are different ways of saying that we are executing a function, those are we are either `calling, running or invoking` the function above 3 times.

A function can not only repeat code as we demonstrated above, but it can also `receive` data and `return` data back. You can think of functions like machines.

```javascript
  function fruitProcessor (apples, oranges) {
    const juice = `Fruit juice with ${apples} apples and ${oranges} oranges.`
    return juice;
  }

  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);

  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
```

Above, we wrote a function to demonstrate how it receives data, known as `parameters`. The `apples` and `oranges` parameters can be thought of as special variables. They act as placeholders, so when you input values, those values will fill in the blanks.

The values we pass into the function are called `arguments`. When we create the function, it has parameters, or we can create parameters for the function. However, when we invoke the function, we pass in arguments.

Functions are useful for implementing "DRY" code, where "DRY" stands for "Don't Repeat Yourself."

---

#### ASSIGNMENT
  1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
  2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

<details>
  <summary>Solution</summary>

  ```javascript
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
  ```
</details>

---

<br>

## • Function Declarations vs. Expressions
```javascript
// function declaration
function calcAgeOne (birthYear) {
  return 2023 - birthYear;
}

const ageOne = calcAgeOne(1981);

// function expressions
const calcAgeOne = function (birthYear) {
  return 2023 - birthYear;
}

const ageTwo = calcAgeTwo(1981);

console.log(ageOne, ageTwo);

```

In JavaScript, there are different ways to write functions, and each way works in a slightly different manner. The function shown in the last lesson is known as a function declaration. We use the function keyword to declare the function.

There is also `function expressions`, where we save a function to a variable. This is because functions are just expressions; they produce a value. This allows us to save an `anonymous` function to a variable. Notice that with function expressions, we do not follow the function keyword with a name; the name is associated with the variable. We call these functions in the exact same way.

The difference between the two is that function declarations are `hoisted`, meaning we can invoke our function before even declaring it. It's a matter of personal preference as to which approach to use.


---

#### ASSIGNMENT
  1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
  2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
  3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
  4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

<details>
  <summary>Solution</summary>

  ```javascript
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
  ```
</details>

---

<br>

## • Arrow Functions
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Arrow Functions
  ```
</details>

---

<br>

## • Functions Calling Other Functions
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Functions Calling Other Functions
  ```
</details>

---

<br>

## • Reviewing Functions
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Reviewing Functions
  ```
</details>

---

<br>

## • Introduction to Arrays
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Introduction to Arrays
  ```
</details>

---

<br>

## • Basic Array Operations (Methods)
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Basic Array Operations (Methods)
  ```
</details>

---

<br>

## • Introduction to Objects
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Introduction to Objects
  ```
</details>

---

<br>

## • Dot vs. Bracket Notation
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Dot vs. Bracket Notation
  ```
</details>

---

<br>

## • Object Methods
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Object Methods
  ```
</details>

---

<br>

## • Iteration: The for Loop
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Iteration: The for Loop
  ```
</details>

---

<br>

## • Looping Arrays, Breaking and Continuing
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Looping Arrays, Breaking and Continuing
  ```
</details>

---

<br>

## • Looping Backwards and Loops in Loops
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Looping Backwards and Loops in Loops
  ```
</details>

---

<br>

## • The while Loop
```javascript

```

---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: The while Loop
  ```
</details>

---