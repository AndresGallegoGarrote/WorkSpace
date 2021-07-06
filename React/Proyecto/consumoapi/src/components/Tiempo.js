import React from 'react'

const Tiempo = ({resultado}) => {
   const {name, main} = resultado;
   if(!name){
       return null;
   }
   const kelvin =273.15 
   return (  
        <div>
            <h2>El tiempo en {name}:</h2>
            <p className="temperatura">
                {parseFloat(main.temp -kelvin).toFixed(2)} <span>&#x2103;</span>
            </p>

            <p>Temperatura Minima:
                {parseFloat(main.temp_min -kelvin).toFixed(2)} <span>&#x2103;</span>
            </p>

            <p>Temperatura Máxima:
                {parseFloat(main.temp_max -kelvin).toFixed(2)} <span>&#x2103;</span>
            </p>

        </div>
    );
}
 
export default Tiempo;