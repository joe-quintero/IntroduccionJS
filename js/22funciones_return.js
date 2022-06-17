function sumar(n1,n2){
	return n1+n2;
}

const resultado = sumar(10,10); // se llama a la funcion que es asignada a una variable, el retorno de esta funcion es el valor que va a optener la variable

console.log(resultado);


console.log('-----------------');


//Defino las variables
let total = 0, impuesto = 0;

//Creo las funciones
function agregarCarrito(precio){
	return total+= precio;
}

function impuestoPagar(total){
	return total * 0.16;
}

function totalPagar(total,impuesto){
	return total + impuesto
}


//LLeno el carrito
agregarCarrito(200);
agregarCarrito(300);
agregarCarrito(500);

//muestro el contenifo de la variable total, dentro de la funcion agregarCarrito
console.log(`Sub-Toal: ${total}`);

//Le asigno el valor del impuesto a la variable impuesto
impuesto = impuestoPagar(total);

//Muestro el Impuesto
console.log(`Impuesto a pagar: ${impuesto}`);

//Le asigno el valor que retorna la funcion totalPagar
pago = totalPagar(total,impuesto);

//Muestro valor total
console.log(`Total a pagar: ${pago}`);