

function valorarea (base,altura){
    
    var areatriangulo = ((base*altura) / 2);

    return areatriangulo;
  
}

function convertidor(dolar){
  var euro = 1.20;
  var resultado = (euro*dolar);
  return resultado;

}
  

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 !== 0){
    return true;
  }else {
    return false;
  
}
}
  

function vocales(letra){
  
  if (letra.length > 1) {
    return "Dato incorrecto"
  }
  if (letra === "a"||letra === "e"||letra === "i"||letra === "o"||letra === "u"||letra === "A"||letra === "E"||letra === "I"||letra === "O"||letra === "U") {
    return "Es vocal"
  } else {
    return "Dato incorrecto"
  }


}

function obtenerMayor(x, y) {
  if(x > y){
    return (x); 
  }else if(y > x){
    return (y);
  }else 
  return (x || y);
}
  

function mayoriaDeEdad(edad) {


  if(edad >= 18){
    return "Allowed";
  }else{
    return  "Not allowed";
  }
}


function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.



  switch(status){
    case 1:
      return "Online";
    case 2:
      return "Away"
    default:
      return "Offline";
  
    }
 

    if(status === 1){
      return "Online";
    }else if (status === 2){
      return "Away"
    }else {
      return "Offline";
    }

}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:


switch(idioma){
  case 'aleman':
   return "Guten Tag!";

   

  case 'mandarin':
    return "Ni Hao!";

  
  case 'ingles':
    return "Hello!";

    

  default:
    return "hola!";

   
}

}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  if(numero === 10 || numero === 5){
    return true;

  }else{
    return false;
  }

  

}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  if(numero < 50 && numero > 20){
    return true;

  }else {
    return false;
  }



}



function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  if(numero === Math.floor(numero)){
    return true;

  }else{
    return false;
  }

}


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  if (numero % 5  === 0 && numero % 3  === 0 ) {
      return "fizzbuzz";

  }else if(numero % 3 === 0 ){

    return "fizz";
  }else if(numero % 5  === 0 ){

    return "buzz";

  }else {
    return numero;
    }

}


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

    if(num1 > num2 && num1 > num3 && num1 > 0){

      return "Número 1 es mayor y positivo";

    }else if(num1 < 0 || num2 < 0 || num3 < 0){

      return "Hay negativos";

    }else if(num3 > num1 && num3 > num2){
      num3++;
      return num3 ;
      

    }else if(num1 === 0 || num2 === 0 || num3 === 0){

      return "Error";
    }else{
      return false;
    }

}


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if(numero === 0 || numero === 1){
    return false;
  }

  
    if(numero % 2 === 0){
      return false;
    }else {
      return true;
    }


  
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor > 1){
    return true;
  }else if(valor < 1){
    return false;
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  

  var numero6 =6;
  var multiplimax =10;
 for (let i = 1; i <= multiplimax; i++){
      
      var resultado = numero6*i;
      console.log(resultado) ;
     
    }
     

}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí


  if(numero > 99 ){
    return true;
  }else 
  return false;


  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

 
  var i = 0
  do{
    i=i+1
    numero =numero+5


  }while(i<8)




} 

function crecimiento(numero,numero2){
 
  for(let i = 1; i <= numero2; i++){


    resultado = numero*i;
    console.log(resultado);

  }

}

function devolverPrimerElemento() {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  
  var listacosas = [1,2,3,4,5]
  return[listacosas[listacosas.length -1]]


}

function obtenerLargoDelArray() {
  // Devuelve el largo de un array
  // Tu código:

  var listacosas = [1,2,3,4,5,6,7,8,9,10];

  return [listacosas.length];


}
 

function incrementarPorUno() {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

    var numeros = [1,2,3,4,5]


    for(let i= 0; i < numeros.length;i++ ){
      

      resulado = (  '{'+  (numeros[i]+1)+'}'    );
    
      console.log(resulado);


    }

    

}



function agregarItemAlFinalDelArray(elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:


  var numeros = [1,2,3,4,5]
      numeros.push(elemento);

      return numeros;
    
    





}



