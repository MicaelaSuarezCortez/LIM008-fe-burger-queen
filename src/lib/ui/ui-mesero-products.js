export const products = (product) => {
  const tmp = `
    <div>
      <span id='span-name-${product.id}'>${product.name}</span>
      <span id='span-precio-${product.id}'>${product.precio}</span>
      <span>Cantidad</span>
      <input type="text" value="1" id="txt-cantidad"></input>
      <span>Importe:</span>
      <span id="span-importe">0</span>
      <button type="button" id="btn-more">+</button>
      <button type="button" id="btn-less">-</button>
      <button type="button" id='${product.id}'>Agregar</button>
    </div>  
  `;
  const contentProducts = document.createElement('div');
  contentProducts.setAttribute('id', `id-${product.id}`)
  contentProducts.innerHTML = tmp;

  const btnAddCantidad = contentProducts.querySelector("#btn-more");  
  const btnlessCantidad = contentProducts.querySelector("#btn-less");
  const spanImporte = contentProducts.querySelector("#span-importe");

  btnAddCantidad.addEventListener('click', () => {
    let inputCantidad = contentProducts.querySelector("#txt-cantidad");

    if(inputCantidad.value >= 1){
       const valueInput = ++inputCantidad.value ;
       const importe = spanImporte.innerHTML= valueInput * `${product.precio}`
       return importe;
    }     
  })

  btnlessCantidad.addEventListener('click', () => {
    let inputCantidad = contentProducts.querySelector("#txt-cantidad");

    if(inputCantidad.value >= 2){
      const valueInput = --inputCantidad.value;    
      const importe = spanImporte.innerHTML = valueInput * `${product.precio}` 
      return importe;
    } else{
      const valueInput = inputCantidad.value;    
      const importe = spanImporte.innerHTML = valueInput * `${product.precio}` 
      return importe;  
    }
    
  })
  return contentProducts;
}

//  const importe = ()