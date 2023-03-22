"use strict"

    
    /* OBJECT LITERAL */

    const producto = {
        nombre : "Tablet",
        precio : 500,
    };


    /* OBJECT CONSTRUCTOR */

    function ProductoClase (nombre, precio, disponibilidad = false, categoria = "tech") {
        this.nombreObjeto = nombre;
        this.precioObjeto = precio;
        this.disponibilidad = disponibilidad;
        this.categoria = categoria;
    }

    // Creamos una instancia, es decir, llamamos a la clase

    // const producto2 = new ProductoClase("Monitor curvo", 800);
    
    // console.log(producto2);
    
    const producto3 = new ProductoClase("PC", 1800);
    
    console.log(producto3);
    
    const producto4 = new ProductoClase("Reloj", 500, true, "relojes");
    
    console.log(producto4);


    /* EJERCICIO */

    // Crear un objeto con el objectConstructor que se llame fecha y que reciba las propiedades 'año' 'mes' dia'

    function ClaseFecha (año, mes, dia) {
        this.año = año;
        this.mes = mes;
        this.dia = dia;
    };

    const fecha1 = new ClaseFecha (2023, 2, 20);
    console.log(fecha1);

    const fecha2 = new ClaseFecha (2022, 11, 24);
    console.log(fecha2);

    const fecha3 = new ClaseFecha (2021, 4, 15);
    console.log(fecha3);

    const fecha4 = new ClaseFecha (2020, 4, 10);
    console.log(fecha4);



    /* PROTOTYPE */

    // Crear una función que sea formatear producto (dar información detallada del producto)
    // Creamos una propiedad llamada 'formatearProducto'

    ProductoClase.prototype.formatearProducto = function(){
        console.log(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto}€`)
    }

    const producto2 = new ProductoClase("Monitor curvo", 800);

    console.log(producto2.formatearProducto());


    /* CLASS */

    class ProductoClase2 {
        constructor(nombre, precio) {
            this.nombreObjeto2 = nombre;
            this.precioObjeto2 = precio;
        }

        // Le añado una función
        formatearProducto2() {
            console.log(`El producto2 ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2}€`)
        }
    }

    // Instanciamos

    const producto5 = new ProductoClase2("TV nueva", 678)
    console.log(producto5)
    console.log(producto5.formatearProducto2())


    /* EJERCICIO */
 
    // Crear un object constructor llamado 'Libro' con propiedades 'nombre' 'precio' 'isbn'
    // Instanciarlo

    class Libro {
        constructor (nombre, precio, isbn) {
            this.nombreLibro = nombre;
            this.precioLibro = precio;
            this.isbnLibro = isbn;
        }
    }
    
    let libritos = new Libro ("Golybhe", 15, 987654321);
    console.log(libritos);
    
    /* function Libro (nombre, precio, isbn) {
        this.nombreLibro = nombre;
        this.precioLibro = precio;
        this.isbnLibro = isbn;
    };

    let libritos = new Libro ("Golybhe", 15, 987654321);
    console.log(libritos); */


    /* HERENCIA */

    // Creo una nueva clase

    class Categoria extends Libro {
        constructor (nombre, precio, isbn, categoria) {       // Pongo todas los argumentos, ya sean hereadados o no
            super (nombre, precio, isbn);                     // Copio las propiedades mediante 'super'
            this.categoria = categoria;                       // Creo una nueva propiedad
        }

        formatearProducto3(){
            console.log(`El producto ${this.nombreLibro} pertenece a la categoria ${this.categoria}`)
        }
    }

    // Instanciamos

    let producto6 = new Categoria ("Röghan", 15, 987654321, "Fantasía de ficción")
    console.log(producto6)

    console.log(producto6.formatearProducto3())


    /* EJERCICIO */

    // Crear un object constructor con una clase llamada 'coche' y cuyas propiedades sean 'marca' 'año'(compra) 'motor' 'matricula'
    // Y una función que me diga el número de años que tiene el coche

    class Coche {
        constructor(marca, ano, motor, matricula) {
            this.marca = marca;
            this.ano = ano;
            this.motor = motor;
            this.matricula = matricula;
        }

        calculaEdad() {
            console.log(`El coche se compró en el año ${this.ano} por lo que tiene ${2023-this.ano} años`);
        }
    }

    let coche1 = new Coche ("Seat", 2014, "39 cv", "1234-ABC");
    console.log(coche1);
    console.log(coche1.calculaEdad());

    const cochePapa = new Coche("Mini morris", 1200, "89cv", "1234-PAPA");
    console.log(cochePapa);
    console.log(cochePapa.calculaEdad());

    









/* 

PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

    OBJETOS
        
        Object literal == Como lo hemos estado haciendo, definimos las propiedades y le damos valores
        
        Object constructor == Es como una plantilla para evitar copiar mucho código


    OBJECT CONSTRUCTOR

        Crea objetos de manera dinámica
    
        Sintáxis similar a la de una function

        Hacemos uso de las clases == contenedores de datos para objetos

        Las clases SIEMPRE empiezan por mayúsculas

            function ProductoClase(nombre, precio) {
                this.nombreObjeto = nombre;
                this.precioObjeto = precio;
            }

        Creamos una instancia, es decir, llamamos a la clase

            const producto2 = new ProductoClase("Monitor curvo", 800);

            const 'variable' = new 'Clase'(atributos);


    PROTOTYPES

        Métodos que me permiten crear funciones dentro de los objetos

        Esa función SOLO se puede utilizar dentro de ese objetos

            ProductoClase.prototype.formatearProducto = function(){
                console.log(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto}€`)
                }

            const producto2 = new ProductoClase("Monitor curvo", 800);

            console.log(producto2.formatearProducto());

        
    CLASS

        Genera las clases, es otra forma de crearlas a parte de con 'function'

        Usamos la paralabra reservada'constructor' 
            
            Es una función en sí, que se usa dentro de las clases para generar objetos


            class ProductoClase2 {
                constructor(nombre, precio) {
                    this.nombreObjeto2 = nombre;
                    this.precioObjeto2 = precio;
                }

                formatearProducto2() {                              // Añado una función
                    console.log(`El producto2 ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2}€`)
                }
            }

    
    HERENCIA

        La herencia nos permite crear clases partiendo de clases ya creadas

        Copia propiedades de una clase a otra

            class Categoria extends Libro {                  // Palabra reservada 'extends'
                constructor (nombre, precio, isbn, categoria){ // Pongo todas los argumentos, ya sean hereadados o no
                    super(nombre, precio, isbn)
                }
                formatearProducto3(){
                console.log(`El producto ${this.nombreLibro} pertenece a la categoria ${this.categoria}`)
                // Ponemos super.propiedad para aquellas que no las hayamos definido directamente en la clase
                }
            }

            // Instanciamos

            let producto6 = new Categoria ("Röghan", 15, 987654321, "Fantasía de ficción")
            console.log(producto6)

            console.log(producto6.formatearProducto3())
        
        'extends' me dice que las propiedades que voy a heredar están dentro de la clase 'Libro'
        
        'super' nos dice qué propiedades van a ser copiadas de la clase 'Libro'








*/