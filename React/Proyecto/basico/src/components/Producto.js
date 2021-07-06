import React from "react";

//10. crear el componente Producto.js
//20. Agrego las demás funciones que quiero extraer dentro de producto.js
const Producto = ({ producto, carrito, setCarrito, productos }) => {
  //13- Creo esta constante para hacer destructuring de las propiedades y no tener que llamar a la sintaxis de punto
  const { nombre, precio, id } = producto;
  //16. Creo la funcion seleccionarProducto para agregar producto al carrito
  //17. Paso el id
  const seleccionarProducto = (id) => {
    console.log("añadiendo producto:", id);
    //21. Itero el arreglo de productos con un filter, el cual me creará un nuevo array de los ids filtrados
    const producto = productos.filter((producto) => producto.id === id)[0];
    //22. Seteamos el carrito. Esto quiere decir que se le va a ir cambiando el valor a carrito y que se conservarán los cambios en producto
    setCarrito([
      ...carrito, // se copia el objeto con spread operator
      producto,
    ]); //se conservará en producto
  };
  //32. creo la funcion para eliminar el producto
  const eliminarProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);
    //33.Elimino los productos del state del
    setCarrito(productos);
  };
  return (
    /*   14. Hago el return de las propiedades de producto */
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {/* 15. añado el botón para añadir los eventos */}
      {/*  31. creo el boton para eliminar el producto y además creo la condicion ternaria para indicar al sistema que si el usuario pulsa el boton de comprar lo añada al carrito pero si en caso contrario  pulsa el botón de eliminar lo borre del carrito*/}
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};
export default Producto;