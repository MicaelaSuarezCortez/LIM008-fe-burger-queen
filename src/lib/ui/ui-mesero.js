import{products} from '../ui/ui-mesero-products.js';
import{getBreakfastDrinks} from '../controller/controller-getBebidas.js';

export const viewMesero = {
   mesero: () => {
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
            <button type="button" class="button buttonOptions" id="btn-breakfast-drinks">BEBIDAS</button>
            <button type="button" class="button buttonOptions" id="btn-sandwich">SANDWICH</button>
          </div>
          <div class="menu">
            <button type="button"  class="button buttonOptions" id="btn-burgers">HAMBURGUESAS</button>
            <button type="button"  class="button buttonOptions" id="btn-drinks-rest-of-the-day">BEBIDAS</button>
            <button type="button"  class="button buttonOptions" id="btn-accompaniment">ACOMPAÑAMIENTO</button>
          </div>
          <section id="sectionProducts"></section>
        </div>     
      
        <div class="col-4">
          <label for="input-name" class="title">Cliente:</label>
          <input type="text" id="input-name" placeholder="Ingresa nombre" class="input"/>
          <p class="title">RESUMEN</p>
          <table class="table" id="summary-order">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cant.</th>
              <th scope="col">Imp.</th>
            </tr>
          </thead>
          <tbody>        
            
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
    const divHeader = document.createElement('div');
     divHeader.setAttribute('id', 'divHeader');
     // como se está usando innerHTML con un elemento del DOM, lo que le asigne se convertirá en un elemento DOM.
     divHeader.innerHTML = contentDefault;     
     
     const btndrinks = divHeader.querySelector('#btn-breakfast-drinks')
     btndrinks.addEventListener('click', () =>{
      getBreakfastDrinks((breakfastDrinksData) => {       
        breakfastDrinksData.forEach(drinks => {
          sectionProducts.appendChild(products(drinks))
        });
      })      
     })
     return divHeader;
   }   
};

