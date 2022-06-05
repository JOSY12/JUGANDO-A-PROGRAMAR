/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:
  let resultado =[];
  
 //OPCION 1 
/*  for(let i=0;i<arreglo.length;i++){
    if(arreglo[i]!==num)
    {
      resultado.push(arreglo[i]);
    }
  }
*/

//OPCION 2
  arreglo.forEach(function(numero) {
    if(numero!==num)
    {
      resultado.push(numero);
    }
  });
  return resultado;
};

// No modifiques nada debajo de esta linea //

module.exports = buscaDestruye