console.error("Detalles de author");
console.log("nomnre: Thomas");
console.log("nomnre: Thomas");

console.time('time');
console.info("Detalles de author");
console.timeEnd('time');

prompt("tu mensaje aqui", "default value");
confirm("tu mensaje aqui", "default value");
alert("tu mensaje aqui", "default value");

/* Variables */

/* ---Let----
se usa cuando quieres que el contenido de la variable pueda cambiar más adelante 
EJM : */

let year = 2024;
year = 2025; 

console.log(year);

/* ---Const----
Se usa cuando sabemos que el valor permanecerá igual, es decir, que no cambiara. Lo que pongas dentro de const no se puede modificar. 
EJM : */

/* Mal 
const name = "Antony";
name = "Riwi"
*/

/* Bien */
const hola = "hola";
let chao = "chao";
chao = "hola";

console.log(hola,chao);

/* ---var----
Es la forma más antigua de declarar variables, también permite cambiar el contenido de la variable, la diferencia con let radica en el alcance. Aunque funciona, hoy en día se recomienda usar let o const. Es importante que sepas que las variables declaradas con var pueden ser "re-declaradas" dentro del mismo bloque de código, lo que puede generar confusión y errores en programas más grandes. 
EJM : */

var skill = "HTML";
skill += "-CSS"; 

console.log(skill)

/* ---Template String----
Las comillas invertidas (``) se pueden usar para cadenas dinámicas. Permiten insertar directamente variables o resultados de expresiones dentro de una cadena sin tener que concatenar manualmente.
-Para insertar variables o expresiones dentro de una cadena delimitada por comillas invertidas, se usa la sintaxis ${}.
EJM : */

const coder = "Thomas"
let inverted = `"Hello", ${coder}
this is an example of the potential of the use of backsticks year: ${2024+1}`;

console.log(inverted);


//OPERADORES

/* 
--LOGICOS-- 
---Nos permiten combinar condiciones y realizar decisiones más complejas en el código. Su resultado también es true o false.

-&& (AND logico) Devuelve true solo si ambas condiciones son verdaderas

-|| (OR logico) Devuelve true si al menos una de las condiciones es verdadera

-! (NOT logico) Invierte el valor logico; convierte true en false y viceversa

*/


/* 
--ARITMETICOS-- 
---Los operadores aritméticos permiten realizar operaciones matemáticas.

+ (Suma): 
1 + 2 = 3

- (Resta): 
1 - 1 = 0

* (Multiplicacion): 
12 * 2 = 24

/ (Division): 
9 / 2 = 4.5

% (Modulo(residuo))
9 % 2 = 1

++ (Incremento)
let a = 1; a++

-- (Decremento)
let a = 0; a--

** (Exponenciacion)
2**3 = 8

*/


/* 
--COMPARACION-- 
---Los operadores de comparación se utilizan para comparar valores. El resultado de una comparación es siempre true o false, y se utilizan para tomar decisiones en el código..

== (Igual a): 
1 == '1' = TRUE

=== (Exactamente Igual): 
0 == '0' = FALSE

!= (Diferente): 
10 != '10' = FALSE

!== (Exactamente Diferente): 
2 !== '2' = TRUE

>(Mayor que): 
7 > 3 = TRUE

< (Menor que): 
9 < 0 = FALSE

>=(Mayor o Igual que): 
5 >= 5 = TRUE

<= (Menor o Igual que): 
0 <= -2 = FALSE

*/


/* 
--ASIGNACION-- 
---Los operadores de asignación se utilizan para asignar un valor a una variable. El más común es el igual (=), que asigna el valor de la derecha a la variable de la izquierda. Existen variantes de este operador para realizar otras operaciones al mismo tiempo que asignamos.

= (Asignacion): 
year = 2024

+= (Suma (o concatenar) y asignacion): 
year += 1 --> year = year + 1

-= (Resta y asignacion): 
year -= 0 --> year = year - 0

*= (Multiplicacion y asignacion): 
year *= 1 --> year = year * 1

/=(Division y asignacion): 
year /= 2 --> year = year / 2

%=(Modulo y asignacion): 
year %= 2025 --> year = year % 2025

**=(Exponenciacion y asignacion): 
year **= 3 --> year = year **= 3

*/


/*
---CONCATENACION DE CADENAS---
--Además de ser utilizado para la suma, el operador + también se utiliza para concatenar (unir) dos cadenas de texto (strings).

EJM : 

 */

const message = "Hola" + "Coder";




