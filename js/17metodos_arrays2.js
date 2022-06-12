//Array Methods

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito = [
	{nombre: 'Monitor de 20 pulgadas', precio: 500},
	{nombre: 'Televisor 10 pulgadas', precio: 1000},
	{nombre: 'Control Netflix', precio: 50},
	{nombre: 'Aceite 20-50 mineral', precio: 9},
	{nombre: 'Filtro de Aceite', precio: 5},
	{nombre: 'Caucho 185-65-14', precio: 99},
]

//forEach **Va a iterar al menos una vez**
meses.forEach(function(mes){
	if (mes='Marzo') {
		 console.log('Marzo si extsite')
	}
});

//includes ** Retorna un booleano indicando si existe o no el valor en el array**
//Includes se usa en arreglos planos, no funciona bien para arrays con objetos
let resultado = meses.includes('Marzo');
console.log(resultado); 

const resultado2 = meses.includes('Diciembre');
console.log(resultado2); 



//Some **Funciona como el include pero es ideal para objetos**
resultado = carrito.some(function(producto){
	return producto.nombre === 'Aceite 20-50 mineral'
})
console.log(resultado);

resultado = carrito.some(function(producto){
	return producto.nombre === 'Aceite 15-40 mineral'
})
console.log(resultado);


// Reduce ** con este metodo podemos iterar para sacar el valor total de los prpoductos del array **
resultado = carrito.reduce(function(total, producto) {
		return total + producto.precio
}, 0)

console.log(resultado); 

// Filter ** Permite obtener un valor del array especifico, sea condicionado o del gusto que se quiera **
resultado = carrito.filter(function(producto){
	return producto.precio > 500
});
console.log(resultado)

resultado = carrito.filter(function(producto){
	return producto.nombre === 'Aceite 20-50 mineral'
});
console.log(resultado)



