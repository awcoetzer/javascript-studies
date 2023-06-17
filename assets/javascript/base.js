'use strict';

let isFirstLesson = false;

const render = function (lesson) {
  const headingString = `//LECTURE: ${lesson}`;

  const randomSym = function (length) {
    let symbolString = '';
    const symbolsArr = [
      '🟩', '🟦', '🟧',
      '🟥', '🟨', '🟪',
      '🟫'
    ]

    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * symbolsArr.length);
      symbolString += symbolsArr[randomNum]
    }
    return symbolString;
  }

  if (!isFirstLesson) {
    console.log(headingString);
    isFirstLesson = true
  } else {
    console.log(randomSym(10));
    console.log(headingString);
  }
}

export { isFirstLesson, render };