function ComienzoDelArray(elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

var numeros = [1,2,3,4,5]
  numeros.unshift(elemento);

  return (numeros);








}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

 

    var palabras = ['Hello','world!',]

    var combinacion = (palabras);
  
    
  
      return combinacion;
    
  

}




function arrayContiene(elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:


        var numeros = [1,2,'a'];
        
        if(numeros.includes(elemento)){
          
          return true;
        }else 
           return false;
       
          
}



function agregarNumeros() {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var numeros = [1,2,3,4,5];
  var sumados = 0;

    for(var i = 0; i < numeros.length;i++ ){

      sumados += numeros[i];

      

    }

    console.log(sumados);
  }

  
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
      

      var listadotest = [1,2,3,4]

      var suma = 0


      for(var i = 0; i < listadotest.length;i++ ){
          
        suma += (listadotest[i]/2)
        
        

      }
      console.log(suma);
}


function numeroMasGrande() {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var lista = [20,2,3,4,5,15]

  var numeromayor = 0;

  for(var i = 0; i < lista.length; i++ ){
  
      if(numeromayor < lista[i]){

            numeromayor = lista[i];
        
      }

      // opcion 2 corta return Math.max.apply(null,numeros)
      
     
}

console.log(numeromayor)
}

function cuentoElementos(){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí


    var lista = []
    var maximolista = 0
    
    for(var i = 0; i < 20; i++ ){

      if(lista.length[i] < maximolista)
        i++;
       
        console.log(i)


  }
  console.log("el maximo de elementos es: "+i)



}



   
    
  
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
function diasemana(dia){



  switch (dia) {
    case 2:
      console.log("es dia laboral")
      break;
    case 1:
      console.log("es fin de semana")
     break;
     case 3:
      console.log("es dia laboral")
      break;
      case 4:
      console.log("es dia laboral")
      break;
      case 5:
      console.log("es dia laboral")
      break;
      case 6:
      console.log("es dia laboral")
      break;
      case 7:
      console.log("es fin de semana")
      break;
    default:
      console.log("no es nungun dia")
      break;
  }

}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí


    numero = n.toString();

  if (numero.startsWith("9")){
    return true
  }
  return false
}
  





function todosIguales() {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var numeros = ["1","2"];




  if(numeros.every( numero => numeros[0] == numero)){
    return true;
  }else {
    return false;
  }
  
         //retorna false
 
} 

function mesesDelAño() {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código: 

  var todosmeses = ['enero','marzo','noviembre']
  var nuevosmeses = [];

      if(todosmeses.includes('enero') && todosmeses.includes('marzo') && todosmeses.includes('noviembre')){
        console.log("si estan los meses")
      }
      var filtrado = todosmeses.filter(mes => mes = nuevosmeses)

  
        console.table(filtrado);
            
      
     
}


function mayorACien() {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

    var valores = [1,2,200,100,243,300,123,];

    var mayoresa100 = valores.filter(valor => valor > 100);

    console.table(mayoresa100);




}



function breakstatement() {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var numero = 2;

    for(i = 0; i < 10; i++){

      numero = numero+2
      if(i = numero){
        console.log("Se interrumpió la ejecución el valor de i: "+i+" y el valor de el numero sumado 2 es: "+numero)
        break;
      }
     
    }
    console.table(numero)
}


function continueStatement() {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var numero = 0;

  for(i = 0; i < 10; i++){

    numero = numero+2
    if(i === 5){
      continue;
    }
    console.table(numero);
    
  }

  
}




function gato() {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  
  var edadreal = 29;
  var nombrereal = "juan";

  const nombre = {
   
      edad: edadreal,

      nombre: nombrereal,

      meow: function(){
        return "meow!"
      }

  };


    
      console.table(nombre);       
       console.table(nombre.meow());       
}


function agregarPropiedad() {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:


    
    
   var listado = ["1","3"]

    const objeto = 
    {
      listado: null
    }
      console.log(objeto);


      console.log (objeto[listado]=null);

}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto.metodo();
  
}

function multiplicarNumeroDesconocidoPorCinco() {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  

  const objetoMisterioso = {

    numeroMisterioso: 10

  }

   

    console.log(objetoMisterioso.numeroMisterioso*5)

}