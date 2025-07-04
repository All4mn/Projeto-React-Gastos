import { useState } from 'react'
import './App.css'
import AddGasto from './components/AddGasto'
import ListaGasto from './components/ListaGasto'
import Filtro from './components/Filtro'

function App() {
  const [gastos,setGasto] = useState([
    //teste
    {id:1,
    nome:"Aluguel",
    valor: 1500,
    tipo: "Fixo"
    },
    {id:2,
    nome:"Restaurante",
    valor: 200,
    tipo: "Variavel"
    },
    {id:3,
    nome:"Agua",
    valor: 400,
    tipo: "Fixo"
    }
  ])

  const [criarBox,setCriarBox] = useState(false)

  const [filtrar,setFiltrar] = useState("all")

  const adicionarGasto = (nome,valor,tipo)=>{
    const newGasto = [...gastos,{
      id: Date.now(),
      nome,
      valor,
      tipo
    }]

    setGasto(newGasto)
  }

  const toggleCriarBox= () =>{
    setCriarBox(!criarBox)
  }

  const removerGasto = (id)=>{
    setGasto(gastos.filter((gastos) => gastos.id !== id))
  }



  return (
    <div className='container'>
        <div className="titulo"><h1>Controle de Gastos</h1>
        </div>
        <div>
        <button className='botaoCriar botao' onClick={toggleCriarBox}>+Criar</button>
        <Filtro filtrar={filtrar} setFiltrar={setFiltrar}/>
        </div>
        <div style={{ display: criarBox ? "block" : "none" }} >
        <AddGasto  adicionarGasto = {adicionarGasto}/>
        </div>
        <div className='gastos'>
          {gastos
          .filter((objGasto)=> 
            filtrar === "all"? true: filtrar === "fix"? objGasto.tipo === "Fixo": objGasto.tipo === "Variavel")
          .map((objGasto)=>(
            <ListaGasto 
            key={objGasto.id} 
            propGasto={objGasto} 
            removerGasto={removerGasto}/>))}
        </div>
      </div>
  )
}

export default App
