// Bucle While (Va a iniciar siempre que la condicion sea true)
let i = 0;

console.log('----- Mostrar numeros pares e impares -----')

while (i <= 10){
	if (i % 2 == 0) {
		console.log(`El numero ${i} es par.`);
	}else{
		console.log(`El numero ${i} es impar.`)
	}
	i++
}

console.log('----- Mostrar datos de un arreglo -----')

const carrito = [
	{nombre: 'Monitor de 20 pulgadas', precio: 500},
	{nombre: 'Televisor 10 pulgadas', precio: 1000},
	{nombre: 'Control Netflix', precio: 50},
	{nombre: 'Aceite 20-50 mineral', precio: 9},
	{nombre: 'Filtro de Aceite', precio: 5},
	{nombre: 'Caucho 185-65-14', precio: 99},
];

i = 0;

while(i < carrito.length){
	console.log(carrito[i]);
	i++
}


//Do While (Se va a ejecutar al menos una vez)

i = 0;

do{
	console.log(`El numero ${i} esta en un Do While`);
	i++
}while(i > 10); 