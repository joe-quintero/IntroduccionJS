// Funciones
// Declaracion de Funciones

function sumar() {
	console.log(10 + 10);
}
sumar()


//Expresion de la funcion
const sumar2 = function(){
	 console.log(3+3);
}
sumar2();


//IIFE ** Esta funcion es muy util para proteger las vaiables y datos que no puedan ser leidos por otros archivos **
(function(){
	console.log('Esto es una funcion');
})(); //** Esta funcion no se debe llamar debido a que ella misma se llama  **
