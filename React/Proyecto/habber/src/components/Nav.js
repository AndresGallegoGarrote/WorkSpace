import React, {Fragment} from 'react'
import "../App.css"


const Nav = () => {
    
    
    return (  
        
    <Fragment>
    <nav className="nav">
        <a href="https://habber.com/"><img src="habberTec-logo.png" alt="logo-principal"/></a>

    <span className = "logoYtexto">
        <a href="https://habber.com/soluciones/digital/"><img src="./digital-logo.png" alt="logo Digital" width="75"/></a>  
            <span className="vanishtext digitalText">Digital</span>
        <a href="https://habber.com/soluciones/data"><img src="./data-logo.png" alt="logo Data" width="75" /></a> 
            <span className="vanishtext dataText">Data</span>
        <a href="https://habber.com/soluciones/ai"><img src="./ai-logo.png" alt="logo ai"width="75"/></a>
            <span className="vanishtext aiText">Ai</span>
    </span>
    </nav>
    <h2>pertenece al NAV</h2>
    </Fragment>
    )
}
 

export default Nav;