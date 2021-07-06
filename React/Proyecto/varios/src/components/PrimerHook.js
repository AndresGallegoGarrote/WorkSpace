import React,{useState} from 'react'
import './PrimerHook.css'

const PrimerHook = ({value = 0}) => {
    const [contador,setContador] =useState(value);
    // console.log(contador , setContador);

    const clickAdd = () => {
        setContador(contador +1)
    }
    const clickLess = () => {
        setContador(contador -1)
    }
    const clickReset = () => {
        setContador(value)
    }
    
    return ( 
        <div className="primerHook" id="primerHook">
        <h2>Hook</h2>
        <h2>{contador}</h2>
        <button onClick={clickAdd}>+1</button>
        <button onClick={clickReset}>Reset</button>
        <button onClick={clickLess}>-1</button>
        </div>
     );
}
 
export default PrimerHook;