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

    // 











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
    
















*/