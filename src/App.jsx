import React from "react";
import TaskList from "./componentes/TaskList";
import Formulariodetarea from "./componentes/formulariodetarea.jsx";


function App() {
  
  
  return (
    <div className="bg-zing-900 h-screen">
      <div
      className="container mx-auto p p-10">
      <Formulariodetarea  />
      <TaskList />
    </div>
    </div>
  );
}

export default App;
