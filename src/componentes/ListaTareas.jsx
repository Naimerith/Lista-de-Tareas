import React, { useState } from 'react';
import Formulario from './Formulario';
import Tarea from './Tarea';
import '../HojasEstilos/ListaTareas.css';

const ListaTareas = () => {

  const [tareas, setTareas] = useState([]); /*tareas sera inicialmente un array vacio */

  const agregarTarea = tarea => {
    console.log('tarea agregada', tarea);
    if (tarea.texto.trim()) { //trim permite quitar espacios a un string. Por lo tanto si no esta vacia
      tarea.texto = tarea.texto.trim(); //se cumple esta condicion, se agrega la tarea.texto y se quitan los espacios vacios 
      const tareaActualizada = [tarea, ...tareas]; //agregamos la tarea actual y las anteriores a un []
      setTareas(tareaActualizada) //agregamos las tareas nuevas al estado;
    }
  };

  const eliminarTarea = id => {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizadas);
  };

  const completarTarea = id => {
    const tareaActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    });
    setTareas(tareaActualizadas)
  }

  return (
    <> {/*Estos son componentes fragmentos, que reemplazan lo div*/}
      <Formulario onSubmit={agregarTarea} />
      <div className='contenedorListaTarea'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id} //usamos el id como identificador unico para el key, ojo a key no podemos acceder
              id={tarea.id} // agregamos este props para poder acceder al id de cada tarea 
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }
      </div>
    </>
  )
}

export default ListaTareas;