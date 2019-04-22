export const addOrder = (objOrder) => {
  
  const trElement = document.createElement('tr');
  trElement.innerHTML=`
    <td>${objOrder.nombre}</td>
    <td>${objOrder.precio}</td>
    <td>${objOrder.cantidad}</td>
    <td>${objOrder.importe}</td>   
  `;
  return trElement;
}