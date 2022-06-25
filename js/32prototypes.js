//Prototypes 
// Es una funcion que esta asociada a un tipo de objeto

function cliente(nombre,apellido){
	this.nombre = nombre;
	this.apellido = apellido;
}
cliente.prototype.formaterarCliente = function(){
		return `El Cliente ${this.nombre} tiene de apellido ${this.apellido}`; 
}

function producto(nombre, precio, disponible) { // Funciona como una plantilla, para crear objetos con distintos valores
	this.nombre = nombre;
	this.precio = precio;
	this.disponible = disponible;
}
/*EL Prototype nos va a permitir crear funciones que solo se utilizan en un objeto en especifico*/
producto.prototype.formaterarProducto = function(){
		return `El producto ${this.nombre} tiene un precio de: $ ${this.precio} y la disponibilidad es ${this.disponible}` 
}

const producto1 = new producto('Laptop DELL',850,true);
const cliente1 = new cliente('Joe','Quintero');


function formaterarProducto(producto){
	return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`
}

console.log(formaterarProducto(producto1));

console.log(producto1.formaterarProducto());
console.log(cliente1.formaterarCliente());




