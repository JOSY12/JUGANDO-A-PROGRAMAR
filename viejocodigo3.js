  function eliminarPropiedad(){
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:



    const objeto = 
    {

      unaPropiedad: "nombre"
    
    
    } 
    console.log(objeto.unaPropiedad);
      objeto.unaPropiedad = null
    
      console.log(objeto.unaPropiedad = null);
  
     

          

  
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

  var listaemails = ["1992@gmail.com",'1395jf']

    const objeto = {

      nombre: 'josmer',
      email: listaemails,
      password: 123


    }

    console.log(objeto);


}

function tieneEmail() {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:


  const usuario = {

        email: "sssssssss"
  }

  if(usuario.email){
    console.log("hay contenido aqui")
    return true
   
  }else{
    console.log("no hay contenido aqui")
    return false;
  }


}



function tpro() {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  var objeto = 
  {

    propiedad: 'propiedad'

  }
  
    if(objeto.propiedad == "propiedad" && objeto.propiedad){
      console.log("la propiedad si existe y si tiene la palabra propiedad")
      return true;
  
    }else{
      console.log("la propiedad no existe o no tiene la palabra")
      return false;
  
    }


  }




//no entendi




function verificarPassword() {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  
      var passwordexterna = 'pass'
    
      
    var usuario = {

        password:'pass'

    }
    if(passwordexterna == usuario.password){
      console.log("si hay contrase;a igual aqui")
      return true;
    }else{
      console.log("no hay contrase;a igual aqui")
      return false;
    }
    
    

  


}




function actualizarPassword() {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  var nuevapass = "contra"
  
  var usuario = {

    password:'pass'

    }
    //antes del cambio
    console.log(usuario)
    usuario.password =nuevapass;
      //despues del cambio
    console.log(usuario)



}

function agregarAmigo() {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:


var usuario = {

    amigos: ['juan','carlo']

    }
    console.log(usuario);
    usuario.amigos.push('nuevoamigo')

    console.log(usuario);


}

function pasarUsuarioAPremium() {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
 
  const usuarios = 
  [
    { 

    
      usuario: "esPremium"
    },
    {

      usuario: "esPremium"
    }
  
  ]
  console.log(usuarios)

  //adecuado para cambio de info .map
  //var resultado = usuarios.map( x => x.usuario = false);
  
  var resultado = usuarios.map( x => x.usuario = false);

  console.log(usuarios)



    console.log(resultado)


  
    

}
    


  function sumarLikesDeUsuario() {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:

    var posts = 
    [
      
      {
       
        post: 10
          
      },
      {
        post: 40
       
      },
      {
        post: 50
      } 
    
    ] 
    //var sumados1 = posts.reduce((asd ,item) => {return Math.max(asd, item)});

    //var sumados2 = posts.reduce((das ,asd) => {return das += asd.masnumero},0);
    var sumados3 = posts.reduce((acc,objeto) => acc + objeto.post,0);
     
    var resultado = posts.map(x => x.post);

    var resultado2 = posts.filter(x => x.post)

    var resultado3 = posts.find(x => x.post = 50)
    //posts.find
     
      console.log(sumados3)
    }

     

  
 
  
  function metodocalculo() {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
      
      var producto = 
      {
        precio: 20,
        porcentajeDeDescuento: 0.2,
        
        
      
        calcularPrecioDescuento: function()
        {
           
          var descuento = this.precio-(this.precio*this.porcentajeDeDescuento)
          
        
            console.log(descuento)

              
        }

      }
        
      producto.calcularPrecioDescuento()
  }

    
     
  
  







































console.clear();



