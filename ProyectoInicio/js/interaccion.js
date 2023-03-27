"use strict"


/* QUERYSELECTOR */

    const heading = document.querySelector("H1");           // Retorna 0 o 1 elemento (Si tengo más entonces coge el 1º)
    console.log(heading);                                   // Nos muestra por pantalla nuestra selección


/* EJERCICIO */

    // Seleccionar el ID del botón

    const button = document.querySelectorAll("#boton");
    console.log(button);


/* TEXTCONTENT */

    // Vamos a cambiarle el contenido al 'h1'

    heading.textContent = "Nuevo Título";


/* CLASSLIST */

    // Propiedad para añadir y eliminar clases hacemos uso de '.classlist'

    // Cuando hacemos uso de 'classlist' 
    // No tenemos que poner el . en la clase porque ya estamos diciendo que es una clase

    heading.classList.add("NuevaClaseDesdeJS");             // Añadimos
    console.log(heading);

    heading.classList.remove("NuevaClaseDesdeJS");          // Eliminamos
    console.log(heading);


    // Si intentamos seleccionar TODOS los enlaces

    const enlacesJS = document.querySelector("A");          // Se pone en mayúscula por convenio -.-
    console.log(enlacesJS);                                 // Solo me selecciona el primero


/* QUERYSELECTORALL */

    // Selecciona todos los elementos
    // Mismo tratamiento que 'queryselector' pero para todos

    const enlacesJS2 = document.querySelectorAll("A");
    console.log(enlacesJS2);

    // Me lo muestra en un NODELIST, para acceder a cada elemento lo hacemos al igual que los arrays
    console.log(enlacesJS2[0]);

    // También le podemos modificar el '.href'
    enlacesJS2[0].href = "https://google.com";


/* EJERCICIO */

    // Modificar el contenido y en enlace del segundo enlace únicamente con 'querySelectorAall'
    // Poner contenido modificado con 'querySelectorAll' y llevar a otro enlace externo

    enlacesJS2[1].textContent = "Login Persianas";
    enlacesJS2[1].href = "https://www.tucarreradigital.es/zona-centro";
    
    console.log(enlacesJS2[1]);


/* GETELEMENTBYID */

    const heading2 = document.getElementById("boton");              // Solo hace la selección de ID
    console.log(heading2);

    // Todo lo visto anteriormente para añadir / modificar / elimimnar propiedades es aplicable



/* GENERAR CÓDIGO HTML DESDE JAVASCRIPT */

    // Por ejemplo, un estado nuevo de FaceBook se genera con JS

    // Actualizar la web de manera dinámica

    const nuevoEnlace = document.createElement("A");                // Nos permite crear código HTML

    // Agregamos .href

    nuevoEnlace.href = "#";

    // Agregamos texto

    nuevoEnlace.textContent = "Nuevo Enlace";

    // Agregamos clase

    nuevoEnlace.classList.add("informate", "menuOrdenador");

    console.log(nuevoEnlace);


/* APPENDCHILD */
    
    // Appenchild me permite agregar elementos hijos
    // Agregamos al documento
    // Lo queremos agregar a la derecha del botón 'Infórmate'

    const enlacesJS3 = document.querySelector(".navegacion");    // Seleccionamos una clase del elemento padre
    enlacesJS3.appendChild(nuevoEnlace); 
    

/* EJERCICIO */

    // Crear un nuevo enlace en la sección cursos con nombre Pozuelo

    const pozuelo = document.createElement("A");

    pozuelo.href = "#";

    pozuelo.textContent = "Pozuelo";

    pozuelo.classList.add("estiloCursos");

    const PozueloSelector = document.querySelector(".cursos-sitios");
    PozueloSelector.appendChild(pozuelo);


/* INSERTBEFORE */

    // Agrega elementos antes que el que tomes como referencia

    const majadahonda = document.querySelector("A");

    majadahonda.href = "#";

    majadahonda.textContent = "Majadahonda";

    majadahonda.classList.add("estiloCursos");

    const NodoReferencia = document.querySelector(".cursoPrimero");

    const MajadahondaSelector = document.querySelector(".cursos-sitios");
    MajadahondaSelector.insertBefore(majadahonda, NodoReferencia);      // El que inserto , el que tomo de referencia




