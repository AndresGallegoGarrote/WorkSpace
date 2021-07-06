
import React, {Fragment, useState}from 'react'
import "../styles/Acordeon.css"

const Acordeon = () => {
  
  
  let datosAcordeon = [
     {
    titulo: 'Cloud',
    contenido: ["primer contenido","segundo contenido", "tercer contenido"]},
    {
      titulo: 'Data',
      contenido: "Lorem ipsum dolor sit amet."
    },
    {titulo: 'Ai',
    contenido: "LO que toque"
    },
    {titulo:'Digital',
    contenido: "etcetera"
    }];
 
    const { titulo, contenido } = datosAcordeon;
    
  
  const titulos = document.getElementsByClassName("titulos")
  // const listas = document.querySelectorAll('li')
  
  
  let [isActiveCloud, setIsActiveCloud] = useState(false)
  let [isActiveData, setIsActiveData] = useState(false)
  let [isActiveAi, setIsActiveAi] = useState(false)
  let [isActiveDigital, setIsActiveDigital] = useState(false)

 

  
  return ( 
        <Fragment>
          
          <div className="acordeon" >
            
            
              <div className="acordeontitulo tituloCloud" onClick={() => {setIsActiveCloud(!isActiveCloud)}}>
                
                
              
                  <p className="titulos">{datosAcordeon[0].titulo}{isActiveCloud ? '-' : '+'}</p>
                    {isActiveCloud && <div id="contenidoAcordeonCloud">{datosAcordeon[0].contenido[0]}</div>}
              </div>
          
               <div className="acordeontitulo tituloData" onClick={() => setIsActiveData(!isActiveData)}>
                  <p className="titulos">{datosAcordeon[1].titulo}{isActiveData ? '-' : '+'}</p>
                    {isActiveData && <div className="contenidoAcordeonData">{datosAcordeon[1].contenido}</div>}
              </div>
               <div className="acordeontitulo tituloAi" onClick={() => setIsActiveAi(!isActiveAi)}>
                   <p className="titulos">{datosAcordeon[2].titulo}{isActiveAi ? '-' : '+'}</p>
                     {isActiveAi && <div className="contenidoAcordeonAi">{datosAcordeon[2].contenido}</div>}
               </div>
               <div className="acordeontitulo tituloDigital" onClick={() => setIsActiveDigital(!isActiveDigital)}>
                   <p className="titulos">{datosAcordeon[3].titulo}{isActiveDigital ? '-' : '+'}</p>
                     {isActiveDigital && <div className="contenidoAcordeonDigital">{datosAcordeon[3].contenido}</div>}
               </div>   
            </div> 
           
            
            
            
            
        </Fragment>
     );

}
 
export default Acordeon;