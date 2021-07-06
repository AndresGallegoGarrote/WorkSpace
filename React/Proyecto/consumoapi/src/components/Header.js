import React from 'react'


const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper  cyan darken-4">
            {/* Hago uso del título y deshabilito el href !# */}
            <a href="#!" className="brand-logo">{titulo} </a>

        </nav>
     );
}
 
export default Header;