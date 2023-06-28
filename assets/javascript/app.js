'use strict';

import { developerInfo, modulesInfo } from "./sidebar-info.js;

const bodyEl = document.querySelector('body');
const mobileNavBtnEl = document.querySelector('.mobile-nav-btn');
// const navMainItemsEl = document.querySelectorAll('.nav--main-item');

/*
  Sidebar creation
*/

/*
  profile img component
*/
/*
  <img src="" alt="" class="user-img">
*/
const createUserImg = function () {
  const userImg = document.createElement('img');
  userImg.setAttribute('src', `${developerInfo.profileImage}`);
  userImg.setAttribute('alt', `${developerInfo.profileImageAlt}`)
  userImg.classList.add('user-img');

  return userImg;
}

/*
  <picture class="user-img-box">
    ...
  </picture>
*/
const createUserImgBox = function () {
  const userImgBox = document.createElement('picture');
  userImgBox.classList.add('user-img-box');

  return userImgBox;
}

/*
  <a href="" target="_blank" class="user-img-link">
    ...
  </a>
*/
const createUserImgLink = function () {
  const userImgLink = document.createElement('a');
  userImgLink.setAttribute('href', `${developerInfo.github}`);
  userImgLink.setAttribute('target', '_blank');
  userImgLink.classList.add('user-img-link');

  return userImgLink;
}

/*
  <div class="container--sidebar">
    ...
  </div>
*/
const createUserImgContainerSidebar = function () {
  const userImgContainerSidebar = document.createElement('div');
  userImgContainerSidebar.classList.add('container--sidebar');

  return userImgContainerSidebar;
}

/*
  <div class="user-img-wrapper">
    ...
  </div>
*/
const createUserImgWrapper = function () {
  const userImgWrapper = document.createElement('div');
  userImgWrapper.classList.add('user-img-wrapper')
}

/*
  username component
*/

/*
  <span class="username-text"></span>
*/
const createUsernameText = function () {
  const usernameText = document.createElement('span');
  usernameText.classList.add('username-text');

  return usernameText;
}

/*
  <span class="job-text"></span>
*/

const createJobText = function () {
  const jobText = document.createElement('span');
  jobText.classList.add('job-text');

  return jobText;
}

/*
  <div class="username-box">
    ...
  </div>
*/
const createUsernameBox = function () {
  const usernameBox = document.createElement('div');
  usernameBox.classList.add('username-box');

  return usernameBox;
}

/*
  <div class="container--sidebar">
    ...
  </div>
*/
const createUsernameContainerSidebar = function () {
  const usernameContainerSidebar = document.createElement('div');
  usernameContainerSidebar.classList.add('container--sidebar');

  return usernameContainerSidebar;
}

/*
  <div class="username-wrapper">
    ...
  </div>
*/
const createUsernameWrapper = function () {
  const usernameWrapper = document.createElement('div');
  usernameWrapper.classList.add('username-wrapper');

  return usernameWrapper;
}

/*
  social links component
*/

/*
  <ion-icon name="logo-linkedin" class="social-icon"></ion-icon>
*/
const createIonIconForSocial = function (index) {
  const ionIcon = document.createElement('ion-icon');
  ionIcon.setAttribute('name', `${developerInfo.socialLinks[index].iconName}`);
  ionIcon.classList.add('social-icon');

  return ionIcon;
}

/*
  <a href="" class="link link--social">
    ...
  </a>
*/
const createSocialLink = function (index) {
  const socialLink = document.createElement('a');
  socialLink.setAttribute('href', `${developerInfo.socialLinks[index].socialLink}`)
  socialLink.classList.add('link', 'link--social');

  return socialLink
}

/*
  <div class="social-link-box">
    ...
  </div>
*/
const createSocialLinkBox = function () {
  const socialLinkBox = document.createElement('div');
  socialLinkBox.classList.add('social-link-box');

  return socialLinkBox;
}

/*
  <div class="container--sidebar">
    ...
  </div>
*/
const createSocialLinkContainerSidebar = function () {
  const socialLinkContainerSidebar = document.createElement('div');
  socialLinkContainerSidebar.classList.add('container--sidebar"');

  return socialLinkContainerSidebar;
}

/*
  <div class="social-links-wrapper">
    ...
  </div>
*/
const createSocialLinksWrapper = function () {
  const socialLinksWrapper = document.createElement('div');
  socialLinksWrapper.classList.add('social-links-wrapper');
}

/*
  main navigation component
*/
/*
  <span class="pre-heading"></span>
*/
const createPreHeading = function (index) {
  const preHeading = document.createElement('span');
  preHeading.classList.add('pre-heading');
  preHeading.textContent = `Module &mdash; ${modulesInfo[index].moduleVer}`
}

/*
  <ion-icon name="chevron-back" class="nav--main-link-icon"></ion-icon>
*/
const createIonIconForModules = function () {
  const ionIcon = document.createElement('ion-icon');
  ionIcon.setAttribute('name', 'chevron-back');
  ionIcon.classList.add('nav--main-link-icon');

  return ionIcon;
}

