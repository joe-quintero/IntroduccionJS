// Arrow Functions

const sumar1 = (n1,n2) => console.log(n1 + n2);	//Es la msma funcion de la linea 5 (Cuando la funcion solo  tiene u linea de codigo las llaves son opcionales)

const sumar2 = function(n1,n2){
	console.log(n1 + n2);
}
sumar2(5,10 );


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');


/* ------------------ Copiamos del 17metodos_arrays.js ------------------ */
const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito = [
	{nombre: 'Monitor de 20 pulgadas', precio: 500},
	{nombre: 'Televisor 10 pulgadas', precio: 1000},
	{nombre: 'Control Netflix', precio: 50},
	{nombre: 'Aceite 20-50 mineral', precio: 9},
	{nombre: 'Filtro de Aceite', precio: 5},
	{nombre: 'Caucho 185-65-14', precio: 99},
]


resultado = carrito.some(producto => producto.nombre === 'Aceite 20-50 mineral');
/*resultado = carrito.some(function(producto){
	return producto.nombre === 'Aceite 20-50 mineral'
})*/ //Esta funcion es la msima de la linea 19
console.log(resultado);



resultado = carrito.some(producto => producto.nombre === 'Aceite 15-40 mineral');
/*resultado = carrito.some(function(producto){
	return producto.nombre === 'Aceite 15-40 mineral'
})*/ //Esta funcion es la msima de la linea 27
console.log(resultado);



resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
/*resultado = carrito.reduce(function(total, producto) {
		return total + producto.precio
}, 0)*/ //Esta funcion es la msima de la linea 45

console.log(resultado); 



resultado = carrito.filter(producto => producto.precio > 500);
/*resultado = carrito.filter(function(producto){
	return producto.precio > 500
});*/ //Esta funcion es la msima de la linea 54
console.log(resultado)


resultado = carrito.filter(producto => producto.nombre === 'Aceite 20-50 mineral');
/*resultado = carrito.filter(function(producto){
	return producto.nombre === 'Aceite 20-50 mineral'
});*/ //Esta funcion es la msima de la linea 61
console.log(resultado)
