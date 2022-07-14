import React, { useState } from 'react';
import '../HojasEstilos/Formulario.css';
import { v4 as uuidV4 } from 'uuid'

const Formulario = (props) => {

  const [input, setInput] = useState('');

  const manejarCambiosForm = e => {
    setInput(e.target.value);
    //console.log('escribiendo', e.target.value);
  };

  const manejarEnvioTarea = e => {
    e.preventDefault();
    //console.log('enviando formulario...')
    const tareaNueva = {
      id: uuidV4(), //paquete que genera id unicos
      texto: input,
      completada: false
    }
    //Enviamos el objeto al props para actualizar el estado del input 
    props.onSubmit(tareaNueva);
    //console.log(tareaNueva)
  };

  return (
    <form
      onSubmit={manejarEnvioTarea}
      className='formularioTarea'>
      <input
        onChange={manejarCambiosForm}
        type="text"
        className='tareaInput'
        placeholder='ingresa tu tarea'
        name='texto' />
      <button className='btnTarea'>Agregar Tarea</button>
    </form>
  )
}

export default Formulario