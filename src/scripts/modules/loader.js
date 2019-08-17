import { onPageLoad, doesElementExist } from '../utils';

onPageLoad(() => {
  if (doesElementExist('.loader')) {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader_hidden');
  }
});
