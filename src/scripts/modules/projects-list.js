import FullPage from '../vendor/fullpage';
import { onDOMReady } from '../utils';


onDOMReady(() => {
  new FullPage('.project-list');
});
