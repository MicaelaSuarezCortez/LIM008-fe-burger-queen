import {initializeFirebase} from './firebase/initialize-firebase.js'
import {initRouter} from './router.js'

const init = () => {
  initializeFirebase();
  initRouter();
};

window.onload = init();