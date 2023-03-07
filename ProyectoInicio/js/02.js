
// STRING 

const producto = "Juego de mesa EL PUEBLO DUERME";          // La más utilizada
const producto1 = String("DOOBLE");                         // La primera letra de String va SIEMPRE con Mayúscula
const producto2 = new String("UNO");                        // Un string que está dentro de un objeto

console.log("PRODUCTO:",producto);
console.log("PRODUCTO1 con String:",producto1);
console.log("PRODUCTO2 con new String:",producto2);

// TYPEOF

console.log("TYPEOF PRODUCTO es de tipo:",typeof producto);                        // Tipo string
console.log("TYPEOF PRODUCTO1 con String es de tipo:", typeof producto1);          // Tipo string
console.log("TYPEOF PRODUCTO2 con new String es de tipo:", typeof producto2);      // Tipo object


// Ejercicio: Crear dos variables. Una se va a llamar numero100 y la otra numero 200

let numero100 = 100;
    numero200 = "200";

console.log("NUMERO100:", numero100);
console.log("NUMERO200:", numero200);

console.log("TYPEOF NUMERO100:", typeof numero100);         // Tipo number
console.log("TYPEOF NUMERO200:", typeof numero200);         // Tipo string


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

console.log("TYPEOF NUMERO1:", typeof numero1);            // number
console.log("TYPEOF NUMERO2:", typeof numero2);            // number
console.log("TYPEOF NUMERO3:", typeof numero3);            // string
console.log("TYPEOF NUMERO4:", typeof numero4);            // number

    // PARA OPTIMIZAR AMBOS CÓDIGOS Y AÑADIRLE MÁS INFORMACIÓN QUE QUIERO QUE ME MUESTRE

console.log("NUMERO1 Y TYPEOF NUMERO1:", numero1, typeof numero1, numero1.length);
console.log("NUMERO2 Y TYPEOF NUMERO2:", numero2, typeof numero2, numero2.length);
console.log("NUMERO3 Y TYPEOF NUMERO3:", numero3, typeof numero3, numero3.length);
console.log("NUMERO4 Y TYPEOF NUMERO4:", numero4, typeof numero4, numero4.length);


// OPERACIONES

console.log("SUMA DE NUMEROS:", numero1 + numero2);                 // 3
console.log("SUMA DE NUMERO + STRING:", numero1 + numero3);         // 2200 porque 200 es un string

console.log("MODULO DE NUMEROS:", numero1 % numero2);               // 0








/* 

    Tipos de variables
    
        - string     ===    cadena de texto  --> Requiere "" ó ''
        - number     ===    numero  --> No hay que poner comillas. No discimina entre decimales, enteros...
        - booleano   ===    true / false
        - 
        - 
        - 


    TYPEOF se utiliza para saber qué tipo de variable es
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




*/