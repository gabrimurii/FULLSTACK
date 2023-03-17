"use strict"

    /* ESTRUCTURAS DE CONTROL */

    const puntaje = 100;

    if (puntaje === 1000) {
        console.log("Puntuaje es 1000")
    } else {
        console.log("Puntuaje no es 1000")
    };

    // puntaje === 1000 
    // ? console.log("Puntaje es 2000")                                    // ? es if
    // : console.log("Puntaje no es 2000")                                 // : es else


    /* EJERCICIO */

    // Retirada de dinero
    // Primero: el cajero comprueba que el pin está OK
    // Después me da las opciones: Selecciono retirar
    // A continuación el cajero compureba que tengo saldo suficiente

    // Crear funcion con parametros pin y cantidadRetirar
    // pin correcto es 1234
    // saldo en cuenta es 49

    
    function cajero (pin, cantidadaRetirar) {
        if (pin === 1234){
            console.log("El pin es correcto");
            if (cantidadaRetirar > 49) {
                console.log("No tienes suficiente saldo")
            } else {
                console.log("Tienes saldo suficiente")
            }
        } else {
            console.log("El pin no es correcto")
        }
    };

    cajero(1234, 49);
    cajero(12345, 50);


    function cajero (pin, usuario, cantidadaRetirar) {
        if (pin === 1234 && usuario === "Pepe"){
            console.log("Bienvenido Pepe, el pin es correcto");
            if (cantidadaRetirar <= 49) {
                console.log("Tienes suficiente saldo")
            } else {
                console.log("No tienes saldo suficiente")
            }
        } else {
            console.log("Atrás persona que no es Pepe")
        }
    };

    cajero(1234,"Pepe", 49);
    cajero(1234, "Paco", 50);
    

    /* ELSE IF */

    const rol = "Editor";

    if (rol === "Administrador"){
        console.log("Tienes acceso a todo el sistema")
    } else if (rol === "Editor"){
        console.log("Solo puedes editar, pero no crear")
    } else {
        console.log("No tienes acceso")
    }


    /* SWITCH */

    const metodoPago = "Tarjeta";

    switch(metodoPago){
        case "Tarjeta" : console.log("Pagaste con tarjeta");
            break;
        case "En Mano" : console.log("Pagaste en mano");
            break;
        case "Bizum" : console.log("Pagaste con Bizum");
            break;
        default : console.log("Pendiente de pago");
            break;
    }


    /* EJERCICIO 1 */

    // Crear funcion de flecha que dados dos argumentos me muestre por pantalla 10 veces la suma de ellos

    let flechita = (fl1, fl2) => console.log("SUMA CON MULTIPLICACION:", (fl1 + fl2) * 10);

    flechita(10, 20);


    /* EJERCICIO 2 */

    // Crear una función de flecha que dado un parámetro tipo string me muestre por pantalla el número de caracteres

    let ejercicio2 = (str1, str2) => console.log("SUMA Y CONTEO DE STRINGS:", (str1 + str2).length); // str1.length + str2.length

    ejercicio2("Hola", "Adiós");


    /* EJERCICIO 3 */

    // Crear una estructura de control que me compare si un número ya creado multiplicado por sí mismo es menor que 100
    // Si el número es mayor que 100 pero menor que 200
    // Si el número no cumple ninguna anterior

    let numero1 = 5;

    if (numero1 * numero1 < 100){
        console.log("Número al cuadrado menor que 100")
    }
    else if (numero1 * numero1 < 200) {
        console.log("Número al cuadrado menor que 200")
    }
    else {
        console.log("Número al cuadrado mayor o igual a 200")
    };
    
    
    let numero = 11;

    if (numero * numero < 100){
        console.log("Número al cuadrado menor que 100")
    }
    else if (numero * numero >= 100 && numero * numero <= 200) {
        console.log("Número al cuadrado entre 100 y 200")
    }
    else {
        console.log("Lo sentimos")
    };


    /* EJERCICIO 3 */

    // Crear una estructura de control que me compare si un número +10 es:
    // =9 ; =12 ; =15 ; = 100 ; resto de posibilidades

    let comparar = -1;

    switch (comparar + 10){
        case 9 : console.log("Comparar = 9");
            break;
        case 12 : console.log("Comparar = 12");
            break;
        case 15 : console.log("Comparar = 15");
            break;
        case 100 : console.log("Comparar = 100")
            break;
        default : console.log("Comparar es = a lo que sea +10");
            break;
    };


    /* FOR */

    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)

    for (let i = 0; i <= 3; i++){
        console.log(i)
    }

    // Mostrar los primeros 500 números

    for (let j = 1; j <= 500; j++){
        console.log("500 primeros números", j)
    };


    /* EJERCICIO */

    // Mostrar en orden descendente del 100 hasta el 0, pero de 5 en 5

    for (let i = 100; i >= 0; i -=5){
        console.log("De 100 a 0:", i)
    };


    /* EJERCICIO */

    // Mostrar del 1 al 20 todos los números pares

    // for (let i = 1; i % 2 == 0 && i <= 20; i++){
    //     console.log("Pares entre 1 y 20:", i)
    // };

    for (let i = 1; i <=20; i+=2){
        if(i%2 === 0){}
        console.log("Números pares del 1 al 20:", i)
    };


    /* EJERCICIO */

    // Indice va desde 0 hasta 3
    // Mostrar por pantalla el objeto al completo
    // Haciendo uso de la sintaxis de punto sacar los nombres
    // Recorrer hasta la longitud del array

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

    for (let i = 0; i < carrito.length; i++){
        console.log(carrito[i]);
        console.log(carrito[i].nombre);                                         // Primero el índice del carrito y luego .propiedad
    };


    /* WHILE */

    let i = 5;

    while (i < 10){
        console.log("WHILE DEL 5 AL 10", i);
        i++;
    }


    /* DO WHILE */

    let j = 20;

    do {
        console.log("DO WHILE:", j);
        j++;
    } while (j<10);

    
    /* EJERCICIO */

    // Mostrar números pares pero con while

    let k = 1;
    
    while (k <= 20) {
        if(k % 2 === 0) {
            console.log("Números pares del 1 al 20 con WHILE:", k);
        }
        k++;
    };


    /* EJERCICIO */

    // Crear una función que dado un argumento me diga si
    // Es positivo
    // Es negativo
    // Es = 0

    function posneg0 (queEs) {
        if (queEs < 0){
            console.log("El número es negativo:", queEs)
        } else if (queEs === 0){
            console.log("El número es 0:", queEs)
        } else {
            console.log("El número es positivo:", queEs)
        }
    };

    posneg0(-1);
    posneg0(0);
    posneg0(1);


    /* EJERCICIO */

    // Crear una función que dado un argumento (nº entero), haga la regresión hasta 0

    function regresion (n1) {
        for (n1 = n1; n1 >= 0; n1--){
            console.log("Bajando de n1 a 0:", n1)
        };
    };

    regresion(10);

    function ej10 (n1) {
        while(n1 >= 0){
            console.log("Cuenta regresiva", n1);
            n1--
        }
    };

    ej10(10);


    /* EJERCICIO */

    // Crear una función que dado un argumento de entrada n me de la suma de todos los números entre 0 y n

    let resultadoEj11 = 0;
    
    function sumando (n) {
        for (n = n; n >= 0; n--) {
            // resultadoEj11 = n + resultadoEj11;                          
            resultadoEj11 += n
        }

        console.log("SUMA DE N's HASTA 0:", resultadoEj11)        
    };

    sumando (4)

    
    let resultadoEj11V2 = 0;

    function ejercicio11 (n1) {
        for (i = 0; i <= n1; i++){
            resultadoEj11V2 += i;
        }

        console.log("SUMA DE N's DESDE 0:", resultadoEj11V2);
    };

    ejercicio11(45);


    /* EJERCICIO */

    // Usar while para crear una función que dado un argumento muestre de manera regresiva el número/10
    
    function division (n1) {
        while (n1 >= 0){
            console.log("Número / 10:", n1 / 10)
            n1--;
        }
    }

    division(10);


    /* EJERCICIO */

    // Crear una función que dado un argumento calcule la media de la suma de todos los valores usando while

    let sumaMedia = 0;
    
    let contador = 0;

    function media (n1) {
        while (n1 > 0) {
            sumaMedia += n1;
            n1--;
            contador++;                                             // Hacemos que el contador vaya sumando 1
        }
        console.log("MEDIA DE LA SUMA:", sumaMedia / contador);
    }

    media(45);


    /* EJERCICIO */

    // Crear una función que dados dos argumentos solo me muestre los impares entre ellos y la suma de todos ellos

    let sumaImpares = 0;

    function impar (n1, n2) {
        for (let i = n1; i <= n2; i++){
            if (i % 2 !== 0) {
                console.log("Números impares", i)
                sumaImpares += i;   
                // console.log ("Suma de los impares:", sumaImpares)  // Saca cada suma
            }
        }
        console.log ("Suma de los impares:", sumaImpares)
    }

    impar(5, 14);


    
   
    







