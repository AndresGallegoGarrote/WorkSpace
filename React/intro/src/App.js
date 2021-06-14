import React from 'react'
import Contador from './components/Contador' /*esto es para traer los datos*/


function App() {
  return (
    <div className="App">
      <h1>hola mundo desde REACT</h1>
       <Contador /> {/*esto es para mostrar en pantalla el componente Contador*/}
    </div>
  );
}

export default App;