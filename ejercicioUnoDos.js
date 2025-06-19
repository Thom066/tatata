/*
1. Declara variables que representen tu nombre, edad, estatura en metros, ciudad y
si tienes mascota (sí/no).
*/

const nombre = "Thomas Noriega";
let edad = parseInt(18);
let estatura = parseFloat(1.81);
let ciudad = "Medellin";
let tieneMascota = "Si";


/*2. Cambia los valores y explica qué tipo de dato representa cada uno (Muestra en
consola el tipo de dato). */

edad = parseInt (19);
estatura = parseFloat(1.85);
ciudad = "Bogota";
tieneMascota = "No";

console.log("--Datos personales--");
console.log("Nombre:", nombre, "| Tipo de dato:", typeof nombre);
console.log("Edad:", edad, "| Tipo de dato:", typeof edad);
console.log("Estatura:", estatura, "metros", "| Tipo de dato:", typeof estatura);
console.log("Ciudad:", ciudad, "| Tipo de dato:", typeof ciudad);
console.log("Tiene mascota:", tieneMascota, "| Tipo de dato:", typeof tieneMascota);

/*
// Menú de bienvenida
console.log("¡Bienvenido al registro de datos personales!");
console.log("Por favor, ingrese la información solicitada:\n");

// Declaración de variables con entrada del usuario
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let estatura = parseFloat(prompt("Ingrese su estatura en metros (use punto para decimales, ej: 1.75):"));
let ciudad = prompt("Ingrese su ciudad:");
let tieneMascota = prompt("¿Tiene mascota? (Ingrese 'Sí' o 'No'):");

// Mostrar los datos ingresados
console.log("\nResumen de los datos ingresados:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Estatura:", estatura, "metros");
console.log("Ciudad:", ciudad);
console.log("Tiene mascota:", tieneMascota);
*/









