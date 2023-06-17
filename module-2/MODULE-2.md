#### <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" alt="Scrimba's website">JONAS SCHMEDTMANN | THE COMPLETE JAVASCRIPT COURSE 2023 ... | MODULE 2 | JS FUNDAMENTALS PART 1
</a> 

This repository is for the Udemy course course provided by Jonas Schmedtmann. This is to supplement the Scrimba course. 

Welcome to module 2, JavaScript fundamentals part 1. 

<br>

#### NOTES
## Module 2 Notes

<br>

## • Linking a Javascript file
```html
<!-- internal javascript -->

<html>
  <head>

    <script>
      const js = 'fun';
      if (js === 'fun') alert(javascript is fun)
    </script>
  </head>
  <body>

  </body>
</html>

<!-- external javascript -->
<!doctype html>
<html>
  <head>

  </head>
  <body>

    <script src="./assets/javascript/app.js"></script>
  </body>
</html>
```

To run javascript within your html, you need to either use internal or external javascript. 

By making script tags within the head tags in your HTML is known as internal JavaScript (_not recommended_), or link to an external javascript file using the the script tags with an attribute of src near the end of your body tags.

<br>

## • Values and Variables
```javascript
'Andre' //value
console.log('Andre');
console.log(33);

let firstName = 'Andre';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Graphic designer';
console.log(myFirstJob);
let currentJob = 'Programmer'
console.log(currentJob);

let jobOne = 'Graphic designer';
let jobTwo = 'Programmer';
```
A value, is a piece of data, to its fundamental, a value is the smallest piece of information we have in JavaScript.

A useful thing we can do with values, is store them inside of variables. A variable, `let firstName = 'Andre';`, is like a box that has content inside and a label slapped on the side of it, it holds information.

We can reuse the variable across our file, with the benefit of only changing its value at one location, and throughout the file it should be updated.

```javascript
  // naming conventions
  let camelCasing; // just use this
  let snake_casing;
```

Variables do follow certain naming conventions, for example not using reserved keywords in JavaScript, or starting it with a number, or using all capital letters when declaring a variable, among other things.

Also, camel casing is the standard used within JavaScript, you can use snake casing though that is more comman with Ruby developers.

---

#### ASSIGNMENT
1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
2. Log their values to the console

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Values and Variables
  const country = 'Bulgaria';
  const continent = 'Europe';
  let population = 6.8;

  console.log(country, continent, population);
  ```
</details>

---

<br>

## • Data types
```javascript
  const stringDataType = 'characters';
  const numberDataType = 3.1415;
  const booleanDataType = true;
  const undefindedDataType;
  const nullDataType = null;
```

Values can have different types, in JavaScript a value is either a **primitive** or an **object**.

There are seven **primitive** data types, *String*, *Number*, *Boolean*, *Undefined*, *Null*, *Symbol* and *BigInt*. Numbers, are used for both decimal and intergers. A string is used for characters. Booleans is what is known as a logical type and can only hold one of two values, that being **true** or **false**.

Undefined is a value taken by a variable not yet defined, while Null is a undefined value set by you, the coder. Symbols are newer, and are used to denote a unique value and cannot be changed. BigInt is for numbers larger than what the number type can handle.

```javascript
let randomInput = 'string';
console.log(randomInfo)

randomInput = true; // this is known as reassigning a variable
console.log(randomInfo)
```

On this note, JavaScript is *dynamically* typed, meaning you dont need to define the data type when declaring a variable, the value is what holds the data type. We can also reassign a different value with a different data type to the same variable later in our code.

```javascript
  // the typeof operator
  const stringDataType = 'characters';
  console.log(typeof stringDataType) // string

  const numberDataType = 3.1415;
  console.log(typeof numberDataType) // number

  const booleanDataType = true;
  console.log(typeof booleanDataType) // boolean

  const undefindedDataType;
  console.log(typeof undefindedDataType) // undefined

  const nullDataType = null;
  console.log(typeof nullDataType) // null

  // bug in javascript
  console.log(typeof null) // returns an object

