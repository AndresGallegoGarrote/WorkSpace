import React, { Fragment, useState, useEffect } from "react";
import Formulario from './components/Formulario';
import Cita from './components/Cita';//21. importo cita
function App() {
//29. Guardamos la cita en el LocalStorage que es una especie de base de datos que me permite guardar datos de tipo String de forma local o sea en el navegador
/* let citasIniciales = localStorage.getItem('todasCitas');
if(!citasIniciales){
  citasIniciales =[]; 
}*/
let citasIniciales = JSON.parse(localStorage.getItem('todasCitas')); 
   if(!citasIniciales){
    citasIniciales=[];
  }
//30. meto la variable "array" de [citasInicales] al estado useState
  //12.crear un array para todas las citas con su estado 
  const [todasCitas, setTodasCitas] = useState([citasIniciales]);
  //28.Creo el state useEffect() que es un escuchador atento a los cambios de un componente, en este caso el del componente Cita.js
/*   useEffect(() => {
    console.log('el componente  Cita está listo o ha hecho un cambio')
  }, [todasCitas]); */
 //31 . Hago el condicional para el useEffect que es casi lo mismo que el punto 28 solo que hago el procedimiento o el algoritmo
/*  useEffect(() =>{
  let citasIniciales = JSON.parse(localStorage.getItem('todasCitas'));
  //si hay citasIniciales entonces la setee y las ponga  en el localStorage
  if(citasIniciales){ localStorage.setItem('todasCitas', JSON.stringify(todasCitas))
  }else{
    //Pero si no hay citasIniciales agrega un array vacío
    localStorage.setItem('todasCitas', JSON.stringify([]));
  }
 }, [todasCitas]);  */
 //***31 condicionamos  el useEffect del punto 29 por eso está comentado // pasamos al componete Formuulario para el paso 32*/
  useEffect(() => {
   let citasIniciales = JSON.parse(localStorage.getItem('todasCitas'));
   if(citasIniciales){ //si hay citas inicales entonces ponemos en el localStorage 
     localStorage.setItem('todasCitas', JSON.stringify(todasCitas));
   }else{ 
     localStorage.setItem('todasCitas', JSON.stringify([]))//y sino agregamos al localStorage un array vacío
   }
  }, [todasCitas]); //comporbamos en la Application del navegador y despues agregamos una nueva cita */
  //13. crear una funcion para agregar las citas del usuario 
  const crearCita = (cita) => {
    console.log(cita);
    //17.seteamos las citas
    setTodasCitas([
      ...todasCitas, //guardamos con spread operator
      cita
    ]);
  };
  // 22 Eliminar cita
/*   const eliminarCita=(id)=>{
    console.log(id);
  } */
  //25. Función para eliminar la cita
  const eliminarCita =(id) =>{
    const nuevasCitas = todasCitas.filter((cita) => cita.id !==id)
    setTodasCitas(nuevasCitas);
  };
  //26. mostar el titulo si se cumple la condición 
  const titulo = 
  todasCitas.length === 0 ? "No has elegido ninguna cita" : "Administre su cita"
  return (
    <Fragment>
      <h1>Usuarios</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
       {/*14. Traigo la cita para después llamarla de forma reactiva o dinamica*/}
            <Formulario
            crearCita={crearCita}
           />
           </div>
          <div className="one-half column">
            {/* 19. renderizo el componente Cita.js y paso sus propiedades. Además itero el array de todasCitas */}
            {/*27. Cambio el titulo para que sea de forma reactiva  */}
            <h2>{titulo}</h2>
            {todasCitas.map((cita, index)=>{
              return(
                <Cita
                key={(cita.id, index)}
                cita={cita}
                eliminarCita={eliminarCita}//23. paso eliminar cita
                 />
              )
            })}
          </div>
        </div>
      </div>    
    </Fragment>
  );
}
export default App;


