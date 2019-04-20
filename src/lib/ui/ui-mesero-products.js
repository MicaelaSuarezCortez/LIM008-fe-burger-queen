export const products = (product) => {
  const tmp = `
    <div>
      <span id='span-${product.id}'>${product.name}</span>
      <span id='span-${product.id}'>${product.precio}</span>
      <span>Cantidad</span>
      <input type="text" id="txt-cantidad"></input>
      <button type="button" id='btn-more'>+</button>
      <button type="button" id='btn-less'>-</button>
      <button type="button" id='${product.id}'>Agregar</button>
    </div>  
  `;
  let contentProducts = document.createElement('div');
  contentProducts.setAttribute('id', `id-${product.id}`)
  contentProducts.innerHTML = tmp;

  return contentProducts;
}