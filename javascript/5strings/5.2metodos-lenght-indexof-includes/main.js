const longitud ='con este metodo cuento los caracteres de este string';
console.log("esta cadena tiene:", longitud.length,"caracteres");

console.log("metodo indexOf:");
console.log(longitud.indexOf('este',0)); // el segundo valor indica desde que posicion debe comenzar la busqueda, por defecto la primera posicion: 0.

console.log(longitud.includes("este"));// en caso de que el elemento de la busqueda se encentre devulve true, sino false.