"use strict";                                                   // Correr JS en modo estricto


/* FUNCIONES */

    /* DECLARACIÓN DE LA FUNCIÓN */

    function sumar(n1, n2){                                     // No aparece nada porque no hemos llamado a la función
        console.log(n1+n2)                                      // Operación de la función
    };

    sumar(10, 20);                                              // Llamamos a la función


    /* EJERCICIO */

    // Crear una función que se llame doblar con argumentos de entrada un número
    // Mostrar por pantalla ese número * 2

    function doblar(numero){
        console.log(numero * 2)
    };

    doblar(2);


    /* EXPRESIÓN DE LA FUNCIÓN */

    const sumar2 = function(n3, n4){
        console.log(n3+n4)
    };

    sumar2(50,200);


    /* IIFE */

    (function(){
        console.log("Esto es una función")
    })();                                                       // () Llaman a la función


    /* DIFERENCIAS ENTRE MÉTODOS Y FUNCIONES */

    const numero1 = 20,
          numero2 = "20";

    console.log(parseInt(numero2));                             // Función que me cambia un string a nº

    console.log(numero1.toString());                            // Método que cambia un nº a string 


    /* EJERCICIO */

    // Crear una función que cuente los caracteres de un tweet e indicar si es muy largo o no

    function cuentaTweet(tweet){
        console.log("La longitud del tweet es:", tweet.length)
    };
    
    cuentaTweet("Hola qué tal estás, yo estoy genial, sin poder respirar");


    /* EJERCICIO */

    // Crear una función que al darle una cadena de texto y una palabra, me busque la palabra en el texto

    function buscar(texto, palabra){
        console.log("¿Está la palabra 'Hola' dentro del texto?", texto.includes(palabra))
    };

    buscar("Hola qué tal estás?", "Hola");
    buscar("Pablito clavo un clavito", "Hola");


    /* EJERCICIO */

    // Crear una función a la que le vamos a pasar un array y un valor, tiene que añadir el valor al final del array

    function anadir(arreglo, valor){
        console.log("Añadimos el valor al final del array:", arreglo.push(valor));
        console.log(arreglo);
    };

    anadir([1, 2, 3, 4, 5, 6, 7], 8);


    /* EJERCICIO */

    // Crear una función que solucines las ecuaciones de segundo grado

    function ecuacionSegundo(A, B, C){
        console.log("Resultado ecuaciones segundo grado +:", ((-B + Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A)))

        console.log("Resultado ecuaciones segundo grado -:", ((-B - Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A)))
    };

    ecuacionSegundo(2, 10, 1);                                      // Cuidado con los números

   
    function ecuacionSegundo(A=0, B=0, C=0){                        // Inicializamos a los argumentos con un valor
        console.log("Resultado ecuaciones segundo grado +:", ((-B + Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A)))

        console.log("Resultado ecuaciones segundo grado -:", ((-B - Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A)))
    };
   
    ecuacionSegundo(2,10)                                           // No le damos un valor al último pero ya está
                                                                    // inicializado a 0 arriba

    
    /* RETURN */

    function multiplicar(n1, n2){
        return n1 * n2;                                             // Me retorna un valor
    };

    let valorRetornado = multiplicar(2,5);                          // La llamo y la meto en una variable
    console.log("EL VALOR RETORNADO ES:", valorRetornado);


    /* EJERCICIO */

    // Crear la función dividir

    function dividir(n3,n4){
        return n3 / n4;
    };

    let valorDividido = dividir(9,3);
    console.log("VALOR DIVIDIDO:", valorDividido);


    /* FUNCIÓN MÁS COMPLEJA */

    let total = 0;

    function agregarCarrito(precio){
        return total += precio;                                     // Me actualiza la variable y me suma el precio
    }                                                               // += me suma una cantidad determinada

    agregarCarrito(100);
    agregarCarrito(50);
    agregarCarrito(70);

    console.log("EL TOTAL A PAGAR ES DE:", total);

    // Quitarle impuestos

    let impuestos = 0;

    function totalImpuestos(precio, iva){
        return impuestos += precio*iva/100;
    };

    totalImpuestos(200, 10);
    totalImpuestos(300, 21);
    totalImpuestos(500, 5);

    console.log("EL TOTAL IMPUESTOS ES DE:", impuestos);


    /* METODOS DE PROPIEDAD */

    // Crear un reproductor musical

    const reproductor = {
        reproducir : function(id){
            console.log(`Reproduciendo Cancion con ID: ${id}`)
        },

        pausar : function(){
            console.log(`Pausando Cancion`)
        },

        crearPlaylist : function(nombre){
            console.log(`Creando Playlist: ${nombre}`)
        }
    };

    reproductor.reproducir(3840);
    reproductor.pausar();
    reproductor.crearPlaylist("Metal");


    // Añadimos una propiedad más y le hacemos una función para borrar la canción

    reproductor.borrarCancion =
        function(id2){
            console.log(`Borrando Cancion con ID2: ${id2}`)
    };

    reproductor.borrarCancion(2000);


    /* EJERCICIO */

    // Crear una función que se llame "nombreCompleto" y que reciba 3 argumentos
    
    function nombreCompleto(nombre, apellido1, apellido2) {
        console.log(`Nombre Completo: ${nombre} ${apellido1} ${apellido2}`)
    };

    nombreCompleto("Gabriel", "Murillo", "Peña");


    /* FUNCION DE FLECHA */

    // Partimos de la expresión de la función

    let triplicar = function(numero=1){
        console.log("VALOR DE TRIPLICAR CON EXPRESIÓN DE LA FUNCION:", numero * 3)
    };

    triplicar(13);

    // Hacemos el arrow function
    // Eliminamos function y añadimos una flecha después de los atributos y antes de las {}
    // El paréntesis de los parámetros lo podemos eliminar sólo si tenemos un atributo y está sin inicializar
    // Se pueden eliminar las {} si el cuerpo de la función solo tiene una línea
    // {return(numero * 3)} === (numero * 3) => Si solo hay una linea y esta es return, se obvia

    let triplicar2 = (numero=1) => {
        console.log("VALOR DE TRIPLICAR2 CON EXPRESIÓN DE LA FUNCION:", numero * 3)
    };

    triplicar2(13);

    // Muy simplificado

    let triplicar3 = numero => (numero * 3);

    let resultadoTriplicar3 = triplicar3(13);

    console.log("Resultado triplicado", resultadoTriplicar3);


    /* EJERCICIO */

    // Crear una función de flecha que se llame 'aprendiendo'
    // Recibe un argumento de entrada sin inicializar
    // Me tiene que devolver el valor +7
    // Almacenarlo en una variable 'resultadoAprendiendo'

    let aprendiendo = numero => numero + 7;

    let resultadoAprendiendo = aprendiendo(10);

    console.log("El resultado de 'aprendiendo' es:", resultadoAprendiendo);


    /* EJERCICIO */

    // Crear una función de flecha que se llame 'matricula'
    // Me muestra directamente por pantalla la matricula


    let matricula = valor => console.log("Tu matricula es:", valor);

    matricula("1234-ZZZ");


    /* METODO SOME */

    // Crear un array que se llame "carrito"
    // Dentro del array introducimos 4 objetos con propiedades "nombre" y "precio"

    const carrito = [
        {
            nombre : "TV",
            precio : 750,
        },

        {
            nombre : "Tablet",
            precio : 350,
        },

        {
            nombre : "Movil",
            precio : 550,
        },

        {   nombre : "PC",
            precio : 1750,
        },
    ];


    let resultado = 0;

    resultado = carrito.some(function(producto) {                               // 'producto' es un atributo
        return producto.nombre === "Tablet"                                     // = asignar valores
    })                                                                          // == iguala sin tener en cuenta el tipo de dato
                                                                                // === iguala teniendo en cuenta el tipo de dato
    console.log("RESULTADO DEL METODO SOME:", resultado);
    
    // Hacerlo con función de flecha
    
    resultado = carrito.some(producto => producto.nombre === "PC");
    
    console.log("RESULTADO2 DEL METODO SOME Y FUNCION DE FLECHA:", resultado);


    /* METODO REDUCE */

    resultado = carrito.reduce(function (total, producto){
        return total + producto.precio
    }, 0)                                                                                       // Se inicializa en 0. Es como un acumulador

    console.log("USO DE REDUCE:", resultado);

    // Hacemos arrow function

    resultado = carrito.reduce((total, producto) => total + producto.precio, 0);                                                                                         

    console.log("USO DE REDUCE:", resultado);


    /* METODO FILTER */

    resultado = carrito.filter(function (producto){
        return producto.precio > 400
    });      
    
    console.log("USO DE FILTER", resultado);

    // Hacemos arrow function

    resultado = carrito.filter(producto => producto.precio > 400);

    console.log("USO DE FILTER", resultado);







