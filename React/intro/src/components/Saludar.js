import React, {Fragment}from 'react'
 

const Saludar = () => {
    let saludo = "Hola"
    let temperatura=21;
     return ( 
        <Fragment> 
            <h4>{saludo} desde el componenete Saludo!!</h4>
            <h4>{temperatura >20 ? "verano" : "invierno"}</h4>

        </Fragment>
   );
 }
  
 
 export default Saludar;