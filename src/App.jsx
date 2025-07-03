import { useState } from 'react'
import './App.css'
import AddGasto from './AddGasto'
import ListaGasto from './ListaGasto'

function App() {
  const [gastos,setGasto] = useState([
    //id
    //nome
    //valor
    //tipo
  ])

  return (
    <div className='container'>
      <h1>Controle de Gastos</h1>
      <AddGasto/>
      <div>{gastos.map((objGasto)=>{
      <ListaGasto propGasto={objGasto}/>  
      })}</div>
      
    </div>
  )
}

export default App
