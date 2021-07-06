import React from 'react'
import './Nav.css'
import Eventos from './Eventos' 
 const Nav = () => {
     return ( 
         <div className="grid">
             <nav>
                 <a href= "#eventos" className="nav-enlace">Eventos</a>
                 <a href="#primerHook" className="nav-enlace">Hook</a>
                 <a href="#footer" className="nav-enlace"></a>
             </nav>
        </div>
      );
 }
  
 export default Nav;
