import { useState } from 'react'
import './App.css'
import AddGasto from './AddGasto'
import ListaGasto from './ListaGasto'

function App() {
  const [gastos,setGasto] = useState([
    //teste
    {id:1,
    nome:"aluguel",
    valor: 1500,
    tipo: "fixo"
    },
    {id:2,
    nome:"restaurante",
    valor: 200,
    tipo: "variavel"
    },
    {id:3,
    nome:"Agua",
    valor: 400,
    tipo: "fixo"
    }
  ])



  return (
    <div className='container'>
      <h1>Controle de Gastos</h1>
      <AddGasto/>
      <div className='gastos'>{gastos.map((objGasto)=>(  
      <ListaGasto key={objGasto.id} propGasto={objGasto}/>  
      ))}</div>
      
    </div>
  )
}

export default App
