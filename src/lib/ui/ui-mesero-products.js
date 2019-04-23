// import{valueAmountPerProduct} from '../view-controller/vc-amount-per-product.js';
// import{valueAmount} from '../controller/controller-amount-per-product.js'
import {addOrder} from '../ui/ui-addOrder.js';

export const products = (product) => {
  const tmp = `    
      <span class="label" id='span-name-${product.id}'>Producto: ${product.nombre}</span><br>
      <span class="label" id='span-price-${product.id}'>Precio: $ ${product.precio}</span>  <br>   
      <span class="label">Cantidad:</span>
      <input type="text" value="1" id='txt-quantity-${product.id}'></input>
      <span class="label">Importe:$ </span>
      <span class="label" id="span-amount-${product.id}"> ${product.precio}</span>
      <button type="button" class ="button buttonQuantity" id='btn-add-${product.id}'>+</button> 
      <button type="button" class ="button buttonQuantity" id='btn-substract-${product.id}'>-</button> 
      <button type="button" class = "button buttonAddOrder"id='btn-add-order-${product.id}'>Agregar</button><hr>    
  `;
  const contentProducts = document.createElement('div');
  contentProducts.setAttribute('id', `id-${product.id}`)
  contentProducts.setAttribute('data-product', JSON.stringify(product))
  console.log(contentProducts)
  contentProducts.innerHTML = tmp;   
   
  let spanAmount = contentProducts.querySelector(`#span-amount-${product.id}`);
  const btnAddQuantity = contentProducts.querySelector(`#btn-add-${product.id}`);
  const btnSubstractQuantity = contentProducts.querySelector(`#btn-substract-${product.id}`);

  btnAddQuantity.addEventListener('click', () => {    
    let txtQuantity = contentProducts.querySelector(`#txt-quantity-${product.id}`);
 
    if (txtQuantity.value >= 1) {
      let valueQuantity = ++txtQuantity.value;
      let amount = valueQuantity * `${product.precio}`;
      spanAmount.innerHTML = amount
      const productContainer = document.getElementById(`id-${product.id}`)
      const data = JSON.parse(productContainer.dataset.product);
      console.log(data)
      data.cantidad = valueQuantity
      contentProducts.setAttribute('data-product', JSON.stringify(data))
     return amount;
    }
  })

  btnSubstractQuantity.addEventListener('click', () => {
    let txtQuantity = contentProducts.querySelector(`#txt-quantity-${product.id}`);

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
    const productContainer = document.getElementById(`id-${product.id}`)
    console.log(JSON.parse(productContainer.dataset.product))
    table.appendChild(addOrder(product))
   
  })

  return contentProducts;
}


