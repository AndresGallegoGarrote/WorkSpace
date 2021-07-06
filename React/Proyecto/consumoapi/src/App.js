import React, { Fragment, useState, useEffect } from "react"; //30. Indico que usaré el useEffect
import Header from "./components/Header"; //4. importo el Header.js
import Formulario from "./components/Formulario"; //10. importo el Formulario.js
import Tiempo from "./components/Tiempo"; //41. importo Tiempo.js
import Error from "./components/Error"; //
//2. Modifico App.js
function App() {
  //26. Creo un state principal, el cual me traigo de Formulario.js (punto 14) y le indico a React que he traido el useState
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  }); //32.Controlo el useEffect
  const [consultar, setConsultar] = useState(false);
  //38. creo el stae para guardar el resultado
  const [resultado, setResultado] = useState({});
  //49- controlar los errores
  const [error, setError] = useState(false);
  //29. Hacemos destructuring de busqueda. Es decir paso las propiedades que quiero extraer de busqueda.
  const { ciudad, pais } = busqueda;
  //31.El useEffect estará pendiente del cambio de ciudad
  /* useEffect(() =>{
  console.log(ciudad);
}, [ciudad, pais]); */
  //36. Hago uso de la variable consultar y lo pueda ver en los props de la consola
  /* useEffect(() =>{
  console.log(ciudad);
}, [consultar]); */
  //37. Indico la funcion para consultar el apiKey
  useEffect(() => {
    const consultaAPI = async () => {
      if (consultar) {
        const appId = '75982a1660db10fe71a336e261f40d99';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        /* http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */
        //console.log(resultado);
        setResultado(resultado); //39. paso el setResultado
        setConsultar(false); //48 para que se refresque automarticamente despues de hacer la conusulta
        //50. controlo que el usuario ponga bien la ciudad
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultaAPI();
    //Esta linea deshabilita los warnings que no necesito
    //eslint-disable-next-line
  }, [consultar]);
  //51. cargar el componente de Error si lo hubiera y sino nos caragrá el componente de Tiempo.js
  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultado" />;
  } else {
    componente = <Tiempo resultado={resultado} />;
  }
  return (
    <Fragment>
      {/* 5. renderizo el Header.js */}
      <Header titulo="El tiempo en: " />
      {/* 8. creo las columnas que contendrán el formulario y el resultado del tiempo */}
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              {/* 11.Renderizo el Formulario.js */}
              {/* 27. Paso busqueda y setbusqueda al Formulario */}
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                //33. Paso setConsultar
                setConsultar={setConsultar}
              />
              </div>
               <div className="col m6 s12">
              {/* 42.Renderizo el componente Tiempo.js */}
             {/*  <Tiempo
                // 43. Paso el state resultado al componente
                resultado={resultado}
              /> */}
             {/*  52 Quitar el componente Tiempo.js y sustituirlo por {componente} */}
             {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;


