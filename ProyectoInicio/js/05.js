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

        Son funcioones con la sintaxis de método

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
                
    
















*/