/*
  <div class="nav--main-link-icon-box">
    ...
  </div>
*/
const createNavMainLinkIconBox = function () {
  const navMainLinkIconBox = document.createElement('div');
  navMainLinkIconBox.classList.add('nav--main-link-icon-box');

  return navMainLinkIconBox;
}

/*
  <div class="nav-main--link-header">
    ...
  </div>
*/
const createNavMainLinkHeader = function () {
  const navMainLinkHeader = document.createElement('div');
  navMainLinkHeader.classList.add('nav-main--link-header"');

  return navMainLinkHeader;
}

/*
  <span class="nav-main--title">
    ...
  </span>
*/
const createNavMainTitle = function (index) {
  const navMainTitle = document.createElement('nav-main--title');
  navMainTitle.classList.add('nav-main--title');
  navMainTitle.textContent = `${modulesInfo[index].title}`

  return navMainTitle;
}

/*
  <a href="#home" class="nav--main-link">
    ...
  </a>
*/
const createNavMainLink = function (index) {
  const navMainLink = document.createElement('a');
  navMainLink.setAttribute('href', `${modulesInfo[index].modulePath}`)
}

/*
  --- Start of Sub List
*/
/*
  <span class="sub-title"></span>
*/
const createSubTitle = function (index, subIndex) {
  const subTitle = document.createElement('span');
  subTitle.classList.add('sub-title');
  subTitle.textContent = `${modulesInfo[index].subList[subIndex].subTitle}`

  return subTitle;
}

/*
  <a href="" class="sub-link">
    ...
  </a>
*/
const createSubLink = function (index, subIndex) {
  const subLink = document.createElement('a');
  subLink.setAttribute('href', `${modulesInfo[index].subList[subIndex].subPath}`);
  subLink.classList.add('sub-link');

  return subLink;
}

/*
  <li class="sub-item">
    ...
  </li>
*/
const createSubItem = function () {
  const subItem = document.createElement('li');
  subItem.classList.add('sub-item');

  return subItem;
}

/*
  <ul class="sub-list">
    ...
  </ul>
*/
const createSubList = function () {
  const subList = document.createElement('ul');
  subList.classList.add('sub-list');

  return subList;
}
/*
  End of Sub List ---
*/

/*
  <li class="nav--main-item">
    ...
  </li>
*/
const createNavMainItem = function () {
  const navMainItem = document.createElement('li');
  navMainItem.classList.add('nav--main-item');

  return navMainItem;
}

/*
  <ul class="nav--main-list">
    ...
  </ul>
*/
const createNavMainList = function () {
  const navMainList = document.createElement('ul');
  navMainList.classList.add('nav--main-list');

  return navMainList;
}

/*
  <nav class="nav--main">
    ...  
  </nav>
*/
const createNavMain = function () {
  const navMain = document.createElement('nav');
  navMain.classList.add('nav--main');

  return navMain;
}

/*
  <div class="navigation-wrapper">
    ...
  </div>
*/
const createNavigationWrapper = function () {
  const navigationWrapper = document.createElement('div');
  navigationWrapper.classList.add('navigation-wrapper');

  return navigationWrapper;
}

/*
  settings box component
*/
/*
  <ion-icon name="moon" class="theme-icon"></ion-icon>
*/
const createIonIconForTheme = function () {
  const ionIconForTheme = document.createElement('ion-icon');
  ionIconForTheme.setAttribute('name', 'moon');
  ionIconForTheme.classList.add('theme-icon');

  return ionIconForTheme;
}

/*
  <button class="btn--theme">
    ...
  </button>
*/
const createBtnTheme = function () {
  const btnTheme = document.createElement('button');
  btnTheme.classList.add('btn--theme');

  return btnTheme;
}

/*
  <span class="date">date here</span>
*/
const createDate = function () {
  const dateEl = document.createElement('span');
  dateEl.classList.add('date');

  return dateEl;
}

/*
  <p class="copyright"> &copy; Copyright</p>
*/
const createCopyright = function () {
  const copyright = document.createElement('p');
  copyright.classList.add('copyright');
  copyright.textContent = '&mdash; Copyright';

  return copyright;
}

/*
  <div class="settings-box">
    ...
  </div>
*/
const createSettingBox = function () {
  const settingsBox = document.createElement('div');
  settingsBox.classList.add('settings-box');

  return settingsBox;
}

/*
  <div class="container--sidebar">
    ...
  </div>
*/
const createSettingBoxContainerSidebar = function () {
  const settingBoxContainerSidebar = document.createElement('div');
  settingBoxContainerSidebar.classList.add('container--sidebar');

  return settingBoxContainerSidebar;
}

/*
  <div class="settings-wrapper">
    ...
  </div>
*/
const createSettingsWrapper = function () {
  const settingsWrapper = document.createElement('div');
  settingsWrapper.classList.add('settings-wrapper');

  return settingsWrapper;
}

// init
const init = function () {

}

init()