/* 

ESTRUCTURAS DE CONTROL

        Retirada de dinero
        Primero: el cajero comprueba que el pin está OK
        Después me da las opciones: Selecciono reitrar
        A continuación el cajero compureba que tengo saldo suficiente

        Todo esto son CONDICIONES

    IF / ELSE

        if = Si esto se cumple
        else = Si no se cumple

            if (condicion)

            if(puntaje === 1000){
                console.log("Puntaje es 1000")
            } else {
                console.log("Puntaje no es 1000")
            }


    ELSE IF
        
        Hace múltiples comparaciones

            const rol = "Editor";

            if (rol === "Administrador"){
                console.log("Tienes acceso a todo el sistema")
            } else if (rol === "Editor"){
                console.log("Solo puedes editar, pero no crear")
            } else {
                console.log("No tienes acceso")
            }


    SWITCH

        Optimiza el uso del 'else if' 

        Emplea CASE que son los múltiples casos

        Después de cada 'case' hay un 'brake'

        Al final hay que emplear 'default' para los casos en los que no se cumplen los casos anteriores

            const metodoPago = "Tarjeta";

            switch(metodoPago){
                case "Tarjeta" : console.log("Pagaste con tarjeta");
                    break;
                case "En Mano" : console.log("Pagaste en mano");
                    break;
                default : console.log("Pendiente de pago");
                    break;
            }

    
    FOR LOOP

        Es un iterador, un bucle

        Ejecuta el código hasta que se deje de cumplir una condición o se cumpla una condición

            console.log(1)
            console.log(2)
            console.log(3)
            console.log(4)

        Definimos un índice (normalmente con 'i') inicializado
        
        Condición

        Actualizador

            for(let i = 0 ; i<=3 ; i++){
                console.log(i)
            }

            INDICE              i = 0
            CONDICIÓN           i <= 3
            ACTUALIZADOR        i++


    WHILE

        Mientras

        Es similar al for pero con sintaxis distinta

        Se ejecuta el código mientras la condición se cumpla

        El índice se declara a nivel general

        El actualizador va en el cuerpo de la función

            let i = 0;

            while(i < 10){
                console.log(i);
                i++;
            }

            while(condición){
                console.log(i);
                actualizador;
            }

    
    DO WHILE

        Igual que el while pero ejecuta una vez el código

            let j = 20;

            do {
                console.log(j);
                j++
            } while (j<10);


            do {
                cuerpo;
                iterador / actualizador;
            } while (condicion);


*/