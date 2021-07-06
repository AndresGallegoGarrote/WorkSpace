import React from 'react';
// 24. pongo en medio del parentesis {cita, eliminarCita}
const Cita = ({cita, eliminarCita}) => { 
    return (
        //20.
        <div className="cita">
            <p>Nombre: <span>{cita.nombre}</span></p>
            <p>Apellido: <span>{cita.apellido}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Comentarios: <span>{cita.comentarios}</span></p>
            <button 
            className="button u-full-width"
            onClick={() =>eliminarCita(cita.id)}
            >
             Eliminar
            </button>
        </div>
      );
}
export default Cita;