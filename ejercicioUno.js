/*
1. Declara variables que representen tu nombre, edad, estatura en metros, ciudad y
si tienes mascota (sí/no).
*/

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







