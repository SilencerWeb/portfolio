import FullPage from '../vendor/fullpage';
import { onDOMReady } from '../utils';


onDOMReady(() => {
  const counterCurrent = document.querySelector('.counter__current');

  new FullPage('.project-list', {
    autoScrolling: window.innerHeight > 720,
    onLeave: (origin, destination) => {
      let nextSlideNumber = destination.index + 1;
      if (nextSlideNumber < 10) nextSlideNumber = `0${nextSlideNumber}`;

      counterCurrent.innerHTML = nextSlideNumber;
    },
  });
});
