import FullPage from '../vendor/fullpage';
import { onDOMReady } from '../utils';


onDOMReady(() => {
  const counterCurrent = document.querySelector('.counter__current');

  new FullPage('.project-list', {
    autoScrolling: window.innerHeight > 720,
    onLeave: (origin, destination) => {
      const currentProjectVideo = origin.item.querySelector('video.project__media');
      const nextProjectVideo = destination.item.querySelector('video.project__media');

      if (currentProjectVideo) {
        setTimeout(() => {
          currentProjectVideo.pause();
          currentProjectVideo.currentTime = 0;
        }, 500);
      }

      if (nextProjectVideo) {
        setTimeout(() => {
          nextProjectVideo.play();
        }, 500);
      }

      let nextSlideNumber = destination.index + 1;
      if (nextSlideNumber < 10) nextSlideNumber = `0${nextSlideNumber}`;

      counterCurrent.innerHTML = nextSlideNumber;
    },
    afterLoad: (origin) => {
      const projectVideo = origin.item.querySelector('video.project__media');

      if (projectVideo) {
        projectVideo.play();
      }
    },
  });
});
