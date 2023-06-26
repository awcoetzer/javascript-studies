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

Also, camel casing is the standard used within JavaScript, you can use snake casing though that is more common with Ruby developers.

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
  const undefinedDataType;
  const nullDataType = null;
```

Values can have different types, in JavaScript a value is either a **primitive** or an **object**.

There are seven **primitive** data types, *String*, *Number*, *Boolean*, *Undefined*, *Null*, *Symbol* and *BigInt*. Numbers, are used for both decimal and integers. A string is used for characters. Booleans is what is known as a logical type and can only hold one of two values, that being **true** or **false**.

Undefined is a value taken by a variable not yet defined, while Null is a undefined value set by you, the coder. Symbols are newer, and are used to denote a unique value and cannot be changed. BigInt is for numbers larger than what the number type can handle.

```javascript
let randomInput = 'string';
console.log(randomInfo)

randomInput = true; // this is known as reassigning a variable
console.log(randomInfo)
```

On this note, JavaScript is *dynamically* typed, meaning you don't need to define the data type when declaring a variable, the value is what holds the data type. We can also reassign a different value with a different data type to the same variable later in our code.

```javascript
  // the typeof operator
  const stringDataType = 'characters';
  console.log(typeof stringDataType) // string

  const numberDataType = 3.1415;
  console.log(typeof numberDataType) // number

  const booleanDataType = true;
  console.log(typeof booleanDataType) // boolean

  const undefinedDataType;
  console.log(typeof undefinedDataType) // undefined

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

Assignment operators, have what is known as an increment `x++` and decrement `x--` operator, these add or subtract 1 to whatever number value there is.

Comparison operators return a true or false value, either something is greater than `>` or greater than or equals to `>=` a specific value. Vice versa with less than.

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

  const finlandPopulation = 6;
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
  const andreConcatenation = "I'm" + " " + firstName + " " + ...

  // string template literals
  const andreStringLiteral = `
  Hi, I'm ${firstName}, 
  I am a ${now - 1989} year old ${job}
  `
```

With `string template literals` we no longer need to concat strings. Instead of wrapping our strings in normal quotes we use backticks / back quotes / tilde keys ( ` ) to wrap the string. We then place what is known as a placeholder **${ ... }** with anything inside being treated as JavaScript and the outside as a string. 

String template literals also allow us to very easily make multiline strings, where as with normal quotes we would have use regular expressions, such as `\n` to escape a line.

When it comes to whether or not you should just start using string literals, or a mix of both, literally depends on your style.

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

The if / else statement is also known as a control structure, essentially instead of JavaScript executing line by line, we now have control over which code to run. We no have access to decision making.

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

In JavaScript we have both `type conversion` & `type coercion`. The first being an explicit or manual way of converting a one data type to another, while the latter is an implicit way of converting one data type to another, this occurring automatically.

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

Falsy values are not false but will convert to false is we try to convert them to a boolean. In JavaScript there are 5 falsy values:

  1. The number `0`
  2. An empty string `''`
  3. `undefined`
  4. `Null`
  5. `NaN`

```javascript
  console.log(Boolean(0)); // false
  console.log(Boolean('Andre')); // true
  console.log(Boolean('')); // false
  let lastName;
  console.log(Boolean(lastName)); //false
```

We can check this by using the `Boolean()` function to see whether a value is **truthy** or **falsy**. In practice, the conversion to boolean is always implicit _(**coercion**)_ rather than explicit _(**conversion**)_.

The question is, when do we use this? It happens in two scenarios, first, when using `logical operators` and second in a `logical context`, for example within an if / else statement.

```javascript
  const money = 0;

  if (money) {
    console.log('Spend it wisely!');
  } else {
    console.log('get a job');
  }
```

In the example above, because money is essentially a `falsy` value, it will be converted though `coercion` to a false value.

<br>

## • Equality operators
```javascript
  const age = 18;

  if (age === 18) console.log('yay!, I am an adult!!');

  // strict equality
  18 === '18' // false

  // loose equality
  18 == '18' // true
```

To check whether or not a value is equal to another value, we use equality operators. There is the `==` (loose equality) & `===` (strict equality) or `!=` (loose different equality) & `!==` (strict different equality).

The difference between both `loose ==` and `strict ===`, is the strict equals to checks if the types are of the same type, while loose has JavaScript do type coercion and then check them.

As a rule, always use the strict equality over loose, to avoid bugs in your software or applications.

```javascript
  const favoriteNum = 42;

  if (favoriteNum !== 23) console.log('Why not 23?')
```

There is also the different equality operator, again it has both the loose and strict modes. The different equality operator is opposite of the equality operator.

---

