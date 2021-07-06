import React, { useState, Fragment } from "react";
import Header from "./components/Header"; //2.importo Header.js
import Footer from "./components/Footer"; //5.importo el Footer.js
import Producto from "./components/Producto";//11. importo Producto.js
import Carrito from './components/Carrito';//24. importo el componente Carrito.js
function App() {
  /* 8. Creo el listado de productos */
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Zapatillas Nike", precio: 50 },
    { id: 2, nombre: "Zapatillas Rebook", precio: 40 },
    { id: 3, nombre: "Zapatillas Zara", precio: 30 },
    { id: 4, nombre: "Zapatillas Converse", precio: 85 },
  ]);
  //18. creo el state para carrito y que devuelva un array vacío.
  const [carrito, setCarrito] =useState([]);
  return (
    <Fragment>
      {/*  7. pongo el props del titulo */}
      <Header titulo="Venta de zapatillas" /> {/* 3.rednderizo el Header.js */}
      <h1>Lista de productos</h1>
      <div className="container">
        <div className="row">
        <div className="one-half column">
         {/*  9. recorro el producto del array */}
          {productos.map((producto)=>{
            /* 12. renderizo Producto.js y paso la props  de key y de productos */
            return(
              <Producto 
              key={producto.id}
              producto={producto}
             /*  19. Paso las otras funciones del state  de carrito para que se pueda renderizar */
              productos={productos}  
              carrito={carrito}  
              setCarrito={setCarrito}  
              />
            );
          })}
        </div>
          {/*  25. Renderizo el componente Carrito.js */}
          <div className="one-half column">
             <Carrito 
            //  28. Paso los props a Carrito y compruebo dichos props en el navegador con ayuda del plugin
             carrito={carrito}
             setCarrito={setCarrito}
             />
           </div>
        </div>
      <Footer /> {/* 6. Renderizo el componente Footer */}
      </div>
    </Fragment>
  );
}
export default App;