"use strict";                                                   // Correr JS en modo estricto


// STRING 

const producto = "Juego de mesa EL PUEBLO DUERME";              // La más utilizada
const producto1 = String("DOOBLE");                             // La primera letra de String va SIEMPRE con Mayúscula
const producto2 = new String("UNO");                            // Un string que está dentro de un objeto

console.log("PRODUCTO:", producto);
console.log("PRODUCTO1 con String:", producto1);
console.log("PRODUCTO2 con new String:", producto2);

// TYPEOF

console.log("TYPEOF PRODUCTO es de tipo:",typeof producto);                        // Tipo string
console.log("TYPEOF PRODUCTO1 con String es de tipo:", typeof producto1);          // Tipo string
console.log("TYPEOF PRODUCTO2 con new String es de tipo:", typeof producto2);      // Tipo object


// Ejercicio: Crear dos variables. Una se va a llamar numero100 y la otra numero200

let numero100 = 100;
    numero200 = "200";

console.log("NUMERO100:", numero100);
console.log("NUMERO200:", numero200);

console.log("TYPEOF NUMERO100:", typeof numero100);             // Tipo number
console.log("TYPEOF NUMERO200:", typeof numero200);             // Tipo string


// MÉTODOS

console.log("MÉTODO LENGTH:", producto.length);

console.log("MÉTODO INDEXOF:", producto.indexOf("DUERME"));

console.log("MÉTODo INCLUDES:", producto.includes("DUERME"));


// NUMEROS

let numero1 = 8,
    numero2 = 5,
    numero3 = "200",
    numero4 = 2/3;

console.log("NUMERO1:", numero1);
console.log("NUMERO2:", numero2);
console.log("NUMERO3:", numero3);
console.log("NUMERO4:", numero4);

console.log("TYPEOF NUMERO1:", typeof numero1);                 // number
console.log("TYPEOF NUMERO2:", typeof numero2);                 // number
console.log("TYPEOF NUMERO3:", typeof numero3);                 // string
console.log("TYPEOF NUMERO4:", typeof numero4);                 // number

    // PARA OPTIMIZAR AMBOS CÓDIGOS Y AÑADIRLE MÁS INFORMACIÓN QUE QUIERO QUE ME MUESTRE

console.log("NUMERO1 Y TYPEOF NUMERO1:", numero1, typeof numero1, numero1.length);
console.log("NUMERO2 Y TYPEOF NUMERO2:", numero2, typeof numero2, numero2.length);
console.log("NUMERO3 Y TYPEOF NUMERO3:", numero3, typeof numero3, numero3.length);
console.log("NUMERO4 Y TYPEOF NUMERO4:", numero4, typeof numero4, numero4.length);


// OPERACIONES

console.log("SUMA DE NUMEROS:", numero1 + numero2);             // 3
console.log("SUMA DE NUMERO + STRING:", numero1 + numero3);     // 2200 porque 200 es un string

console.log("MODULO DE NUMEROS:", numero1 % numero2);           // 0


// METODO MATH

    // Generar un número aleatorio entre 0 y 1

    let resultado = Math.random();
    console.log("NUMERO ALEATORIO:", resultado);

    // Número PI

    let numeropi = Math.PI;
    console.log("PI:", numeropi)

    // Combinación de métodos matemáticos

    let operacion = Math.floor(Math.random()*30);
    console.log("Operación:", operacion);

    // Ejercicio: crear una ecuación que me de como resultado el área de una circunferencia a partir del diámetro

    let diametro = 20;
    
    let area = Math.PI * Math.pow(diametro/2, 2);

    console.log("AREA:", area);

    let areaRedondeada = Math.round(area);
    console.log("AREA REDONDEADA:", areaRedondeada);
    
    // area = Math.round(area);                                 // Le cambio el valor al número redondeado
    // console.log("AREA REDONDEADA:", area);


    // Ejercicio: Mostrar por pantalla un número aleatorio entre 2 y 3

    let aleatorio = Math.random() + 2;
   
    console.log("NUMERO ALEATORIO ENTRE 2 Y 3:", aleatorio);

    // Ejercicio: Mostrar por pantalla un número aleatorio entre 3 y 6

    let aleatoriotresseis = Math.random()*3 + 3;           

    console.log("NUMERO ENTRE 3 Y 6:", aleatoriotresseis);

    // Ejercicio: crear un dado de 6 caras

    let dado = Math.round(Math.random()*5+1);

    console.log("DADO:", dado);

    // Ejercicio: 3 prendas de ropa, cada una tiene un valor de inicio pero me hacen un 40% de descuento

    let prenda1 = 120,
        prenda2 = 85,
        prenda3 = 24,
        descuento = 40 / 100,
        preciototal = prenda1 + prenda2 + prenda3,
        ahorro = descuento * preciototal,
        factura = preciototal - ahorro;

    console.log("PRECIOTOTAL:", preciototal);
    console.log("AHORRO:", ahorro);
    console.log("FACTURA:", factura);

    // Incrementos y decremento

    let meGusta = 0;
    // meGusta ++;                                                  // Incrementa en 1 el valor de meGusta

    console.log("NÚMERO DE ME GUSTA:", meGusta++);                  // 0    Muestra variable y luego incrementa
    console.log("NÚMERO DE ME GUSTA TRAS INCREMENTO:", meGusta);    // 1
    console.log("NÚMERO DE ME GUSTA:", ++meGusta);                  // 2    Incrementa antes de mostrar variable
    console.log("INCREMENTO EN 15:", meGusta+=15);


    // CONCATENACIÓN

    let nombre = "Gabriel Murillo";
    let email = "gabrimurii@gmail.com";

    console.log("NOMBRE:", nombre);
    console.log("EMAIL:", email);

    console.log("NOMBRE + EMAIL CONCATENADO:", nombre + email);
    console.log("NOMBRE + EMAIL CONCATENADO Y ESPACIADO:", "NOMBRE: " + nombre + " EMAIL: " + email);
    console.log("NOMBRE + EMAIL CONCATENADO:", nombre, email);


    // TEMPLATE STRING

    console.log(`NOMBRE CLIENTE: ${nombre} EMAIL: ${email}`);


    // BOOLEANO

    let boolean1 = true,
        boolean2 = false,
        boolean3 = "true";

    console.log("BOOLEANO1:", typeof boolean1);
    console.log("BOOLEANO2:", typeof boolean2);
    console.log("BOOLEANO3:", typeof boolean3);

    let boolean4 = new Boolean(true);

    console.log("OBJETO BOOLEANO4:", typeof boolean4);


   




