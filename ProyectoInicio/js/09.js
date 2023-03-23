"use strict"

    /* TRY CATCH */

    const numero1 = 20;

    const numero3 = 40;

    // console.log(numero1);           // Se muestra por consola
    // console.log(numero2);           // Se muestra por consola pero da fallo
    // console.log(numero3);           // No la muestra, estaba paralizado el código

    console.log(numero1);

    try{
        console.log(numero2);
    } catch(error) {
        console.log(error);
    }

    console.log(numero3);


    /* PROMISES */

    const usuarioAutenticado = new Promise((resolve, reject) => { 
        const auth = false;

        if(auth){                                           // Si no ponemos nada, lo iguala a TRUE == auth == true
            resolve("Usuario Autenticado")
        } else {
            reject("No se pudo iniciar sesión")
        }
    })

    console.log(usuarioAutenticado);

    usuarioAutenticado
        .then(function(resultado){                          // Se ejecutará cuando se cumpla la promesa
            console.log(resultado)
        })
        .catch(function(resultado){                         // Se ejecutará cuando no se cumpla la promesa
            console.log(resultado)
        })


    /* NOTIFICACIONES API CON JS */

    // Creamos un botón en el HTML arriba del todo
    // Creamos una variable de JS a partir de la selección

    const boton = document.querySelector("#boton");         // Me permite seleccionar elementos del HTML


    /*  EVENTOS EN JAVASCRIPT --> addEventListener */          // Agrega un evento a la variable 'boton'
    
    // boton.addEventListener("click", function(){
    //     console.log("Has hecho click")                      // Al darle 'click' nos lo imprime por consola
    // })

    boton.addEventListener("click", function(){
        console.log("Diste click");
        Notification.requestPermission()                  // Ya es una promesa
        .then(resultado => console.log(`El resultado es ${resultado}`))
    });

    if(Notification.permission == "granted"){               // Comprueba si el permiso ha sido aceptado
        new Notification("Esta es una notificacion", {
            icon: "../img/Tu-carrera-digital-general.png",  // Solo funciona en Mac
            body: "Notificacion Tu Carrera Digital"
        })
    }


    /* ASYNC / AWAIT */

    // Simulamos una base de datos
    
    setTimeout(function(){                              // Función que espera X ms para ejecutarse
        console.log("Set time out actuando")
    }, 3000)                                            // Son milisegundos

   /*  setInterval(function(){                             // Función que hace intervalos de tiempo y se va ejecutando
        console.log("Set Interval actuando")
    }, 4000)   */ 
    
    // Creamos la primera función asíncrona (solo en caso de que sea exitosa,'resolve')

    function descargarNuevosClientes(){                             // Creamos función
        return new Promise(resolve => {                             // Creamos la promesa
            console.log("Descargando clientes... espere...")        // Saca por pantalla el string

            setTimeout(() => {                              
                resolve("Los clientes fueron descargados")          // Tenemos en cuenta que solo es exitosa
            },5000)                                                 // Espera 5 segundos para darme la respuesta
        });
    }

    // Aquí hemos creado un promise, ahora vamos a hacer uso del ASYN / AWAIT

    // La función 'app' no se va a poder ejecutar hasta que la función 'descargarNuevosClientes' termine

    async function app(){
        const resultadoAsync = await descargarNuevosClientes();     // Esperamos a que se termine de ejecutar
        console.log(resultadoAsync)
    }

    // Este código se ejecuta en segundo plano y no paraliza al resto

    app()


    /* EJERCICIO */

    // Hacer una función que me descargue los pedidos, y me de una respuesta a los 3 segundos de que los pedidos
    // han sido descargados

    function descargaPedidos(){
        return new Promise(() => {
            console.log("Descargando pedidos...")

            setTimeout(() => {
                console.log("Los pedidos han sido descargado")
            }, 3000)
        });
    };

    descargaPedidos();





/* 

    TRY CATCH

        Le dice al código que intente ejecutar el código de nuevo

        Verificar credenciales
        
        Se usa para situaciones MUY CRÍTICAS

    
    PROMISES

        Refleja un valor que estará disponible ahora, en un futuro o nunca

            RESOLVE ---- Función que se ejecuta si la promesa se cumple
            REJECT  ---- No se cumple

                const usuarioAutenticado = new Promise((resolve, reject) => { 
                    const auth = false;

                    if(auth){                                           // Si no ponemos nada, lo iguala a TRUE == auth == true
                        resolve("Usuario Autenticado")
                    } else {
                        reject("No se pudo iniciar sesión")
                    }
                })

                console.log(usuarioAutenticado);                        // Sale como Promesa


                usuarioAutenticado
                    .then(function(resultado){                          // Se ejecutará cuando se cumpla la promesa
                        console.log(resultado)
                    })
                    .catch(function(resultado){                         // Se ejecutará cuando no se cumpla la promesa
                        console.log(resultado)
                    })

            .then coge por defecto el RESOLVE

            .catch coge por defecto el REJECT

            FULLFILLER          El promise se ha cumplido
            REJECTED            El promise no se ha cumplido
            PENDING             El promise está pendiente


    NOTIFICACIONES API

        En el HTML creamos un botón y le otorgamos un ID

        Le llamamos con .querySelector

            const boton = document.querySelector("#boton");


    EVENTOS EN JAVASCRIPT 

        Agrega un evento

            boton.addEventListener("click", function(){
                console.log("Diste click");
                Notification.requestPermission()                  // Ya es una promesa
                .then(resultado => console.log(`El resultado es ${resultado}`))
            });


    ASYNC / AWAIT

        Las funciones asíncronas tienen que esperar a que se ejecute un código para empezar a funcionar
    








*/