/* EVENTOS */

    // Notificación de que alguna característica interesante acaba de ocurrir, generalmente relacionada con el usuario que navega por la página. Dichas características pueden ser muy variadas: Click de ratón del usuario sobre un elemento de la página.

    // Me permiten tener una web más dinámica

    // Cuando alguien visita una web, surgen muchos eventos

    // Scroll, boton enviar formulario, clicks

    // Hay eventos que los genera el usuario y hay otros que se generan automáticamente

    console.log(1);


    /* CREAMOS UN EVENTO */

    // Empezamos un evento llamando a 'window'

    // addEventListener  -->  Le decimos a JS que a continuación vamos a tener un elemento

    // Dos parámetros --> 1º tipo de evento ("load", "scroll", "click") , 2º callback (también pueden ser funciones)

        /* LOAD */

    window.addEventListener("load", function(){
        console.log(2);
    });

    // 1 ... 3 ... 4 ... 2  Espera a que cargue todo y luego lo ejecuta, por eso se muestra el último


        /* DOMCONTENTLOADED */
    
    document.addEventListener("DOMContentLoaded", function(){       // document porque solo se refiere al HTML
        console.log(3)
    });
    
    // 1 ... 4 ... 3 ... 2
    

        /* SCROLL */

    window.addEventListener("scroll", function(){
        console.log("Scrolling...")
    });

    // Al hacer scroll me lo saca por pantalla


    console.log(4);


    /* EVENTOS A ELEMENTOS DEL HTML */

    const botonNotificacion = document.querySelector("#boton");     // Seleccionamos el boton con el id #boton

    botonNotificacion.addEventListener("click", function(evento){
        console.log(evento)                                         // Me muestra información del evento
        console.log("Mostrando Notificación...")
        evento.preventDefault()                                 // Evita que los formularios me recarguen la pagina
    })


    /* EVENTOS DE TECLADO */

    const nombre = document.querySelector("#Nombre")

    /* CHANGE */

    nombre.addEventListener("change", function(){       // No me hace el cambio de manera automática
        console.log("Escribiendo nombre...")            // Hasta que no salgo del cuadro no me lo saca por pantalla
    })

    /* INPUT */

    nombre.addEventListener("input", function(evento){      // Se va refrescando de manera automática
        console.log("Escribiendo nombre con input...");
        console.log(evento);                                // Me da la información del evento
        console.log(evento.target.value);                   // Saca por pantalla cada letra que pongo o quito
        // target es una propiedad de evento y value a su vez de target (sintáxis de punto)
        // value almacena el valor de lo que escribo por pantalla
    });


    /* EVENTOS DE SUBMIT */

    // Eventos que están asociados a formularios
    // Igual que los eventos de 'click' pero solo para formularios

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();                            // Hace que no se me vaya para arriba al hacer 'submit'
        console.log("Enviando formulario...");              // Por defecto se va hacia arriba
    });


    /* TIPOS DE EVENTOS */

    // Load                     Espera que cargue la página para ejecutarse. Tanto HTML, como CSS, JS...
    // DOMContentLoaded         Espera que cargue únicamente el HTML
    // Scroll                   Se ejecuta al hacer 'scroll'
    // Click                    Se ejecuta al hacer 'click'
    // Teclado 
        // Change               Se ejecuta al cambiar de apartado de formulario
        // Input                Se ejecuta al escribir
    // Submit                   Igual que el input pero para formularios
    




/* 
    JS EN EL DOM

        Vamos a ver cómo actua el JS en el DOM, como seleccionar elementos del HTML

        1. Seleccionamos el elemento que queremos que tenga una interacción

        2. Le dmaos la orden

        ¿Cómo seleccionamos elementos del HTML?

            - queryselector
            - queryselectorall
            - getelementbyid            -->     Se ha quedado obsoleta
        

        QUERYSELECTOR

            Me retorna o uno o ningún elemento

            Es muy similar a lo que hacemos en css
            
                Clases  ---  .
                ID      ---  #
                Elementos

            'document' es una palabra reservada que me selecciona el HTML

                const heading = document.querySelector("h1");  
                console.log(heading);  






    COMO ORGANIZAR EL CÓDIGO EN JS

        1   Variables

        2   Eventos

        3   Funcines


*/