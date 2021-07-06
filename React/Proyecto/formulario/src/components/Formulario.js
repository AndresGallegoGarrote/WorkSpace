import React, {Fragment, useState}from 'react'

const Formulario = () => {
    //Logica
let [datos, setDatos] = useState({
    nombre:"",
    apellido:""
})
//evento onChange: pendiente de cambios en los input, so desencadenara la funcion correspondiente.

let handleInputChange = (evento) => {
    setDatos({
        ...datos,// los tres puntos hacen una copia de datos. mediante el splitoperator
        [evento.target.name]: evento.target.value//[evento.target.name] hace refencia al "parametro" de los imputs. : evento.target.value esta hace refencia al "argumento" de los imput
    })

}
let enviarDatos = (evento) => {
    evento.preventDefault(); //evento para el boton enviarDatos //event.preventDefault(), cancela el evento por defecto que hay en el submit, evitando asi el metodo get, que mostraria los datos expuestos en la url.
    console.log(`${datos.nombre} ${datos.apellido}`)
}    
    return ( 
      <Fragment>
        <h1>Formulario</h1>
        <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3">
            <input
            placeholder="nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
            >
            </input>
          </div>
          <div className="col-md-3">
            <input
            placeholder="apellido"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleInputChange}
            >
            </input>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary">Enviar</button>
          </div>
        </form>
        <h3>{datos.nombre}{datos.apellido}</h3>
      </Fragment>
     );
  }
  export default Formulario;