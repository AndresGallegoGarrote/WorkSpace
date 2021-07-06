import React, {div}from 'react'
import  './Eventos.css'

const Eventos = () => {
    const click=()=>{
        console.log('estoy haciendo click');
        document.querySelector("h2").style.backgroundColor="red";
    
    const x=document.getElementById('mySelect').value;
    document.getElementById('demo').innerHTML="ha seleccionado:" +x;
    }

    const change=()=>{
        console.log('evento onChange')
        document.querySelector('h2').style.color="blue";
    }
    return ( 
        
        <div className="eventos">

            <h2 id="eventos"> Hola soy el componente evento</h2>
            <button onClick={click}>Click</button>
           <p>Seleccione una ciudad</p>
            <p id="demo"></p>
             <select id="mySelect" onChange={change}>
        <option value="Madrid">Madrid</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Valencia">Valencia</option>
        <option value="Almería">Almería</option>
      </select>
            
          

        </div>
     );
}
 
export default Eventos;