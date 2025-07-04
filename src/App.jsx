import { useState } from 'react'
import './App.css'
import AddGasto from './components/AddGasto'
import ListaGasto from './components/ListaGasto'

function App() {
  const [criarBox,setCriarBox] = useState(false)
  
  const toggleCriarBox= () =>{
      setCriarBox(!criarBox)
  }

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

  const adicionarGasto = (nome,valor,tipo)=>{
    const newGasto = [...gastos,{
      id: Date.now(),
      nome,
      valor,
      tipo
    }]

    setGasto(newGasto)
  }

  const removerGasto = (id)=>{
    setGasto(gastos.filter((gastos) => gastos.id !== id))
  }

  return (
    <div className='container'>
        <div className="titulo"><h1>Controle de Gastos</h1>
        </div>
        <button className='botaoCriar botao' onClick={toggleCriarBox}>+Criar</button>
        <div style={{ display: criarBox ? "block" : "none" }} >
        <AddGasto  adicionarGasto = {adicionarGasto}/>
        </div>
        <div className='gastos'>
          {gastos.map((objGasto)=>(<ListaGasto key={objGasto.id} propGasto={objGasto} removerGasto = {removerGasto}/>))}
        </div>
      </div>
  )
}

export default App
