 "use strict";                                                  // Correr JS en modo estricto
 
 
 /* OBJETOS */

    // let nombreProducto = "Pingu",
    //     precio = 100,
    //     disponible = true;

    // console.log("PRODUCTO:", nombreProducto);
    // console.log("PRECIO:", precio);
    // console.log("DISPONIBLE:", disponible);
    // console.log(`PRODUCTO ${nombreProducto} PRECIO ${precio} DISPONIBLE ${disponible}`);

    let producto = {
        nombreProducto: "Pingu",
        precio: 100,
        disponible: true
    }

    console.log(`ESTE ES MI PRIMER OBJETO ${producto}`);        // Saca {object Object}, no el desplegable
    console.log("ESTE ES MI PRIMER OBJETO", producto);          // Saca el desplegable con las propiedades

/* SINTAXIS DE PUNTO */

    console.log ("USO DE SINTAXIS DE PUNTO, producto.precio: ", producto.precio);
    console.log (`USO DE SINTAXIS DE PUNTO, producto.precio: ${producto.precio}`);  // Aparece el desplegable
    
    console.log("USO DE CORCHETES",producto["precio"]);         // No se utiliza


/* CREAR */

    producto.imagen="imagen";                                   // Creo una nueva propiedad dentro de producto

    console.log("AÑADIR PROPIEDAD:", producto.imagen);          // Nos da el valor


/* BORRAR OBJETOS */
    
    producto.borrar = true;                                     // Creo una nueva propiedad dentro de producto

    console.log("PROPIEDAD PARA BORRAR:", producto.borrar);     // Nos da el valor

    console.log("PRODUCTO CON PROPIEDAD BORRAR:", producto);    // Aparece en el desplegable

    delete producto.borrar;                                     // Elimina la propiedad del producto "borrar"

    console.log("PRODUCTO SIN PROPIEDAD BORRAR:", producto);    // No aparece en el desplegable


/* MODIFICAR OBJETOS */

    producto.precio = producto.precio * 2;                      // Modifico el valor de "precio"

    console.log("MODIFICAR PROPIEDAD:", producto.precio);       // Nos da el valor modificado


/* VARIABLES A PARTIR DE PROPIEDADES DE UN OBJETO */

    let disponible = producto.disponible;                       // Crea variable disponible a partir de la propiedad

    let nombre = producto.nombreProducto;

    console.log(`VARIABLE NOMBRE: ${nombre}`);


/* DESTRUCTURING */

    producto.categoria = "Animales";                            // Propiedad nueva dentro de producto

    console.log("CATEGORIA:", producto.categoria);              // Saco por pantalla el valor

    console.log("CATEGORIA:", producto);                        // Saco por pantalla el objeto y sus propiedades


    const {categoria} = producto;                               // Propiedad entre {} = objeto

        // const categoria = producto.categoria;                // Equivalente

        // const {categoria, precio} = producto;                // Puedo meter varias propiedades dentro de {...}

    console.log(`ESTA ES LA VARIABLE CREADA CON EL DESTRUCTURING: ${categoria}`);


/* OBJECT.FREEZE */

    Object.freeze(producto);                                    // Congelo el objeto "producto"

    // producto.congelado = true;                               // Creo una nueva propiedad dentro de "producto"

    // console.log("OBJETO CONGELADO:", producto);              // No se ha añadido al desplegable


/* OBJECT.ISFROZEN */

    console.log("¿ESTÁ CONGELADO EL OBJETO?:", Object.isFrozen(producto));  // True si está congelado


    // producto.disponible = false;                              // Intento cambiarle el valor a "disponible"

    // console.log("INTENTO MODIFICAR EL VALOR DE DISPONIBLE", producto);  // Da error


/* OBJECT.SEAL */

    let medidas = {                                             // Creo un nuevo objeto llamado "medidas"
        peso : 100,                 
        alto : 50,                                              // Le pongo las propiedades y sus valores
        ancho : 20,
        profundidad : 30
    }

    console.log("NUEVO OBJETO MEDIDAS:", medidas);              // Imprimimos por pantalla


    Object.seal(medidas);                                       // Aplicamos el Object.seal

    medidas.profundidad = 1;                                    // Modificamos el valor de "profundidad"

    console.log("MODIFICO VALOR CON OBJECT.SEAL:", medidas);    // Modifica el valor


    // medidas.color = "red";                                   // Añado una nueva propiedad

    // console.log("INTENTO AÑADIR UNA PROPIEDAD CON OBJECT.SEAL:", medidas);  // No se puede, da error


/* SPREAD / REST OPERATOR == UNIR DOS OBJETOS */

    let nuevoProducto = {...producto, ...medidas}

    console.log("SPREAD / REST OPERATOR", nuevoProducto);



/* 
 
OBJETOS

    Son contenedores de propiedades
    Por ejemplo, todas las variables de un producto == Nombre, precio, color...
    Es un tipo de variable

        let nombreObjeto = { 
            propiedad1 : valor1,                             // Se usa ":" en vez de "="
            propiedad2 : valor2,                             // Se separa
            propiedad3 : valor3                              // No se le pone ni "," ni ";"
        }

        
    SINTAXIS DE PUNTO

        Tenemos que poner el nombreDelObjeto + "." + propiedad

        console.log ("USO DE SINTAXIS DE PUNTO, producto.precio: ", producto precio);

    
    MODIFICAR OBJETOS

        - Añadir         

            producto.imagen = "imagen.jpg"

            Si no tiene ninguna propiedad que se llame "imagen", la crea

            
        - Modificar propiedades
            
            producto.imagen = "imagen.jpg"
            
            Si ya existe una propiedad llamada "imagen", la modifica

            
        - Eliminar

            delete propiedad.borrar;


    VARIABLES A PARTIR DE PROPIEDADES DE UN OBJETO

        Crear una variable que se llame "disponible" dentro de la propiedad "disponible" del objeto "producto"

            let disponible = producto.disponible;
            
                variable = objeto.propiedad;

        El nombre de las variables puede ser igual al nombre de las propiedades

    
    DESTRUCTURING

        Saca de una estructura a una propiedad

        Crea una variable, extrae el valor de la variable y la llama igual que la propiedad a la vez

        Optimiza el proceso anterior

            const {categoria} = producto;       Se crea una variable llamada "categoria"

                    {propiedad} = objeto;
                    {propiedad1, propiedad2, propiedad3,...} = objeto;
            

            
    METODOS PARA LOS OBJETOS

        OBJECT.FREEZE

            Me permite congelar el objeto de tal forma que no se pueda cambiar nada

                Object.freeze(producto);

            No me permite añadir, borrar o modificar propiedades

        OBJECT.ISFROZEN

            Me permite saber si un objeto está congelado

                console.log(Object.isFrozen(producto));

            True si está congelado

        OBJECT.SEAL

            Igual que Object.freeze pero...

            No me permite añadir ni borrar propiedades

            Si me permite modificar propiedades

    
    SPREAD / REST OPERATOR == UNIR DOS OBJETOS

        Crear un objeto que contenga dos objetos

            let nuevoProducto = {...producto, ...medidas};

                nombreObjeto = {...objeto1, ...objeto2};
        
        No modifica los objetos anteriores, simplemente generamos un nuevo objeto que contiene a los anteriores
        
        Es una buena práctica a la hora de ensamblar objetos
        
 */