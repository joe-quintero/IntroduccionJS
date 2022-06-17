
function sumar(numero1, numero2){ // Numero 1 y 2 son parametros
	console.log(numero1+numero2);
}
sumar(10,10); // Argumentos o los valores reales
sumar(5,10);
sumar(100,50);
sumar(200,300);
sumar(15,25);


const multiplicar = function(n1,n2){
	console.log(n1*n2);
}
multiplicar(5,10); 
multiplicar(6,10); 
multiplicar(7,10); 
multiplicar(8,10); 
multiplicar(9); //NaN = valor por no indicar valor 


function sumar2(num1 = 0, num2 = 0){ // Estos parmetros tienen un valor por default, en caso que no se nombre el valor toma el valor por default
	console.log(num1+num2);
}
sumar2(1); // la operacion se realiza 1+0