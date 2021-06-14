const alumno = "pepe"
const asistencia = "ok";
console.log(asistencia.repeat(5));
console.log(`${alumno} ${asistencia}`.repeat(5));// permite repetir un valor un determinado numero de veces
document.querySelector("button").innerHTML = `${alumno} ${asistencia}`.repeat(5);

const curvaFrontend = "html css javascript react"
console.log(curvaFrontend.split(" "));// con un espacio divide por palabras
console.log(curvaFrontend.split(""));// sin espacio divide en caracteres
document.querySelector("h3").innerHTML = `${curvaFrontend.split(" ")}`;
document.querySelector("h4").innerHTML = `${curvaFrontend}`;


