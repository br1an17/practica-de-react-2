import {createContext ,useState,useEffect} from 'react'
import { tareas as data } from "../data/tareas.js";

export const TareaContexto = createContext()

export function TareaContextoProvider(props) {
  const [tareas, setTareas] = useState([]);


  function crearTarea(tarea) {
    setTareas([
      ...tareas,
      {
        titulo: tarea.valor,
        id: tareas.length,
        descripcion: tarea.escribir,
      },
    ]);
  }
  function borrarTarea(tareaId) {
    setTareas(tareas.filter(tarea => tarea.id !== tareaId));
  }

  useEffect(() => {
    setTareas(data);
  }, []);

 

  return (
    <TareaContexto.Provider value={{
      tareas,
      borrarTarea,
      crearTarea,
    }}>
        {props.children}
    </TareaContexto.Provider>

  )
}

