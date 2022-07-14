import React from 'react';
import '../HojasEstilos/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ texto, completada, id, completarTarea, eliminarTarea }) => {

  return (
    <div className={completada ? 'containerTarea completada' : 'containerTarea'}>
      <div
        onClick={() => completarTarea(id)}
        className='textoTarea'>
        {texto}
      </div>
      <div
        onClick={() => eliminarTarea(id)}
        className='contenedorIcono'>
        <AiOutlineCloseCircle className='iconoTarea' />
      </div>
    </div>
  )
}

export default Tarea;

