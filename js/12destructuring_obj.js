//Destructuring de Objetos

const producto = {
	nombreProducto : "Aceite 20-50 Mineral",
	precio : 300,
	disponible : true,
}

// Forma anterior
const precioProducto = producto.precio;
const nombreProducto1 = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto1 );


// Destructuring
const {precio, nombreProducto} = producto;

console.log('--------');
console.log(precio);
console.log(nombreProducto);