const numero1 = "1";
console.log(typeof numero1);
console.log(Number.parseInt(numero1));// Number es un objeto, parseInt es un metodo.
const numero2 = "5.2";
console.log(Number.parseFloat(numero2));// parseFloat transforma cadena en numero decimal, sinolose se una parseInt aunque devuelva un entero

const numero3 = "Catorce";
console.log(Number.parseInt(numero3)); //NaN

const numero4 = 4;
console.log(Number.isInteger(numero4)); //true
console.log(Number.isInteger(numero3)); //false
console.log(Number.isInteger(numero2)); //false

