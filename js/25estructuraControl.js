//Estructuras de Control

const puntaje1 = '1000';
const puntaje2 = 100;
const puntaje3 = 'Joe';
const puntaje4 = true;

// Condicion If

if (puntaje1 === 1000) { //Exactamente igual tanto valor como tipo de dato
	console.log('Es puntaje si es 1000');
} else {
	console.log('El puntaje es distinto a 1000');
}

if (puntaje2 > 200) { //<> Menor y Mayor
	console.log('Puntaje es mayor a 200');
} else {
	console.log('Puntaje es menor a 200');
}

if (puntaje3 !== 'Gabo') { // DIstinto
	console.log('El puntaje es distinto que Gabo');
}else{
	console.log('El puntaje tiene como valor Gabo');
}


//Condicion Else If
console.log('-------------------------');

const rol = 'Visitante';

if (rol == 'Administrador') {
	console.log('Eres Administrador puedes editar');
}else if (rol == 'Supervisor') {
	console.log('Eres Supervisor, Puedes supervisar');
}else if (rol == 'Visitante'){
	console.log('Puedes visualizar');
}else{
	console.log('No tienes acceso');
}

 