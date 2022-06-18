/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseAlumno() {
  class Alumno {
      constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
          // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
          // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
          // Inicializar las propiedades del alumno con los valores recibidos como argumento.
          //
          // Tu código:
          this.nombre = nombre;
          this.apellido = apellido;
          this.cohorte = cohorte;
          this.grupoDeAmigos = grupoDeAmigos;
          this.notasCheckpoints = notasCheckpoints;
          
      };

     
          // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
          // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
          // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
          // en el array de grupoDeAmigos.
          // No debe retornar nada.
          //
          // Tu código:
      
    }
};

// No modifiques nada debajo de esta linea //

module.exports = crearClaseAlumno