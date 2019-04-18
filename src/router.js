// Aquí importas las vistas
import {viewMesero} from './lib/ui/ui-mesero.js'

const changeTmp = (hash) =>{
if(hash === '#/' || hash === '' || hash === '#'){
  return  viewTmp('#/mesero');
} else if (hash === '#/mesero'){
  return viewTmp(hash);
} else {
  return viewTmp('#/mesero')
}
};

const viewTmp = (routers) => {
  const router = routers.substr(2,routers.length -2);
  const container= document.getElementById('container');  
  container.innerHTML = ''; 

  switch (router){
    case 'mesero':    
    container.innerHTML= '';
    container.appendChild(viewMesero.mesero())
    break;    
    default:
    container.appendChild(viewMesero.mesero())
    };    
  }


export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};