/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ingredienteEnMalEstado(menu, comida, ingrediente) {
  // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
  // ya que deben estar contaminados también.
  // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
  // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
  // diferencia.
  // Ej:
  /* let menuDelDia = {
      raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
      bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
      tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
  } */
  // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
  // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
  // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
  // NOTA: No utilizar el método "includes".
  //
  // Tu código:
  let anterior="";
  let posterior="";
  bandera =0;
  /* OPCION 1 para ejecutar
  for(let i=0;i<menu[comida].length;i++){
      if(menu[comida][i+1]==ingrediente)
      {
          bandera=1;
          anterior = menu[comida][i];
          if(menu[comida][i+2])
          {
              posterior = menu[comida][i+2];
          }
          break;
      }
  }
  if(bandera)
  {
      if(posterior =="")
      {
          return [anterior,ingrediente];

      }
      else
      {
          return [anterior,ingrediente,posterior];
      }
  }
  else{
      return "El menú está perfecto";
  }
  
  OPCION 2*/
  indice=menu[comida].indexOf(ingrediente);
    
  switch(indice)  {
    case(-1):return "El menú está perfecto";
          break;
    case(0):posterior = menu[comida][indice+1];
            return [ingrediente,posterior];
          break;
    case(menu[comida].length-1): anterior = menu[comida][indice-1];
            return [anterior,ingrediente];
          break;
    default:anterior = menu[comida][indice-1];
            posterior = menu[comida][indice+1];
            return [anterior,ingrediente,posterior];
  }

};

// No modifiques nada debajo de esta linea //

module.exports = ingredienteEnMalEstado