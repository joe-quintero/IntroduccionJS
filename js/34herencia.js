//Herencia

class Producto{ //Se debe colocar las clases en mayusculas
	constructor(nombre,precio){
		this.nombre = nombre;
		this.precio = precio;
	}
	formatearProducto() {
		return `El producto ${this.nombre} tiene un precio de $${this.precio}`; 
	}
}

const producto1 = new Producto('PC Samsung',1500); //Instanciar

console.log(producto1);
console.log(producto1.formatearProducto());

//Utilizamos la Herencia
class Libro extends Producto { //hereda el constructor y la funcion de la clase Prodcuto
 	constructor(nombre,precio,isbn){
		super(nombre,precio);
		this.isbn = isbn;
	}
	formatearProducto(){
		return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
	}
}

const libro = new Libro('La Revolución de JavaScript',250,'111222333444555');
console.log(libro.formatearProducto());