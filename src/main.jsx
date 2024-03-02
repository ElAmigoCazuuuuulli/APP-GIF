import React from 'react'
import ReactDOM from 'react-dom/client'
import GiffExpertApp from './Giff-Expert-App'
import './styles.css' //Vite también te agiliza el cambio de estilos

//Con vite los node_modules (con los que comandos como npm run dev funcionan) no vienen por defecto por ende con el comando npm install se instalan
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiffExpertApp/>
  </React.StrictMode>
)
