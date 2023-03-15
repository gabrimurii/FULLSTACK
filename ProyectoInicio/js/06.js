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




*/