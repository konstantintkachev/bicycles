'use strict';

const pageMain = document.querySelector('.page-main');
const pageHeaderNav = document.querySelector('.page-header__nav');
const pageHeaderLogo = pageHeaderNav.querySelector('.page-header__logo');
const pageHeaderBtn = pageHeaderNav.querySelector('.page-header__btn');
const mainNav = document.querySelector('.main-nav');

const elements = {
  'page-header__nav': pageHeaderNav,
  'page-header__logo': pageHeaderLogo,
  'page-header__btn': pageHeaderBtn,
  'main-nav': mainNav,
};

Object.keys(elements).forEach((element) => {
  elements[element].classList.remove(`${element}--no-js`);
  elements[element].classList.add(`${element}--closed`);
})

const menu = () => {
  Object.keys(elements).forEach((element) => {
    elements[element].classList.toggle(`${element}--opened`);
    elements[element].classList.toggle(`${element}--closed`);
  })
}

pageHeaderBtn.addEventListener('click', menu);
