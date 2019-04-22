// import{valueAmountPerProduct} from '../view-controller/vc-amount-per-product.js';
// import{valueAmount} from '../controller/controller-amount-per-product.js'
import {addOrder} from '../ui/ui-addOrder.js';

export const products = (product) => {
  const tmp = `    
      <span id='span-name-${product.id}'>${product.nombre}</span>
      <span id='span-price-${product.id}'>Precio: $ ${product.precio}</span>     
      <span>Cantidad:</span>
      <input type="text" value="1" id='txt-quantity'></input>
      <span>Importe:</span>
      <span id="span-amount-${product.precio}">$ 0</span>
      <button type="button" id='btn-add-${product.id}'>+</button> 
      <button type="button" id='btn-substract-${product.id}'>-</button> 
      <button type="button" id='btn-add-order-${product.id}'>Agregar</button>    
  `;
  const contentProducts = document.createElement('div');
  contentProducts.setAttribute('id', `id-${product.id}`)
  contentProducts.innerHTML = tmp;   
   
  let spanAmount = contentProducts.querySelector(`#span-amount-${product.precio}`);
  const btnAddQuantity = contentProducts.querySelector(`#btn-add-${product.id}`);
  const btnSubstractQuantity = contentProducts.querySelector(`#btn-substract-${product.id}`);

  btnAddQuantity.addEventListener('click', () => {    
    let txtQuantity = contentProducts.querySelector("#txt-quantity");
 
    if (txtQuantity.value >= 1) {
      let valueQuantity = ++txtQuantity.value;
      let amount = valueQuantity * `${product.precio}`;
      spanAmount.innerHTML = amount
     return amount;
    }
  })

  btnSubstractQuantity.addEventListener('click', () => {
    let txtQuantity = contentProducts.querySelector("#txt-quantity");

    if (txtQuantity.value >= 2) {
      let valueQuantity = --txtQuantity.value;
      let amount = valueQuantity * `${product.precio}`
      spanAmount.innerHTML = amount
      return amount;
    } else {
      let valueQuantity = txtQuantity.value;
      let amount = valueQuantity * `${product.precio}`
      spanAmount.innerHTML = amount;
      return amount;
    }

  });
  //Agregando

  const btnAddOrder = contentProducts.querySelector(`#btn-add-order-${product.id}`)
  btnAddOrder.addEventListener('click', () => {
    const table=divHeader.querySelector('#summary-order')
    
      table.appendChild(addOrder(product))
   
  })

  return contentProducts;
}


