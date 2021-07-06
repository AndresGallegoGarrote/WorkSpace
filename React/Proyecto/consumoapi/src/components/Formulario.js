import React, {useState} from 'react';//9. creo el componente Formulario.jsconst Formulario = () => {
    //12. creo el state para Formulario
    //14. Doy valor al state que en este caso es un objeto que contiene como propiedades ciudad y pais
//paso los valores de busqueda y setBusqueda 
    const Formulario=({busqueda, setBusqueda, setConsultar})=>{

    /*const [busqueda, setBusqueda] =useState({
        ciudad: '',
        pais:'',
    });     */

    //23.-Indico que creo la función del state para el error de
    const[error, setError]=useState(false);

    //13. Aplico destructuring para busqueda y me traigo las propiedades de ciudad y busqueda
    const {ciudad, pais} =busqueda;    //17. creamos la funcion para que con el evento pueda seteat la busqueda del formulario
    const change = (e) => {
        setBusqueda({
            ...busqueda, //copio con spread operator 
            [e.target.name]: e.target.value
        });
    }  

    const handleSubmit=(e)=> {
        e.preventDefault();
        //22 Valido el formulario para que el usuario no me mande espacios vacios con el metodo trim() y voy seteando el error
        if (ciudad.trim()===''|| pais.trim===''){
            setError(true);
            return;
        }
        setConsultar(true);
    }


      return (
      // 15. Creo el formulario y paso el value a su input
      //20. Agrego el evento onSubmit al formulario
      <form onSubmit={handleSubmit}>
      {error ? <p classNmmae="red darken-4 error">Debe rellenar todos los campos</p>: null}
        <div className="input-field col s12">
          <input 
          type="text" 
          name="ciudad"
           id="ciudad"
           value={ciudad}
        // 18. Agrego el evento  al input de ciudad 
        onChange={change}
            />
          <label htmlFor="ciudad"> Ciudad: </label>
        </div>
   
        <div className="input-field col s12">
          <select 
          name="pais" 
          id="pais" 
          value={pais}
        // 19. Agrego el evento onChange al input de pais
          onChange={change}
          >
            <option value="">Seleccione un país:</option>  
            <option value="MX">México</option>
            <option value="SV">El Salvador</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="US">Estados Unidos</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>

          {/* Creo el boton ppara enviar el submit */}
          <div className="input-field col s12">
              <input
              type="submit"
              value="El tiempo en tu ciudad:"
              className="waves-effect waves-light btn-large btn-block amber lighten-4"
              
              />

          </div>
        </div>
      </form>
    );
}

export default Formulario;