```
You can also check the type of data type by using the **typeof** operator. There is a big in JavaScript, where if you check the typeof null, it returns a object.

---

#### ASSIGNMENT
  1. Declare a variable called 'isIsland' and set its value according to your 
  country. The variable should hold a Boolean value. Also declare a variable
  'language', but don't assign it any value yet
  2. Log the types of 'isIsland', 'population', 'country' and 'language'
  to the console

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Data Types
  const isIsland = false;
  let language;

  console.log(isIsland, population, country, language);
  ```
</details>

---

<br>

## • let, const & var
```javascript
  let age = 32;
  age = 33;

  const birthYear = 1700;
  const birthYear; // You cannot assign nothing to a const value

  var age = 32;
  age = 33;
```

There are **3** ways to declare variables, *let*, *const* and *var*. `let` allows you to reassign or mutate the variable at a later date. `const` does not allow you to do this, well at least not with primitive data types. `const` are immutable and you cannot assign nothing to a const variable. Always use `const` unless you know that the value will change at a later date.

When it comes to `var`, it work similar to `let` however there is something other `var` does which `let` and `const` do not, which will be discussed in mod_7.

---

#### ASSIGNMENT
  1. Set the value of 'language' to the language spoken where you live (some 
  countries have multiple languages, but just choose one)
  2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
  3. Try to change one of the changed variables now, and observe what happens

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: let, const and var
  language = 'Bulgarian'
  ```
</details>

---

<br>

## • Basic Operators
```javascript
  // Mathematical operators
  const now = 2023;
  const ageAndre = now - 1989;
  const ageBob = now - 1975;

  console.log(ageAndre * 2, ageAndre / 10, 2 ** 4)

  const firstName = 'Andre';
  const lastName = 'Coetzer';
  console.log(firstName + ' ' + lastName); // This is known as string concatenation

  // Assignment operators
  let x = 10 + 5; // 15
  x += 10; // 25
  // ( x = x + 10 )
  x *= 4; // 100
  // ( x = x * 10 )
  x++; // 101
  // ( x = x + 1 )
  x--; // 100
  // ( x = x - 1 )

// Comparison operators
console.log(ageAndre > ageBob) // < > <= >= 

```

We saw the `typeof` operator, but JavaScript has *mathematical* operators, *assignment* operators, *comparison* operators and *equality* operators. 

Assignment operators, have what is known as an incrementer `x++` and decrementer `x--` operator, these add or subtract 1 to whatever number value there is.

Comparison operators return a true or false value, either something is greather than `>` or greater than or equals to `>=` a specific value. Vice versa with less than.

When it comes operators, if there was a math operation on the right hand side of the assignment operator, why does the math operation happen first before the assignment and this is something die to operator precedence.

---

#### ASSIGNMENT
  1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
  2. Increase the population of your country by 1 and log the result to the console
  3. Finland has a population of 6 million. Does your country have more people than Finland?
  4. The average population of a country is 33 million people. Does your country have less people than the average country?
  5. Based on the variables you created, create a new variable 'description'
  which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

<details>
  <summary>Solution</summary>

  ```javascript
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

  const description = 'Bulgaria is in Europe, and its 6.8 million people speak Bulgarian';
  console.log(description);
  ```
</details>

---

<br>

## • Operator Precedence
```javascript
  let x, y;
  x = y = 25 - 10 - 5;
  console.log(x, y); // 10 10
```

Javascript has a well defined order of operator precedence in which order operators are executed. You can see the operator predence chart [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table).

To keep things short, certain operators have higher precedence over others, not only that but certain operators once again evaluate from either `left to right` or `right to left`. This is why `x` & `y` both evaluate to 10, because first the subtract(minus) operator is executed forming a value of 10, and then the assignment operator reads from `right to left`, so `y` will adopt the value of 10, and therefor `x` will adopt the value of `y`.

<br>

## • Strings & Template Literals
```javascript
  const firstName = 'Andre';
  const job = 'Software Engineer';
  const birthYear = 1989;
  const now = 2023;

  // string concatenation
  const andreConcatention = "I'm" + " " + firstName + " " + ...

  // string template literals
  const andreStringLiteral = `
  Hi, I'm ${firstName}, 
  I am a ${now - 1989} year old ${job}
  `
