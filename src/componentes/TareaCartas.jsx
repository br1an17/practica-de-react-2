import{useContext} from "react"
import {TareaContexto } from "../context/Contexto";

 function TareaCartas({tarea,}) {
 const{borrarTarea}= useContext(TareaContexto)

  return (
    
    <div className="bg-gray-800   text-white p-4 rounded-md">
        <h1 className="text-xl font-bold capitalize">{tarea.titulo}</h1>
        <p className="text-gray-500 text-sm">{tarea.descripcion}</p>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-orange-400" onClick={()=>borrarTarea(tarea.id)}
        >borrar tarea</button>

    </div>
  );
}
export default TareaCartas;
