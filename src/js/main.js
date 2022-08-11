// import '../../node_modules/focus-visible/dist/focus-visible.js';
import lazyImages from './modules/lazyImages.js';
import documentReady from './helpers/documentReady.js';
import Sliders from './modules/sliders.js';
import Popups from './modules/popups.js';
import Quiz from './modules/quiz.js';
import Works from './modules/works.js';
import inputMask from './modules/inputmask.js';
import { errorHandler } from './modules/error.js';

documentReady(() => {
  lazyImages();
  Sliders();
  Works();
  Popups();
  Quiz();
  inputMask();
  errorHandler();
});
