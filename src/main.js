import {initializeFirebase} from '../src/lib/firebase/initialize-firebase.js'
import {initRouter} from './router.js'

const init = () => {
  initializeFirebase();
  initRouter();
};

window.onload = init();


