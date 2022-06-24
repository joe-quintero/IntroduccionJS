/* Solo pueden ser utiloizados en arreglos */

const carrito = [
	{nombre: 'Monitor de 20 pulgadas', precio: 500},
	{nombre: 'Televisor 10 pulgadas', precio: 1000},
	{nombre: 'Control Netflix', precio: 50},
	{nombre: 'Aceite 20-50 mineral', precio: 9},
	{nombre: 'Filtro de Aceite', precio: 5},
	{nombre: 'Caucho 185-65-14', precio: 99},
];

//ForEach

/*carrito.forEach(function(producto){
	console.log(producto.precio);//Se va a ejecutar tantos elementos tenga el array
});*/

carrito.forEach(producto =>	console.log(producto.precio)); // Igual que la linea 14


//Map

carrito.map(producto =>	console.log(producto.precio)); 

/*
ForEach: Funciona principalmente para recorrer un arreglo y mostrarlo.

Map: Crea un nuevo arreglo con los datos de la iteracion que realice.
*/

const arreglo1 = carrito.forEach(producto =>producto.precio);

const arreglo2 = carrito.map(producto => producto.nombre);

console.log (arreglo1); //No muestra valor porque ForEach solo recorre el arreglo
console.log (arreglo2); //Se muestra un arreglo con los parametros utilizados, en este caso unicamente con el nombre

const arreglo3 = carrito.map(producto => `Articulo: ${producto.nombre} - Valor $ ${producto.precio}`);

console.log(arreglo3); // Se creo un arreglo con un formato distinto