import{products} from '../ui/ui-mesero-products.js';
import{getBebidasDesayuno} from '../controller/controller-getBebidas.js';

export const viewMesero = {
   mesero: () => {
    const divHeader = document.createElement('div');
    const contentDefault = `     
       <header class="header">BURGER QUEEN</header>     
      <div class"container-fluid">
       <div class= "row">
        <div class="col-8">
          <div class="menu">
            <button type="button" class="button">DESAYUNO</button>
            <button type="button" class="button">RESTO DEL DÍA</button>
          </div>
          <div class="menu">
            <button type="button" class="button buttonOptions" id="btn-bebidas-desayuno">BEBIDAS</button>
            <button type="button" class="button buttonOptions" id="btn-sandwich">SANDWICH</button>
          </div>
          <div class="menu">
            <button type="button"  class="button buttonOptions" id="btn-hamburguesas">HAMBURGUESAS</button>
            <button type="button"  class="button buttonOptions" id="btn-bebidas-resto-del-dia">BEBIDAS</button>
            <button type="button"  class="button buttonOptions" id="btn-acompañamiento">ACOMPAÑAMIENTO</button>
          </div>
          <ul id="listProductos"></ul>
        </div>     
      
        <div class="col-4">
          <label for="input-name" class="title">Cliente:</label>
          <input type="text" id="input-name" placeholder="Ingresa nombre" class="input"/>
          <p class="title">RESUMEN</p>
          <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cant.</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>        
            <tr>              
            </tr>
          <tfoot>
            <tr>
              <th colspan="3">Total</th>            
              <th>0</th>
            </tr>
          </tfoot>
          </tbody>
          </table>       
      </div>        
   `;
     divHeader.setAttribute('id', 'divHeader');
     // como se está usando innerHTML con un elemento del DOM, lo que le asigne se convertirá en un elemento DOM.
     divHeader.innerHTML = contentDefault;     
     
     const btnbedidas = divHeader.querySelector('#btn-bebidas-desayuno')
     btnbedidas.addEventListener('click', () =>{
      getBebidasDesayuno((productos) => {       
        productos.forEach(element => {
          listProductos.appendChild(products(element))
        });
      })      
     })
     return divHeader;
   }   
};

