import React, {Fragment, useState} from 'react'

let Lista = () =>{
  let [arrayNumero,setArrayNumero] = useState([1,2,3,5,5])
  let agregarElemento = () =>{
    console.log(arrayNumero)
    setArrayNumero([...arrayNumero, 6])//propagar a traves del splitoperator y a concatenar (eso ha dicho)
    
  }
  return(
  <Fragment>
    <h4>h4 desde componenete Lista</h4>
    <button onClick={agregarElemento}>Agregar</button>
    {arrayNumero.map((item, index) =>{
      <p key = {index}>
        {item} -{index}</p>
    })}
  </Fragment>
);
}

export default Lista;