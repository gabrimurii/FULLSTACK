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


    /* EJERCICIO */

    // Crear un objeto con tres propiedades (string, number, boolean) llamado ejercicio5
    // Añadir una propiedad tipo array con los días de la semana
    // Crear un destructuring con cada una de las propiedades

    let ejercicio5 = {
        palabra : "Hola",
        numero : 10,
        booleria : true,
    }

    console.log("OBJETO CON 3 PROPIEDADES:", ejercicio5);

    
    ejercicio5.diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    console.log("AÑADIMOS UN ARRAY AL OBJETO", ejercicio5);


    let {palabra, numero, booleria, diasSemana} = ejercicio5;

    console.log("HACEMOS UN DESTRUCTURING:", palabra, numero, booleria, diasSemana);


    /* EJERCICIO */

    // Crear 3 variables
    // Crear un objeto vacío
    // Crear propiedades a ese objeto a partir de las variables
    // Mostrar por pantalla el objeto

    let variableA = "varA",
        variableB = "varB",
        variableC = "varC";


    let ejercicio6 = {};


    ejercicio6.variableA = variableA;
    ejercicio6.variableB = variableB;
    ejercicio6.variableC = variableC;


    console.log("OBJETO CON PROPIEDADES A PARTIR DE VARIABLES:", ejercicio6);


    /* AÑADIR VALORES A UN ARRAY */


    console.table(numeros);
    numeros[5] = 60; 


    /* MODIFICAR VALORES DEL ARRAY */

    numeros[2] = 120;


    /* METODO PUSH */

    numeros.push(70);                                                   // Añado el valor al final del array
    numeros.push(80, 90, 100);                                          // Añado varios valores al final del array


    /* METODO UNSHIFT */

    numeros.unshift(0, 1000, -30);                                      // Añado los valores al inicio del array

    console.log("NUMEROS CON VALORES MODIFICADOS:", numeros);


    /* ELIMINAR OBJETOS */

    numeros.pop();                                                        // Elimino el último elemento del array 

    numeros.shift();                                                      // Elimino el primer elemento del array

    console.log("NUMEROS CON VALORES ELIMINADOS:", numeros);

    numeros.splice(2,5);                                                  // Elimino 5 valores apartir del índice 2 incluyéndolo

    console.log("NUMEROS CON VALORES ELIMINADOS:", numeros);


    /* SPREAD / RESTO OPERATOR*/

    const nuevoArreglo = [...numeros, 1540];

    console.log("NUMEROS COPIA Y CON VALOR AÑADIDO:", nuevoArreglo);


    /* EJERCICIO */

    // Crear un array llamado estaciones con el valor "Verano"
    // Añadir primavera al principio
    // Añadir otoño, invierno

    
    let estaciones = ["Verano"];
    console.log("ESTACIÓN:", estaciones);


    estaciones.unshift("Primavera");    
    console.log("ESTACIONES CALUROSAS:", estaciones);

    
    estaciones.push("Otoño", "Invierno");   
    console.log("ESTACIONES DEL AÑO:", estaciones);


    /* EJERCICIO */

    // Crear un array que se llame "carrito" y dentro del array introducimos 4 objetos con propiedades "nombre" y "precio"

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

    console.table(carrito);


    /* METODO FOREACH */

    // console.table(meses);

    meses.forEach(function (mes){
        console.log(mes)
    });

    
    /* INCLUDE PARA ARRAY PLANO */

    // No se puede hacer un include para arrays con objetos.

    // Para eso se usa el elemento "some" que veremos más adelantes







    // let compra = {};

    // compra.fruta = carrito[0];
    // compra.verdura = carrito[1];
    // compra.queso = carrito[2];
    // compra.bebida = carrito[3];

    // console.log(compra);








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


    METODOS PARA ARRAYS

        AÑADIR VALORES

                numero[5] = 60;

                array[indice] = valor;

            Si [] no está ese índice creado, lo crea y añade el valor

            No es muy útil porque tengo que tener en cuenta siempre cuántos índices tengo


        MODIFICAR VALORES

            Modifica el valor del índice 2. Lo actualiza

                numero[2] = 120;

        
        METODO PUSH

            Me añade de manera automática un valor al FINAL del array

                numeros.push(70);

                variable . push (valores);

                numeros.push(80, 90, 100);

            Los métodos se identifican con un . + método (Por ejemplo: .push)

        
        METODO UNSHIFT

            Me añade los valores al inicio del array

                numeros.unshift(0, 1000, -30);

        
        ELIMINAR VALORES

            Para eliminar el último elemento del array

                numeros.pop();                  

            Para eliminar el primer elemento

                numeros.shift();

            Para eliminar X valores desde un índice

                numeros.splice(2,5);

                numeros.splice(índice, nº de índices que queremos eliminar)
            

        SPREAD / REST OPERATOR

            Creo una copia del array "numeros" y le añado un número
        
                const nuevoArreglo = [...numeros, 1540];

            Creo una copia del array "numeros" sin añadir nada

                onst nuevoArreglo = [...numeros];


        METODO FOREACH

            Te hace una función por cada valor del array.
            Imprimimos por pantalla por separado cada índice del array
            
            meses.forEach(function (mes){
                console.log(mes)
            });

            array.forEach(función (argumentos){cuerpo de la función});

*/