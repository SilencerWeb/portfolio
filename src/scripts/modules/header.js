import { onDOMReady, addEventListeners } from '../utils';


const handleHeaderButtonClick = (event) => {
  event.preventDefault();

  const headerButton = event.currentTarget;
  const about = document.querySelector('.about');

  if (about.classList.contains('about_visible')) {
    about.classList.remove('about_visible');
    headerButton.innerHTML = 'About me';
  } else {
    about.classList.add('about_visible');
    headerButton.innerHTML = 'My works';
  }
};

onDOMReady(() => {
  addEventListeners('.header__button', 'click', handleHeaderButtonClick);
});
