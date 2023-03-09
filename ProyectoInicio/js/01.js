"use strict";                                                  // Correr JS en modo estricto


// Palabra reservada "var" + nombre de la variable + ""="" + valor de la varible

var producto = "Pingüino";              // Inicializamos la variable, podemos no darle valor

var disponible;                         // No hace falta poner ; pero es aconsejable ponerlo

disponible = true;                      // Le asignamos un valor a la variable disponible. No hace falta poner 'var'

disponible = false;                    // Reasignamos el valor de la variable

var producto1 = "DOOBLE",               // Inicializamos varias variables a la vez
    disponible1 = false,                // Ponemos ',' después de cada variable excepto en la última que es ';'
    categoria = "Juego de mesa";

console.log(producto);                  // Mostrar por pantalla el valor de la variable
console.log("VARIABLE1:",disponible);   // Ponemos texto antes para nosotros saber a quién se le asigna la variable
console.log("PRODUCTO1:",producto1);
console.log("DISPONIBLE1:",disponible1);
console.log("CATEGORIA:",categoria);

var camiseta = "rojo",
    pantalon = "amarillo",
    zapato = "azul";

console.log("CAMISETA:",camiseta);
console.log("PANTALON:",pantalon);
console.log("ZAPATO:",zapato);
//console.log("CAMISETA:",camiseta, "PANTALON:",pantalon, "ZAPATO:",zapato) // Aparecen todas de seguido

// var 1numero = "Hola";                 // Da error por inicializarlo con un número
// console.log(1numero);                 // SyntaxError

const pi = 3.141592;                    // Siempre se inicializan con un valor
// const pi = 3.14;                     // Si lo pongo sale error porque NO se le puede reasignar el valor  
console.log(pi);





/* 

DECLARACIÓN DE VARIABLES EN JS

    Hay variables dinámicas y estáticas

    Inicializar varibles (son palabras reservadas) = palabras que tienen funcionalidad previa. No se pueden usar como nombres de variables
        
        - var           La más antigua. Tiene algunos problemas porque se nombra a nivel global. Ámbito global
        - let           La más utilizada. Es igual que var pero mejorada. Nombra a nivel local. Ámbito local
        - const         Variable constante. Ese valor no se puede reasignar. Siempre tiene que tener valor

    Las variables se declaran (Nombre de la variable) y se inicializan (valor de la variable)

    No hace falta decirle qué tipo de variable le estamos asignando. Es el propio valor el que le dice el tipo de valor que le estamos asignando.

    El nombre de las variables no pueden inicializar con números ni con muchos caracteres especiales '&hola'
    
    La sintaxis es MUY IMPORTANTE


    Estilos para crear variables

        - var nombre_producto = "A";                // Underscore
        - var nombreProducto = "A";                 // Camelcase. EL MÁS USADO
        - var NombreProducto = "A";                 // Pascal case
        - var nombreproducto = "A";                 //


*/