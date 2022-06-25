//Clases

class Producto{ //Se debe colocar las clases en mayusculas
	constructor(nombre,precio){
		this.nombre = nombre;
		this.precio = precio;
	}
	formatearProducto() {
		return `El producto ${this.nombre} tiene un precio de $${this.precio}`; 
	}
	precioProducto() {
		return `El precio del producto ${this.nombre} es de $${this.precio}`;
	}
}

const producto1 = new Producto('PC Samsung',1500);
const producto2 = new Producto('Teclado Microsoft',150);

console.log(producto1);
console.log(producto2);

console.log(producto2.precioProducto());