/* 

    TIPOS DE VARIABLES
    
        - string     ===    cadena de texto  --> Requiere "" ó ''
        - number     ===    numero  --> No hay que poner comillas. No discimina entre decimales, enteros...
        - booleano   ===    true / false
        - object     ===    contenedor de propiedades
        - function   ===    contiene una función


    TYPEOF 
    
        Se utiliza para saber qué tipo de variable es

            console.log("Indicativo", typeof nombreDeVariable);


    MÉTODOS

        Funciones que se pueden utilizar para variar en función del tipo de dato
        Siempre es...

        LENGTH

            Longitud del texto

                nombreDeVariable + '.' + length === console.log("MÉTODO LENGTH", producto.length)

        INDEXOF

            Busca si una palabra existe en una cadena de texto
            Valores de 0 o positivos si exite. El valor es la posición donde se encuentra la palabra
            Valores negativos si no existe

                console.log("MÉTODO INDEXOF:", producto.indexOf("DUERME"));
        
        INCLUDES

            Busca si una palabra existe en una cadena de texto
            Valor de true si exite
            Valor de false si no existe

                console.log("MÉTODO INDEXOF:", producto.includes("DUERME"));


    OPERACIONES

        - Suma                +
        - Resta               -
        - Multiplicacion      *
        - División            /
        - Módulo              %       Me da el valor del residuo de la operación

            console.log(numero1 + numero2);
    

    MÉTODOS PARA LOS NÚMEROS

        MATH

        window en la consola === Enseña todas las funciones que hay disponibles
        window.Math === Me enseña todas las operaciones disponibles dentro del método Math

        - Math.random               Genera un número aleatorio
        - Math.PI                   Número Pi
        - Math.round(2.5)           Redondea el número a partir de .5 hacia arriba y sino hacia abajo
        - Math.ceil(2.1)            Redondea hacia arriba
        - Math.floor(2.9)           Redondea hacia abajo
        - Math.sqrt(144)            Raíz cuadrada
        - Math.abs(-200)            Muestra el valor absoluto
        - Math.min(2,3,1,0)         Me da el menor valor
        - Math.max(2,3,1,0)         Me da el mayor valor
        - Math.pow(2,3)             Eleva el primer número al segundo 2^3   

        Combinaciones de las anteriores

            Math.floor(Math.random()*30);
        
        Orden de las operaciones

            ()               Paréntesis
            * , /            Multiplicaciones y divisiones
            + , -            Sumas 

        Incrementos y decrementos

        Suma o resta de manera correlativa un valor
        Por ejemplo, números de me gusta en Instagram
        ++
        --
        +=nº
    
    
    CONCATENACIÓN

        Agrupar valores
        
            console.log("NOMBRE Y EMAIL CONCATENADO:", nombre + email);             // Juntos
            console.log("NOMBRE Y EMAIL CONCATENADO:", nombre + " " + email);       // Con espacio string
            console.log("NOMBRE + EMAIL CONCATENADO:", nombre, email);              // Con espacio, se usa menos


    TEMPLATE STRING O STRING LITERALS

        Hace lo mismo que la concatenación pero más ágil y estructurado
        Da la posibilidad de juntar variables con texto

        Se pone entre comillas invertidas `...`
        Para llamar a una variable se escribe ${nombreDeVariable};

            console.log(`NOMBRE CLIENTE: ${nombre} EMAIL: ${email}`);


    BOOLEANOS

        Solo tienen valor de true o false

*/