/* 
5. Una tienda online da descuentos si el cliente compra más de 3 productos. Evalúa
si aplica descuento.
*/

let cantidadProductos = prompt("¿Cuántos productos has comprado o compraste?");

if (cantidadProductos > 3) {
    alert("Felicidades Tienes un descuento por comprar más de 3 productos.");
} else {
    alert("No tienes descuento, compra más de 3 productos para obtenerlo.");
}