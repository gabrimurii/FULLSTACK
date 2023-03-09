"use strict";                                                   // Correr JS en modo estricto


/* ARRAY */

    /* CREAR ARRAYS */    

    const numeros = [10, 20, 30, 40, 50];                       // Creo un array "numeros" con valores

    console.log("MI PRIMER ARRAY:", numeros);                   // Muestra por pantalla

    console.table(numeros);                                     // Me muestra el array en forma de tabla


    // Ejercicio: Crear un array de los meses del año e imprimirlo por pantalla en formato de tabla

    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    console.table(meses);


    /* OTRA FORMA DE CREAR ARRAYS */

    // const dias = newArray("Lunes", "Martes", "Miércoles");   // Menos utilizada


    /* MEZCLAR DATOS */

    const mezclaDatos = [1, true, "Hola", [1,2,3]];             // Se pueden meter todo tipo de datos

    console.table(mezclaDatos);


    /* INDICES */

    console.log("ACCEDEMOS AL INDICE 2 DE MESES:", meses[2]);   // Sale marzo ya que empieza en 0

    console.log("ACCEDEMOS AL INDICE 200 DE MESES:", meses[200]);   // Undefined


    /* LENGTH */

    console.log("TAMAÑO A TRAVÉS DE LENGTH:", meses.length);    // 12






/* 

ARRAYS / ARREGLOS

    Agrupa elementos

    Pueden ser del mismo tipo o estar relacionados
    
    No usan {}, usan []

    Ejemplo: Listado de amigos de Facebook

        let amigos = ["Pepe", "Juan", "Felipe"];


    MEZCLAR DATOS

        Se pueden usar todo tipo de datos dentro de un array, incluso otro array

            const mezclaDatos = [1, true, "Hola", [1,2,3]];


    INDICES

        En los arrays hacemos uso de índices para acceder a los valores del mismo
        
        El índice empieza en 0

            console.log("ACCEDEMOS AL INDICE 2 DE MESES:", meses[2]);

            console.log(array[indice]);


    LENGTH

        Nos da el tamaño del array

            console.log(meses.length);

            console.log(array.length);


*/