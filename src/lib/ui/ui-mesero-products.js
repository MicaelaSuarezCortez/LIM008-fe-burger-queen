export const products = (product) => {
  const tmp = `
    <div>
      <span id='span-${product.id}'>${product.name}</span>
      <span id='span-${product.id}'>${product.precio}</span>
      <span>Cantidad</span>
      <input type="text" value="1" id="txt-cantidad"></input>
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

  btnAddCantidad.addEventListener('click', () => {
    let inputCantidad = contentProducts.querySelector("#txt-cantidad");

    if(inputCantidad.value >= 1){
      inputCantidad.value++     
    } 
    return inputCantidad;
  })

  btnlessCantidad.addEventListener('click', () => {
    let inputCantidad = contentProducts.querySelector("#txt-cantidad");

    if(inputCantidad.value <= 1){
      inputCantidad.value;     
    } else{
      inputCantidad.value--; 
    }
    return inputCantidad;
  })
  return contentProducts;
}