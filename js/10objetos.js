// Objetos


const producto = {
	nombreProducto : "Aceite 20-50 Mineral",
	precio : 300,
	disponible : true,
}

console.log(producto);

// Acceder a las propiedades con sintaxis de punto 

console.log(producto.nombreProducto); // Con el punto se puede acceder a las diferentes propiedades del objeto.
console.log(producto.precio);
console.log(producto.disponible);


// Acceder a las propiedades con sintaxis de corchete

console.log(producto['nombreProducto']); // Con el corchete se puede acceder a las diferentes propiedades del objeto.
console.log(producto['precio']);
console.log(producto['disponible']);