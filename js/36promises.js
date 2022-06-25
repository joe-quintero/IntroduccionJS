//Promises

const usuarioAutenticado = new Promise((resolve, reject) => {
	const auth = true;

	if (auth) {
		resolve('Usuario autenticado'); //El Promise se cumple
	}else{
		reject('No se pudo iniciar sesión'); //El Promise no se cumple
	}
});

usuarioAutenticado
	.then( resultado => console.log(resultado)) //Arrow Function
	.catch( error => console.log(error))





/*En los Promises existen 3 valores*/
// Pending		: 	No se ha cumplido pero tampoco se ha rechazado.
// Fulfilled	: 	Ya se cumplio
// Rejected		: 	Se rehcazo o no se pudo complir.