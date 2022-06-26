// Async Await con Dos Consultas

function descargarNuevosClientes(){
	return new Promise(resolve =>{
		console.log('Descargando Clientes... Espere...');

		setTimeout( () => {
			resolve('Los clientes fueron Descargados');
		},5000 );
	});
}

function descargarUltimosPedidos(){
	return new Promise(resolve =>{
		console.log('Descargando Pedidos... Espere...');

		setTimeout( () => {
			resolve('Los pedidos fueron Descargados');
		},3000 );
	});
}


async function app() {
	try {
		// const clientes = await descargarNuevosClientes();
		// const pedidos = await descargarUltimosPedidos();
		// console.log(clientes);
		// console.log(pedidos);

		const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
		console.log(resultado[0]);
		console.log(resultado[1]);
	} catch (error){
		console.log(error) 
	}
}

app();