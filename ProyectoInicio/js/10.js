"use strict"

    /* CONSULTA A BASE DE DATOS */

    function obtenerEmpleados (){
        fetch("empleados.json")                                     // Conectamos con la BdD o archivo local
            .then(resultado => {
                return resultado.json()
            })

            .then(datos => {                                        // Si se cumple el anterior, ejecuta este
                console.log(datos)

                const {patata} = datos;                             // Destructuring de toda la información de datos en empleados
                
                patata.forEach(empleado => {                        // forEach para recorrer el array
                    console.log(empleado.nombre)
                    console.log(empleado.id)
                });
                
            })
    }

    obtenerEmpleados();


    /* OTRA FORMA DE HACERLO */

    // Async / Await

    async function obtenerEmpleados2 (){                            // Creamos función asíncrona
        const resultado = await fetch("empleados.json");            // Conectamos con BdD

        console.log(resultado)
        
        const datos = await resultado.json();

        console.log(datos)

        const{empleados} = datos;

        empleados.forEach(empleado => {
            console.log(empleado.nombre)
            console.log(empleado.id)
        })
    }   

    obtenerEmpleados2();

    










/* 

    FETCH API

        Me permite conectar con los archivos de los servidores para acceder a la información de las BdD

        Antes se hacía con Ajax

        Me permite

            - Enviar información al servidor
            - Obtener información del servidor

        Al igual que todas las API's hace uso de las Promesas y del Asyn / Await
        
        Puede conectarse con un servidor o a un archivo local (json o texto)

        JSON es 'JavaScript Object Notation' == Lenguaje de transporte de datos

            Me permite obtener la infomación de la BdD / archivo local y lo lleva a mi archivo JS

            Todos los lenguajes de programación se basan en el JSON para obtener información

            Obtienen los datos muy parecido a los objetos

            No se pueden comentar

            ARCHIVO JSON --> 'empleados.json'

                {
                    "empleados" :[                          // BdD entre "" y [array]
                        {                                   // Objeto
                            "id" : 1,                       // Propiedades entre ""
                            "nombre" : "Gabriel Murillo",
                            "puesto" : "programador"        // Última sin ','                            
                        },                                  // Separado con ','

                        {

                        },

                        {

                        }                                   // La última sin ','
                    ]
                }

        Tanto la última propiedad como el último objeto NO LLEVAN ','
        Es la forma que tiene la BdD para saber que es el último
        



*/