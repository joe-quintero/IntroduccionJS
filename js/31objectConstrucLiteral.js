//POO

/* Object Literal */
const producto = {
	nombre : 'Tablet',
	precio : 500
}


/* Object Constructor */
function Producto(nombre, precio, disponible) { // Funciona como una plantilla, para crear objetos con distintos valores
	this.nombre = nombre;
	this.precio = precio;
	this.disponible = disponible;
}
const producto2 = new Producto('Aceite 20-50 Trenton', 1500, false);
const producto3 = new Producto('Filtro ACdelco',180, true);
const producto4 = new Producto('Laptop hp', 2500, true);
const producto5 = new Producto('Laptop hp', 2500, false);
const producto6 = new Producto('Laptop hp', 2500, true);
const producto7 = new Producto('Laptop hp', 2500, false);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
console.log(producto7);

