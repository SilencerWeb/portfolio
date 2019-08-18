import { onPageLoad } from '../utils';


onPageLoad(() => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader_hidden');
  }, 1000);
});
