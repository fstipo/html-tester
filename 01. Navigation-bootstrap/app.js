const collapseBtn = document.querySelector('.navigation__collapse-button');
const navigationEl = document.querySelector('.section__navigation');
const navigationBox = document.querySelector('.navigation__box');

collapseBtn.addEventListener('click', () => {
  navigationEl.classList.toggle('collapsed');
});
