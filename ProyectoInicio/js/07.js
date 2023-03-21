"use strict"

    /* THIS */

    // Crear un objeto llamado 'reserva' y que tenga las propiedades de 'nombre', 'apellidos', 'total', 'pagado'

    let reserva = {
        nombre : "Gabriel",
        apellido : "Murillo",
        total : 300,
        pagado : true,
    };

    console.log("Nombre:", reserva.nombre);

    // Añadimos una nueva propiedad que contenga una función

    // reserva.informacion = function(){
    //     console.log(`Tu cliente ${nombre} ${apellido} tiene una reserva por un total de ${total}€`)
    // };

    // console.log(reserva.informacion());                     // NO MUESTRA NADA POR PANTALLA


    // Hacemos uso del método THIS

    reserva.informacion = function(){
        console.log(`Tu cliente ${this.nombre} ${this.apellido} tiene una reserva por un total de ${this.total}€`)
    };

    console.log(reserva.informacion());


    /* EJERCICIO */

    // Crear un objeto que se llame 'fecha' que reciba las propiedades 'año' 'mes' 'día' 'faltante'(function)
    // La funcion me tiene que decir los días que quedan para acabar el mes, suponiendo que todos son 31

    let fecha = {
        año : 2023,
        mes : "Marzo",
        dia : 21,
        faltante : function (){
            // console.log(`Faltan ${31 - this.dia} días para que el mes termine`)
            return 31 - this.dia;
        }
    }
    
    console.log(`Hoy estamos a ${fecha.dia} de ${fecha.mes} del ${fecha.año} y ${fecha.faltante()} días para que termine el mes`);
    
    // console.log(fecha.faltante());
    


/* 
    THIS

        Me permite referirme a todas las propiedades que están dentro del objeto y hacer uso de las mismas    

            console.log(`Tu cliente ${this.nombre} ${this.apellido} tiene una reserva por un total de ${this.total}€`)
            };

            console.log(reserva.informacion());

*/







