//Callback is a function passed as an argument to another function, an it will run after the completion of other operation.
// It allows a asynchronous behavior and and controllable 
// theCallbacks are fundamental in JS, specially when involves operations that takes time like:
// HTTP requests
// timers
// DOM events


function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
  }
  
  function procesarEntradaUsuario(callback) {
    const nombre = "Diego";
      setTimeout(() => {
          callback(nombre); // callback summon or call
      }, 2000);
  }
  
  procesarEntradaUsuario(saludo); // Output: Hola, Diego
  

//   Callback en solicitudes HTTP:
// Un caso común de uso de callbacks es manejar el resultado de una solicitud HTTP. 
// Por ejemplo, con XMLHttpRequest (antes de fetch y async/await):

function makeRequest(url, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
  
    request.onload = function() {
      if (request.status === 200) {
        callback(null, request.responseText);
      } else {
        callback(`Error: ${request.status}`);
      }
    };
  
    request.send();
  }
  
  // Uso del callback
  makeRequest('https://api.example.com/data', function(error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log('Datos recibidos:', data);
    }
  });

//   Ventajas del uso de callbacks:
// Flexibilidad: Permite que las funciones se vuelvan más reutilizables, 
// ya que el comportamiento específico puede diferirse a la función callback.
// Manejo de tareas asíncronas: Permiten que el código siga ejecutándose mientras se espera una respuesta o una operación lenta, como una solicitud de red.


// Desventajas:
// Callback Hell: Si se anidan muchos callbacks, el código puede volverse difícil de leer y mantener. Esto es conocido como "callback hell". Se ve así:

hacerAlgo(function(result1) {
    hacerOtraCosa(result1, function(result2) {
      hacerMas(result2, function(result3) {
        continuar(result3, function(result4) {
          //...
        });
      });
    });
  });
  

//   Soluciones a "Callback Hell":
//   Promises: A partir de ES6, las promesas proporcionan una forma más limpia de manejar código asíncrono, reemplazando en muchos casos los callbacks anidados.

//   async/await: Introducido en ES2017, facilita aún más la escritura de código asíncrono que parece sincrónico.

//   En resumen, los callbacks son una herramienta poderosa en JavaScript para controlar el flujo de ejecución, especialmente en tareas asíncronas. Sin embargo, con la evolución del lenguaje, han surgido mecanismos más modernos como promesas y async/await para evitar algunos de los problemas asociados con el uso intensivo de callbacks.