'use strict';

const bodyEl = document.querySelector('body');
const mobileNavBtnEl = document.querySelector('.mobile-nav-btn');
const navMainItemsEl = document.querySelectorAll('.nav--main-item');

mobileNavBtnEl.addEventListener('click', function () {
  bodyEl.classList.toggle('mobile-active')
})

for (let i = 0; i < navMainItemsEl.length; i++) {
  navMainItemsEl[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}