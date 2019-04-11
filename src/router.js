// Aquí importas las vistas
import {templates} from '../src/lib/ui'

const changeTmp = (hash) =>{
if(hash === '#/' || hash === '' || hash === '#'){
  return  viewTmp('#/menu');
} else if (hash === '#/menuDesayuno' || '#/menuRestoDelDia'){
  return viewTmp(hash);
} else {
  return viewTmp('#/menu')
}
}

const viewTmp = (routers) => {
  const router = routers.substr(2,routers.length -2);
  const containerTypeMenu = document.getElementById('container-tipo-menu');
  const containerOptionsTypeMenu = document.getElementById('container-opciones-tipo-menu');
  const containerProductsMenu = document.getElementById('container-productos-menu');

  containerOptionsTypeMenu.innerHTML = '';
  containerProductsMenu.innerHTML = ''; 

  switch (router){
    case 'home':     
    containerTypeMenu.appendChild(viewHome.home());      
    break;
    case 'desayuno':
    containerOptionsTypeMenu.appendChild(viewOptionMenuDesayuno.optionsDesayuno())
    break;  
    case 'restoDelDia':
    containerOptionsTypeMenu.appendChild(viewOptionMenuRestoDelDia.optionsRestoDelDia())
    break;
    case 'desayunoBebidas':
    getMenuDesayunoBebidas((dataMenuDesayunoBebidas) => {    
    containerProductsMenu.appendChild(viewMenuDesayunoBebidas.desayunoBebidas(dataMenuDesayunoBebidas))
    });
    break;
    case 'desayunoSandWich':
    getMenuDesayunoSandwich((dataMenuDesayunoSandwich) => {
      containerProductsMenu.appendChild(viewMenuDesayunoSandwich.desayunoSandwich(dataMenuDesayunoSandwich))
    });
    break;
    case 'menuRestoDelDia':
    getMenuRestoDelDia((dataMenuRestoDelDia) => {
    container.innerHTML = '';
    container.appendChild(viewMenuRestoDelDia.menuRestoDelDia(dataMenuRestoDelDia));
    break;
    });    
    default:
    containerTypeMenu.appendChild(viewMenu.home())
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};