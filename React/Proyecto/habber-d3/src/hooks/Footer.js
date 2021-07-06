import React, {Fragment}from 'react'
import "../styles/Footer.css"
const Footer = () => {

    return ( 
    
    <Fragment>
    <div className="Footer">
         <div className="Madrid">
            <ul><h4>Madrid</h4></ul>
            <ul>Caleruega,81,1ºB</ul>
            <ul>28033 Madrid,España</ul>
            <ul>T:+34911255303</ul>
            <ul>F:+34911151553</ul>
            <ul>info.es@habber.com</ul>
            <ul>OFERTASDEEMPLEOMADRID</ul>
            
        </div>

        <div className="Barcelona">
            <ul><h4>Barcelona</h4></ul>
            <ul>Mare de Déu de Núria,8</ul>
            <ul>08017 Barcelona</ul>
            <ul>T: +34 911 255 303</ul>
            <ul>F: +34 911 151 553</ul>
            <ul>info.es@habber.com</ul>
        </div>

        <div className="Lisboa">
            <ul><h4>Lisboa</h4></ul>
            <ul>Av. Miguel Bombarda, 36, 2º D</ul>
            <ul>1050-165 Lisboa. Portugal</ul>
            <ul>T: +351 216 064 486</ul>
            <ul>M: +351 932 770 654</ul>
            <ul>info.pt@habber.com</ul>
        </div>

        <div className="Maputo">
            <ul><h4>Maputo</h4></ul>
            
            <ul>Francia 303</ul>
            <ul>Maputo, Mozambique</ul>
            <ul>T: +258 84 957 6534</ul>
            <ul>info.mz@habber.com</ul>
        </div>
    </div>
    </Fragment>
        
        
    
    );
}
 
export default Footer;