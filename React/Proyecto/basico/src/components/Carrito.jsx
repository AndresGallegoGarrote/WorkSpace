import React from 'react'
import './carrito.css'//27. importo el css de carrito
import Producto from './Producto'; //29. importo el componente
//23. creo el componente Carrito.js
const Carrito = ({ carrito, setCarrito }) => {
    return (
        <div className="carrito">
            <h2>Carrito</h2>
{/* 30. mapeo cada producto condicionandolo con  un ternario */}
            {carrito.length === 0
                ? <p>No hay elementos</p>
                : carrito.map((producto) =>
                    <Producto
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        setCarrito={setCarrito}
                    />
                )}
        </div>
    );
}
export default Carrito;