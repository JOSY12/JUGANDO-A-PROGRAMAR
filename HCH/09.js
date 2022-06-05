/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// EN ESTE EJERCICIO PASAN 3 EXPECT SON LOS QUE INDICAN QUE NO UTILIZAS LOS METODOS (values, keys, entries)
estudiantes = [
  { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
  { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
  { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
  { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
];

personas=[{
    nombre: 'Toni',
    apellido: 'Tralice',
    invitado: true
    }];
function intercambio(objeto) {
  // Devolver un objeto con los pares clave-valor intercambiados.
  // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
  // NOTA: No utilizar métodos de Object (values, keys, entries);
  //
  // Tu código:

//OPCION 1

  let objeto2={};
  for(clave in objeto){
    objeto2[objeto[clave]] =clave;
  }
 
/*
OPCION 2
  for(clave in objeto){
    objeto[objeto[clave]] =clave;
    delete objeto[clave];
  }
  return objeto;
  */

  console.log(objeto2);  
};

// No modifiques nada debajo de esta linea //

module.exports = intercambio