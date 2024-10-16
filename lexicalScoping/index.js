// Lexical scoping (o alcance léxico) es un concepto fundamental en JavaScript que define cómo se determina el alcance de las variables en una función en base a la ubicación donde se declaró la función, en lugar de donde se invocó. Esto significa que las funciones en JavaScript recuerdan el entorno en el que fueron creadas, lo que les permite acceder a las variables y funciones definidas en ese contexto.

// ¿Cómo Funciona el Alcance Léxico?
// Cuando defines una función dentro de otra función, la función interna tiene acceso a las variables de la función externa. Este acceso se basa en el alcance léxico. Aquí hay un desglose de cómo se implementa y utiliza:

// Cadena de Alcance: Cada función tiene su propia cadena de alcance que se crea cuando se define la función. Esta cadena contiene referencias a las variables en su propio alcance y a las variables en los ámbitos exteriores.

// Contexto de Ejecución: Cuando se invoca una función, se crea un contexto de ejecución, que incluye un ámbito de variables local y referencias a los ámbitos exteriores.

// Cierre (Closure): Las funciones internas que acceden a variables de sus funciones externas forman un cierre, que es una función que "recuerda" su entorno de ejecución incluso después de que la función externa ha terminado de ejecutarse.

// Ejemplo de Lexical Scoping
// Aquí tienes un ejemplo para ilustrar el concepto de alcance léxico:

function outerFunction() {
    let outerVariable = 'I am from the outer scope!';

    function innerFunction() {
        console.log(outerVariable); // Accede a la variable de outerFunction
    }

    return innerFunction;
}

const inner = outerFunction(); // outerFunction se ejecuta y devuelve innerFunction
inner(); // 'I am from the outer scope!'

// En este ejemplo:

// outerFunction define una variable outerVariable.
// innerFunction está definida dentro de outerFunction y tiene acceso a outerVariable.
// Cuando outerFunction se ejecuta, devuelve innerFunction, que sigue teniendo acceso a outerVariable debido al alcance léxico.
// ¿Qué se Debe Hacer para Implementar Lexical Scoping?
// Para poner en práctica el alcance léxico en JavaScript, considera lo siguiente:

// Definir Funciones Dentro de Otras: Al crear funciones dentro de otras funciones, asegúrate de que las funciones internas hagan uso de las variables del contexto externo.

// Entender los Cierres: Conoce cómo funcionan los cierres en JavaScript, ya que son una consecuencia del alcance léxico. Esto te permitirá utilizar funciones que recuerden su contexto incluso después de que la función externa ha terminado de ejecutarse.

// Utilizar Closures para Privacidad: Puedes usar cierres para crear variables privadas que no sean accesibles desde fuera de la función, lo que permite encapsular la lógica y mantener el estado.

// Ejemplo de Cierre (Closure)
// Aquí tienes un ejemplo de cómo usar cierres para crear una variable privada:

function createCounter() {
    let count = 0; // Variable privada

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1

// En este ejemplo, count es una variable privada que solo se puede modificar a través de las funciones increment, decrement, y getCount, demostrando cómo el alcance léxico y los cierres pueden ser utilizados para controlar el acceso a las variables.

// Conclusión

// El alcance léxico en JavaScript es un principio esencial que permite a las funciones acceder a variables en sus contextos de declaración. Comprender cómo funciona y cómo implementarlo a través de cierres es fundamental para escribir código eficiente y mantener la encapsulación en JavaScript.
