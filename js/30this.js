//This

const reservacion = { // {} Objeto, [] Arreglo
	nombre: 'Joe',
	apellido: 'Quintero', 
	total: 500,
	pagado: false,
	informacion: function () {
		console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
	}
}

reservacion.informacion(); //This hace referencia a objeto en el cual se esta llamado la función, no funciona para los arrow function



