/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
  let menor=arr[0];//asigno el primer valor del arreglo como valor inicial
  let mayor=arr[0];//asigno el primer valor del arreglo como valor inicial
 //OPCION 1
  arr.forEach(function(elemento) { //Para cada elemento del arreglo
    
    if(elemento < menor) //comparo el elemento del arreglo en el que estoy con el valor de menor
    {
      menor = elemento; //si fue menor que menor lo reemplazo
    }
    if(elemento > mayor){ //tambien comparo si es mayor que mayor
      mayor = elemento;// si es mayor lo reemplazo
    }
  })
/* OPCION 2   
  for(let i=0; i<arr.length;i++)//recorro el arreglo hasta que no haya mas elementos
  {
    if(arr[i] < menor) //comparo el elemento del arreglo en el que estoy con el valor de menor
    {
      menor = arr[i]; //si fue menor que menor lo reemplazo
    }
    if(arr[i] > mayor){ //tambien comparo si es mayor que mayor
      mayor = arr[i];// si es mayor lo reemplazo
    }
  }
*/
  return mayor - menor; // devuelvo la resta de ambos
};
mayorMenosMenor([20, 31, 11, 15, 32]);
// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor