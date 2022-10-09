import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  {TareaContextoProvider} from "./context/Contexto.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TareaContextoProvider>
    <App />
    </TareaContextoProvider>
  </React.StrictMode>
)
