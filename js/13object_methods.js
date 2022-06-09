"use strict" // Ejecuta el codigo de forma extricta, para seguir las buenas practicas.

const producto = {
	nombreProducto : "Aceite 20-50 Mineral",
	precio : 300,
	disponible : true,
}

Object.freeze(producto); // Congela el proyecto, el cual no permite realizarle cambios
// . freeze (no permite ningun cambio)  .seal (permite modificar el valor de las propeidades existentes)

console.log(Object.isFrozen(producto)); // Responde Booleans indicando si el objeto esta congelado

producto.imagen = 'Imagen.jpg';

console.log(producto);