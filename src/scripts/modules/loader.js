import { onPageLoad } from '../utils';

onPageLoad(() => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader_hidden');
});
