export const addOrder = (objOrder) => {
  // const divProduct =document.querySelector(`#id-${product.id}`);
  // const arrayPedido = [];
  
  //   divProduct.forEach(element => {
  //     arrayPedido.push(element)
  //   });
  //   return arrayPedido   

  const trElement = document.createElement('tr');
  trElement.innerHTML=`
    <td>${objOrder.nombre}</td>
    <td>${objOrder.precio}</td>
    <td>${objOrder.cantidad}</td>
    <td>${objOrder.precio}</td>  
    <td><button type="button" class="buttonDelete rounded-circle"><i class="fa fa-trash"></i></button></td> 
  `;
  return trElement;
}

//  export const addOrder = () => {
//    const newArrayPedido = [];
//    let ancestro = contentProducts.getElementById(`id-${product.id}`);
//    let descendiente = ancestro.childNodes;
//    for(let i = 0; i<descendiente.length; i++){
//       newArrayPedido.push({descendiente[i])
//       newArrayPedido.push({
          // id:descendiente[0],
          // nombre: descendiente[1],
          // precio: descendiente[2],
          // cantidad: descendiente[3],
          // importe: descendiente[4]
// })
//    }
//    const trElement = document.createElement('tr');
//    trElement.innerHTML=`
//      <td>newArrayPedido[0]</td>
//      <td>newArrayPedido[1]</td>
//      <td>newArrayPedido[2]</td>
//      <td>newArrayPedido[3]</td>  
//      <td><button type="button" class="buttonDelete rounded-circle"><i class="fa fa-trash"></i></button></td>`
//   return trElement;
//  }
  