'use strict';

let isFirstLesson = false;

const render = function (lesson) {
  const headingString = `//LECTURE: ${lesson}`;

  const randomSym = function (length) {
    let symbolString = '';

    for (let i = 0; i < length; i++) {
      symbolString += '➖'
    }
    return symbolString;
  }

  if (!isFirstLesson) {
    console.log(headingString);
    isFirstLesson = true
  } else {
    console.log('')
    console.log(randomSym(20));
    console.log(headingString);
  }
}

export { isFirstLesson, render };