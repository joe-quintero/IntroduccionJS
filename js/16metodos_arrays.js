const numeros= [10,20,30,40,50]; //Sintaxis de los arrays *Mas usada*

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio');//sintaxis de arrays con constructor

console.log(numeros);
console.log(meses);

//** Agregar valores **
numeros[5] = 60; // Se agrega directo en el indice *No es muy comun debido a que se debe conocer la extension del array*
console.log(numeros);

numeros[5] = 70 // Si se agrga un valor en un indice existente el valor se actualiza
console.log(numeros);


//***Agregar valores con push *Se agrega al final* ***
numeros.push(80); // Se agrega el valor al final del array sin necesidad de conocer el tamaño
console.log(numeros);

numeros.push(90,100,110,120);
console.log(numeros);


//***Agregar valores con unshift *Se agrega al inicio* ***
numeros.unshift(0); // Se agrega el valor al principio del array sin necesidad de conocer el tamaño
console.log(numeros);

numeros.unshift(-30,-20,-10);
console.log(numeros);


//*** Eliminar valor de un array ***
console.log(meses);

meses.pop(); // Elimina el ultimo elemento
console.log(meses);

meses.shift(); // Elimina el primer elemento
console.log(meses);

//*** Eliminar valor especifico del array ***
meses.splice(1,2 ); // el primer numero es el indice del valor a eliminar y el segundo numero la cantidad de valores a eliminar a partie del primer indice
console.table(meses);

/*
Estos metodos tienen desventajas, debido a que se estan mutando los valores del arreglo original, lo cual no es recomendado. Se recomienda crear un nuevo arreglo y ese deitarlos
*/
 

//** Rest Operator o Spread Operator **
const arreglo = ['Priemro','Segundo','Tercero','Cuarto','Quinto'];
console.table(arreglo);

const nuevoArreglo1 = [...arreglo, 'Sexto'] // Funciona como el Push, se copia el arreglo y se le agrega el valor al ultimo indice
console.table(nuevoArreglo1);

const nuevoArreglo2 = ['Inicio', ...arreglo]// Funciona como el unshift, se agrega el avlor al porincipio del arreglo y luego se copia.
console.table(nuevoArreglo2);




