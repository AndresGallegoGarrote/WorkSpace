import React, {Fragment} from 'react'
import "../styles/Nav.css"


const Nav = () => {
    
    
    return (  
        
    <Fragment>
    <nav className="nav">
        <a href="https://habber.com/" ><img src="habberTec-logo.png" alt="logo-principal" className= "principal"/></a>

    <span className = "logoYtexto">
        <a href="https://habber.com/soluciones/digital/" className="Digital logo"><img src="./digital-logo.png" alt="logo Digital" width="75"/></a>  
            <span className="vanishtext digitalText">Digital</span>
        <a href="https://habber.com/soluciones/data" className="Data logo"><img src="./data-logo.png" alt="logo Data" width="75" /></a> 
            <span className="vanishtext dataText">Data</span>
        <a href="https://habber.com/soluciones/ai "className="Ai logo"><img src="./ai-logo.png" alt="logo ai"width="75"/></a>
            <span className="vanishtext aiText">Ai</span>
        </span>
    </nav>
    
    </Fragment>
    )
}
 

export default Nav;