//Fetch API

//function obtenerEmpleados(){
async function obtenerEmpleados(){
	const url = 'empleados.json';

	// fetch(url)
	// 	.then(resultado => resultado.json())
	// 	.then(datos =>{
	// 		// console.log(datos.empleados);

	// 		const {empleados } = datos;
	// 			console.log(empleados);
	// 	});

	const resultado = await fetch(url);
	const datos = await resultado.json();
	console.log(datos);//Hace el mismo trabajo que con promise en la linea 5


}
obtenerEmpleados();