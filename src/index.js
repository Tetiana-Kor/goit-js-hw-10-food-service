import menu from './menu.json';
import menuItemCard from './templates/menu.hbs';

const menuContainer = document.querySelector('.js-menu');
const bodyEL = document.querySelector('body');
const switchEl = document.querySelector('.theme-switch__toggle');

const menuMarkup = menuItemCard(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const mainTheme = localStorage.getItem('theme');

if (mainTheme) {
  bodyEL.classList.add(mainTheme);
}

if (mainTheme === Theme.DARK) {
  switchEl.checked = true;
}

switchEl.addEventListener('change', onChangeInput);

function onChangeInput(e) {
  if (e.target.checked) {
    bodyEL.classList.remove(Theme.LIGHT);
    bodyEL.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEL.classList.remove(Theme.DARK);
    bodyEL.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
