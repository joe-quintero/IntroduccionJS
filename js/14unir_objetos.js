// Unir Objetos

const producto = {
	nombreProducto : "Aceite 20-50 Mineral",
	precio : 300,
	disponible : true,
}

const medidas = {
	peso: '1kg',
	medida: '1m',
}


const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);