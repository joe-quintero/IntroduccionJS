// Arreglos o Arrays

const numero= [10,20,30,40,50]; //Sintaxis de los arrays *Mas usada*

console.log(numero); //Vista noral
console.table(numero); // Vista en tabla

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio');//sintaxis de arrays con constructor

console.log(meses);
console.table(meses);

const arreglo = ["Hola",10,true,5.5,null,{nombre: "Joe",Trabajo: "QA"},[1,2,3,'Joe']];


console.table(arreglo); //Los arrays pueden contener todo tipo de valor


//** Accedes a los valores de un arreglo **

console.log(arreglo[2]);
console.log(arreglo[5]);
console.log(arreglo[150]);

//** Conocer la extension de un arreglo **

console.log(meses.length);


//** Iterador para recorrer todos los elementos de un arreglo **

meses.forEach(function(meses) { // ** Recrre todo el arreglo **
	console.log(meses);
}) 



