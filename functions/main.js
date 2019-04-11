import {initializeFirebase} from '../src/firebase/initialize-firebase.js'
import {initRouter} from '../src/router'

const init = () => {
  initializeFirebase();
  initRouter();
};

window.onload = init();