//Bucle For

for (let i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(`Este nuemro ${i} es par`);
	}else{
		console.log(`Este numero ${i} no es par`);
	}
}console.log('--------------------')


const carrito = [
	{nombre: 'Monitor de 20 pulgadas', precio: 500},
	{nombre: 'Televisor 10 pulgadas', precio: 1000},
	{nombre: 'Control Netflix', precio: 50},
	{nombre: 'Aceite 20-50 mineral', precio: 9},
	{nombre: 'Filtro de Aceite', precio: 5},
	{nombre: 'Caucho 185-65-14', precio: 99},
];

for (let i = 0; i < carrito.length; i++) {
	console.log(carrito[i]);
}