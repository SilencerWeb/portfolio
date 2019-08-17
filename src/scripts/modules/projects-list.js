import FullPage from '../vendor/fullpage';
import { onDOMReady, doesElementExist } from '../utils';


onDOMReady(() => {
  if (doesElementExist('.project-list')) {
    const counterCurrent = document.querySelector('.counter__current');

    new FullPage('.project-list', {
      autoScrolling: window.innerHeight > 720,
      onLeave: (origin, destination) => {
        let nextSlideNumber = destination.index + 1;
        if (nextSlideNumber < 10) nextSlideNumber = `0${nextSlideNumber}`;

        counterCurrent.innerHTML = nextSlideNumber;
      },
    });
  }
});
