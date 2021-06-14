let total;
total = Math.PI;
console.log(total)
total = Math.round(2.3);
console.log(total)
total = Math.round(2.5);
console.log(total)
total = Math.ceil(2.1)/*redondea hacia arriba*/
console.log(total)
total = Math.floor(2.9)/*redondea hacia abajo*/
console.log(total)

// Raiz cuadrada:
total = Math.sqrt(25);
console.log(total)
//valor absoluto
total = Math.abs(-7000)
console.log(total)
//Potencia, 2 elevado a 3.primero la Base. separado por comas.
total = Math.pow(2, 3)
console.log(total)
//encontrar el numero minimo de una array. salida: el de menor valor dentro de la array.
total = Math.min(3,2,4,5,7)
console.log(total);
//aleatorio saca un numero aleatoria hasta 1
total = Math.random(); 
console.log(total);
//aleatorio pero un rango distinto del 0-1. `total = Math.floor(Math.random()*140)` para redondear a lo bajo el resultado del random, evitando asi los decimales

total = Math.floor(Math.random()*140);
console.log(total);