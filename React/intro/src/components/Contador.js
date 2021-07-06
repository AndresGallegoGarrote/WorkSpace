import React , {Fragment} from 'react'

const Contador = () => {
    //let [Numero, setNumero]= setState(0)\\ numero es como el nombre del estado, en este caso el estado es useState que empieza en 0 y lo que ayuda a cambiarlo es cuando seteo con setNumero. // MODIFICADO OJO, del original a incremento, del incremento al for.// sfc abreviatura para estructura funcion.
    let aumentar = () =>{
    for(let i = 0; i < 1; i++)
        console.log('click')}
    return (  
    <Fragment>
    <h2>H2 dentro del fragment de Contador</h2>
    <button onClick={aumentar}>Aumentar</button>
    </Fragment>
    )
}
 
export default Contador;