/* 

FUNCIONES

    Son una serie de procedimientos o instrucciones que se llevan a cabo para realizar una acción

    Son reutilizables

    DECLARACIÓN DE LA FUNCIÓN

        CREAR UNA FUNCIÓN

                function sumar(){
                    console.log(10+10)
                }


                function nombre(argumento {
                    cuerpo de la función
                })


            El argumento puede estar vacío
        
        LLAMAR A LA FUNCIÓN

                sumar();

                nombre(argumento);

            Le damos valores a los argumentos de la función



    EXPRESIÓN DE LA FUNCIÓN

        El nombre de la función va antes que la función

            const sumar2 = function(){
                console.log(3+3)
            };

            sumar2();

        La estamos guardando dentro de una variable. Por ejemplo, para aplicarla luego a otra función


    IIFE

        Síntaxis distinta

        Se llama a sí misma, no hace falta llamarla

            (function(){
                console.log("Esto es una función")
            })();

        El fin es proteger que no se mezclen las variables y funciones con otros archivos


    Javascript se ejecuta en dos vueltas
        
        - Primero lee toda la creación de funciones

        - Segundo lee todas las llamadas

    
    DIFERENCIAS ENTRE MÉTODOS Y FUNCIONES

        Los métodos se identifican con .método

        Las funciones se identifican con nombre de función + ()

    
    RETURN

        Me retorna un valor que podré utilizar más adelante
    
            function multiplicar(n1, n2){
                return n1 * n2;                                             Me retorna un valor
            };

            let valorRetornado = multiplicar(2,5);                          La llamo y la meto en una variable
            console.log("EL VALOR RETORNADO ES:", valorRetornado);

        Almaceno el valor en la variable y esta la podré utilizar tantas veces como quiera

    
    METODOS DE PROPIEDAD

        Son funciones con la sintaxis de método

            const reproductor = {
                reproducir : function(id){
                console.log(`Reproduciendo Cancion con ID: ${id}`)
                },

                pausar : function(){
                console.log(`Pausando Cancion`)
                },

                crearPlaylist : function(nombre){
                console.log(`Creando Playlist: ${nombre}`)
                }
            };

            reproductor.reproducir(3840);
            reproductor.pausar();
            reproductor.crearPlaylist("Metal");
                
    
    FUNCIONES DE FLECHA

        Simplifican mucho la sintaxis

        Partimos de la expresión de la función

            let triplicar = function(numero=1){
                console.log("VALOR DE TRIPLICAR CON EXPRESIÓN DE LA FUNCION", numero)
            };

            triplicar(13);

        Hacemos el arrow function
        
        Eliminamos function y añadimos una flecha después de los atributos y antes de las {}
        
        El paréntesis de los parámetros lo podemos eliminar sólo si tenemos un atributo y está sin inicializar
        
        Se pueden eliminar las {} si el cuerpo de la función solo tiene una línea
        
        {return(numero * 3)} === (numero * 3) => Si solo hay una linea y esta es return, se obvia

            let triplicar2 = (numero=1) => {
                console.log("VALOR DE TRIPLICAR2 CON EXPRESIÓN DE LA FUNCION:", numero * 3)
            };

            triplicar2(13);

        Muy simplificado

            let triplicar3 = numero => (numero * 3);

            let resultadoTriplicar3 = triplicar3(13);

            console.log("Resultado triplicado", resultadoTriplicar3);

    
    INCLUDE PARA ARRAYS PLANOS

        Un array es plano si no tiene subvalores [1, 2, 3, 4, 5, "Patata"];

        Uno que no es plano es un array con objetos dentro, tiene valores y estos tienen subvalores

        
    METODO SOME

        Como el método de includes pero para arrays no planos, es decir, para arrays de objetos
        
        Busca en todo mi array si existe un valor determinado
            
            let resultado = 0;

            resultado = carrito.some(function(producto) {
                return producto.nombre === "Tablet"
            })

        Crear un array que se llame "carrito"
        Dentro del array introducimos 4 objetos con propiedades "nombre" y "precio"

            const carrito = [
                {
                    nombre : "manzana",
                    precio : 1,
                },
                
                {
                    nombre : "coliflor",
                    precio : 5
                },

                {
                    nombre : "chedar",
                    precio : 10,
                },

                {   nombre : "Fanta",
                    precio : 20,
                },
            ];

    
    METODO REDUCES
        
        Itera por todas las propiedades del array

            resultado = carrito.reduce(fuction (total, producto){
                return total + producto.precio
            }, 0)

            console.log("USO DE REDUCE", resultado);
        
        Siempre hay que inicializarlo con el valor del índice donde se inicializa


    METODO FILTER

            resultado = carrito.filter(function (producto){
                return producto.precio > 400
            });      
    
            console.log("USO DE FILTER", resultado);

        // Hacemos arrow function

            resultado = carrito.filter(producto => producto.precio > 400);

            console.log("USO DE FILTER", resultado);
    

    IGUALES

        =       Da valor
        ==      Iguala sin tener en cuenta el tipo de dato
        ===     Iguala teniendo en cuenta el tipo de dato
        














*/