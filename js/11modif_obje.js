// Modificar Objetos

const producto = {
	nombreProducto : "Aceite 20-50 Mineral",
	precio : 300,
	disponible : true,
}

console.log(producto);


//Agregar nuevas propiedades al objeto
producto.imagen = 'Imagen.jpg';

console.log(producto);


//Eliminar propiedades
delete producto.disponible;
console.log(producto);