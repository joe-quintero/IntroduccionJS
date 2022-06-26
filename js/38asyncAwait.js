//Async / Await

function descargarNuevosClientes(){
	return new Promise(resolve =>{
		console.log('Descargando Clientes... Espere...');

		setTimeout( () => {
			resolve('Los clientes fueron Descargados');
		},3000 );
	});
}

async function app() {
	try {
		const resultado = await descargarNuevosClientes();
		console.log('Este codido si se bloquea');
		console.log(resultado);
	} catch (error){
		console.log(error) 
	}
}

app();

console.log('Este codido no se bloquea');

 

/*setInterval(() => console.log('Set Timeout...'),3000); //Al igual que en la linea 15 esta funcion muestra el returrn luego de cada intervalo de tiempo identificado
*/

/*setTimeout( function() {// Luego de ejecutar aparece el return, 1000 es 1 segundo
	console.log('set timeout...')
},5000);*/