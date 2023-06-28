'use strict';

const rootEl = document.documentElement.style;
const themeBtn = document.querySelector('.btn--theme');

let currentTheme;

const lightTheme = function () {
  rootEl.setProperty('--clr-shadow', 'hsl(174, 23%, 42%)');
  rootEl.setProperty('--clr-background-shade', 'hsl(169, 24%, 84%)');
  rootEl.setProperty('--clr-background-main', 'hsl(165, 29%, 92%)');
  rootEl.setProperty('--clr-background-tint', 'hsl(160, 31%, 95%)');
  rootEl.setProperty('--clr-highlight', 'hsl(155, 34%, 88%)');
  rootEl.setProperty('--clr-headline', 'hsl(212, 38%, 26%)');
  rootEl.setProperty('--clr-paragraph', 'hsl(210, 32%, 42%)');
  rootEl.setProperty('--clr-paragraph-placeholder', 'hsla(210, 32%, 42%, 0.7)');
  rootEl.setProperty('--clr-stroke', 'hsl(155, 34%, 88%)');
  rootEl.setProperty('--clr-accent', 'hsl(170, 71%, 46%)');
  rootEl.setProperty('--clr-accent-tint', 'hsl(170, 71%, 56%)');
  rootEl.setProperty('--clr-button', 'hsl(212, 38%, 76%)');

}

const darkTheme = function () {
  rootEl.setProperty('--clr-shadow', 'hsl(215, 18%, 7%)');
  rootEl.setProperty('--clr-background-shade', 'hsl(215, 18%, 13%)');
  rootEl.setProperty('--clr-background-main', 'hsl(215, 15%, 16%)');
  rootEl.setProperty('--clr-background-tint', 'hsl(214, 13%, 20%)');
  rootEl.setProperty('--clr-highlight', 'hsl(213, 12%, 30%)');
  rootEl.setProperty('--clr-headline', 'hsl(210, 14%, 78%)');
  rootEl.setProperty('--clr-paragraph', 'hsl(210, 14%, 66%)');
  rootEl.setProperty('--clr-paragraph-placeholder', 'hsla(210, 14%, 66%, 0.7)');
  rootEl.setProperty('--clr-stroke', 'hsl(213, 12%, 30%)');
  rootEl.setProperty('--clr-accent', 'hsl(170, 71%, 46%)');
  rootEl.setProperty('--clr-accent-tint', 'hsl(170, 71%, 56%)');
  rootEl.setProperty('--clr-button', 'hsl(210, 14%, 86%)');
}

// Pull from local storage
const checkThemeInLocalStorage = function () {
  if (localStorage.hasOwnProperty('theme')) {
    currentTheme = JSON.parse(localStorage.getItem('theme'))
  }

  if (currentTheme === 'light') {
    lightTheme();
  } else {
    darkTheme();
  }
}

// theme function
const changeTheme = function () {
  if (!currentTheme) {
    lightTheme()
    currentTheme = 'light';
  } else if (currentTheme === 'light') {
    darkTheme()
    currentTheme = 'dark';
  } else {
    lightTheme()
    currentTheme = 'light';
  }
  localStorage.setItem('theme', JSON.stringify(currentTheme))
}

// event listeners
themeBtn.addEventListener('click', changeTheme)

// init function
const init = function () {
  checkThemeInLocalStorage();
}

init()