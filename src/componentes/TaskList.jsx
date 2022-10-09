import React from 'react'
import TareaCartas from "./TareaCartas.jsx"
import { useContext } from 'react'
import {TareaContexto} from "../context/Contexto"


function TaskList() {

  const {tareas} =useContext(TareaContexto)

if(tareas.length===0)
return <h1>NO HAY Tareas</h1>

  return (
    <div className='grid grid-cols-4  gap-3 ' >
 { tareas.map((tarea)=>(  
<TareaCartas key={tarea.id} tarea={tarea}/>
  
 ))   }


    </div>
  )
}

export default TaskList;