```

With `string template literals` we no longer need to concat strings. Instead of wrapping our strings in normal quotes we use backticks / backquotes / tilda keys ( ` ) to wrap the string. We then place what is known as a placeholder **${ ... }** with anything inside being treated as JavaScript and the outside as a string. 

String template literals also allow us to very easyily make multiline strings, where as with normal quotes we would have use regular expressions, such as `\n` to escape a line.

When it comes to whether or not you should just start using string literals, or a mix of both, itreally depends on your style.

---

#### ASSIGNMENT
 1. Recreate the 'description' variable from the last assignment, this time 
    using the template literal syntax.

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Strings & Template Literals
  const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
  ```
</details>

---

<br>

## • Taking Decisions: if / else Statements
```javascript
  const age = 17;

  if (age >= 18) {
    console.log('Passes drivers test age verification')
  } else {
    const calcAge = 18 - age;
    console.log(`Needs ${calcAge} more years before being able to pass drivers test age verification`)
  }
```

The if / else statement is also known as a control structure, essentially instead of JavaScript execuing line by line, we now have control over which code to run. We no have access to decision making.

Within the parenthesis takes in an expression that returns a boolean value. Depending on the desired outcome, that particular code block will run. A code block is `{ ... }` these curly braces, whatever is inside of these curly braces will be the code that runs.

The else statement is optional, it's perfectly fine to just write the if statement without adding else.

---

#### ASSIGNMENT
  1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
  2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Taking Decisions: if / else Statements
  if (population >= averagePopulation) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
  }
  ```
</details>

---

## • Type Conversion & Coercion

In JavaScript we have both `type conversion` & `type coercion`. The first being an explicit or manual way of converting a one data type to another, while the latter is an implicit way of converting one data type to another, this occuring automatically.

```javascript
  const inputField = '1991';

  //type conversion
  console.log(Number(inputField)); // This converts the value to a number
  console.log(String(23)) // This converts the number 23 to a string '23'

  //type coercion
  console.log(inputField + 18); // This results in 199118

  // NaN
  console.log(Number('Java')) // This result in NaN
```

`Type Coercion` appears when an operator is dealing with 2 different values that have different types. In this case JavaScript will will behind the scenes convert one value to match the other.

With the example above, the `+` operator triggers the coercion, whenever there is a `+` operator and a number and string values, the number will **always** be converted to a string. Not all operators work this way, using `- * /` will convert strings to numbers.

---

#### ASSIGNMENT
  1. Predict the result of these 5 operations without executing them:
  - '9' - '5';
    - 4 (number)
  - '19' - '13' + '17';
    - 617 (string)
  - '19' - '13' + 17;
    - 23 (number)
  - '123' < 57;
    - false (number)
  - 5 + 6 + '4' + 9 - 4 - 2;
    - 1143 (number)
  2. Execute the operations to check if you were right

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Type Conversion & Coercion
  console.log('9' - '5'); // 4
  console.log('19' - '13' + '17'); // '617'
  console.log('19' - '13' + 17); // 23
  console.log('123' < 57); // false
  console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
  ```
</details>

---

<br>

## • Truthy & Falsy Values
```javascript

```
---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 

  ```
</details>

---

<br>

## • Equality operators
```javascript

```
---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 

  ```
</details>

---

<br>

## • Boolean Logic
```javascript

```
---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 

  ```
</details>

---

<br>

## • Logical Operators
```javascript

```
---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 

  ```
</details>

---

<br>

## • The Switch Statement
```javascript

```
---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 

  ```
</details>

---

<br>

## • Statements & Expressions
```javascript

```
---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 

  ```
</details>

---

<br>

## • The conditional (ternary) operator
```javascript

```
---

#### ASSIGNMENT


<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 

  ```
</details>

---

<br>