// Cadenas y String

const tweet = 'Sistema en JavaScript para llevar el control';
const producto2 = 'Aceite';

// length (total caracteres)
console.log(tweet.length); // Metodo length para indicar la cantidad de caracteres que tiene la cadena.

// Indexof (Buscar palabra) - Retorna posicion
console.log(tweet.indexOf('JavaScript')); // Muestra en que posicion comienza la palabra que busca.
console.log(producto2.indexOf('Java')) // Al no encontrar la plabra que busca muestra -1.

//Includes (Busca palabra) - Retorna truel o false
console.log(tweet.includes('JavaScript')); // true
console.log(producto2.includes('Java')) // false

