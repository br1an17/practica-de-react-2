import React from "react";
import { useState,useContext } from "react";
import{TareaContexto} from "../context/Contexto"

function Formulariodetarea() {
  const [valor, setValor] = useState("");
const [escribir, setEscribir] = useState("")
const {crearTarea} = useContext(TareaContexto)


  const handleSubmit = (e) => {
    e.preventDefault();
    crearTarea({
    valor,
     escribir,

    })
    setValor ("")
    setEscribir("")
  };

  return (
   <div className="max-w-md mx-auto"  >
      <form onSubmit={handleSubmit} className="bg bg-slate-600 p-10 mb-4">
        <input
          placeholder="escribi tu tarea"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />

        <textarea placeholder="escribir descripcion"
          onChange= {e => setEscribir(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={escribir}
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white"
        >Guardar</button>
      </form>
      </div>
    
  );
}

export default Formulariodetarea;