#### ASSIGNMENT
  1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
  2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
  3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
  4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
  5. Test the code with different values of 'numNeighbours', including 1 and 0.
  6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
  7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
  8. Reflect on why we should use the === operator and type conversion in this situation

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Equality operators

  const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

  if (numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if (numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
    console.log('No borders');
  } 

  ```
</details>

---

<br>

## • Boolean Logic

Boolean logic is a branch of computer science, that uses a combination of true and false values to receive an outcome, in order to do this it uses several logical operators much the same way as mathematical operators is  used to combine numeric values.

For now we only will be talking about the `AND`, `OR` and `NOT` logical operators.

##### SCENARIO
  1. Sarah has a drivers license.
  2. Sarah has good vision

#### THE 'AND' OPERATOR | `&&`

<br>

##### _THE TRUTH TABLE: AND_

|AND    |TRUE   |FALSE  |
|:---:  |:---:  |:---:  |
|TRUE   |`TRUE` |FALSE  |
|FALSE  |FALSE  |FALSE  |

Sarah has a drivers license `&&` Sarah has good vision. Taking a look at what we call the truth table, we can see that both SENARIO 1 `&&` 2 need to be true, in order for the expression to be true. 

This can be done with more than just SCENARIO 1 `&&` 2, we could add 3 `&&` 4 `&&` 5 ... as many as we like, though they all need to equate to true in order to be return true. I either one is false then the entire expression equates to false.

#### THE 'OR' OPERATOR | `||`

<br>

##### _THE TRUTH TABLE: OR_

|OR    |TRUE   |FALSE  |
|:---:  |:---:  |:---:  |
|TRUE   |`TRUE` |`TRUE` |
|FALSE  |`TRUE` |FALSE  |

Sarah has a drivers license `||` Sarah has good vision. The `OR` logical operator states that whenever one of the values is true the entire expression equates to true, however if both values is false the expression equates to false. We can see this represented within the truth table.

#### THE 'NOT' OPERATOR | `!`

The `!` logical operator simply reverses the expressions outcome, the `!` operator has precedence over other logical operators.

---

<br>

## • Logical Operators

In this lesson we will be looking at a more practical example of `Boolean Logic` and `Logical Operators` using the senario laid out above with Sarah.

```javascript
  let hasDriversLicense;
  let hasGoodVision;
  let isTired;

  hasDriversLicense = true;
  hasGoodVision = true;
  console.log(hasDriversLicense && hasGoodVision); //true

  hasDriversLicense = true;
  hasGoodVision = false;
  console.log(hasDriversLicense || hasGoodVision); //true

  hasDriversLicense = true;
  console.log(!hasDriversLicense); //false

  hasDriversLicense = true;
  hasGoodVision = true;
  if (hasDriversLicense && hasGoodVision) {
    console.log('Both are true, so Sarah can drive 🙂'); //This will execute
  } else {
    console.log('Someone else should drive!');
  }

  hasDriversLicense = true;
  hasGoodVision = false;
  if (hasDriversLicense || hasGoodVision) {
    console.log('One is true, so Sarah can drive 🙂'); //This will execute
  } else {
    console.log('Someone else should drive!');
  }

  hasDriversLicense = true;
  hasGoodVision = true;
  isTired = true;

  if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Both are true, so Sarah can drive 🙂');
  } else {
    console.log('Someone else should drive!'); //This will execute
  }
```
---

#### ASSIGNMENT
  1. Comment out the previous code so the prompt doesn't get in the way
  2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an 
  island.
  3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
  4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
  5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: Logical Operators
  if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`); //This is the result
}
  ```
</details>

---

<br>

## • The Switch Statement
```javascript
  const day = 'thursday';

  switch (day) {
    case 'monday':
      console.log('Today is Monday');
      break;
      case 'tuesday':
        console.log('Today is Tuesday');
        break;
    case 'wednesday':
      console.log('Today is the middle of the week');
      break;
    case 'thursday':
      console.log('It\'s almost Friday');
      break;
    case 'friday':
    case 'saturday':
    case 'sunday':
      console.log('Its the weekend!!!');
      break;
    default:
      console.log('Day not recognized');
  }
```

A `Switch Statement` is an alternative way of writing an if statement, when all we one to do is compare one value to multiple different operators. A good if example would be to see the same usuage of the variable `day` in an if statement.

---

#### ASSIGNMENT
  1. Use a switch statement to log the following string for the given 'language':
  
  - chinese or mandarin: 'MOST number of native speakers!'
  - spanish: '2nd place in number of native speakers'
  - english: '3rd place'
  - hindi: 'Number 4'
  - arabic: '5th most spoken language'
  - for all other simply log 'Great language too :D'

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: The Switch Statement
  
  switch (language) {
    case 'chinese':
    case 'manderin':
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
  ```
</details>

---

<br>

## • Statements & Expressions
```javascript
  3 + 4 // this is an expression
  1991 // this is also an expression

  if (23 > 10) {
    console.log('23 is bigger'); // this is a statement
  } // this is a statement

```

A `expression` is a piece of code that produces a value. A `statement` is simply a sequence of actions, it doesn't produce a value.

It's important to know the difference because certain things such as `string template literals` expect an `expression` over a `statement`

---

<br>

## • The conditional (ternary) operator
```javascript
  let age = 18;
  age >= 18 ? console.log('I enjoy drinking wine') : console.log('I enjoy drinking water');

  const ageLimit = age >= 18 ? 'above' : 'below'
  const drink = age >= 18 ? 'wine' : 'water';
  console.log(`I am ${ageLimit} the age limit and enjoy drinking ${drink}`)
```

The `conditional operator` all allows to write a if / else statement but all in one line. It's also known as the `ternary operator` because it has three parts, the condition, the if part and the mandatory else part.

The `conditional (ternary) operator` produces a value which means it can seen as an `expression` and NOT a statement. This also means we can use this in a `string template literal` or store it inside a `variable`.

A `ternary operator` is perfect for a quick decision and not a means of replaced for an if / else statement.

---

#### ASSIGNMENT
  1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. 
  Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
  2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

<details>
  <summary>Solution</summary>

  ```javascript
  // LECTURE: 
  const isAboveOrBelowAverage = population > averagePopulation ? 'above' : 'below';

  console.log(`${country}'s population is ${isAboveOrBelowAverage} average`);
  ```
</details>

---