import { useState, useEffect } from 'react'
import './App.css'
import AddGasto from './components/AddGasto'
import ListaGasto from './components/ListaGasto'
import Filtro from './components/Filtro'

function App() {

  //States:

  const [gastos,setGasto] = useState([])
  
  const [criarBox,setCriarBox] = useState(false)
  
  const [filtrar,setFiltrar] = useState("all")
  
  const [isClicked, setIsClicked] = useState(false)
  

  //Funções:

  const adicionarGasto = (nome,valor,tipo)=>{

    const newGasto = {
      id: Date.now(),
      nome,
      valor,
      tipo
    }
    const novosGastos = [...gastos, newGasto]
    setGasto(novosGastos)

    //salvar os gastos no localStorage
    localStorage.setItem('gastos', JSON.stringify(novosGastos))
  }
  
  //carregar os gastos do localStorage
  useEffect(() => { const gastosSalvos = JSON.parse(localStorage.getItem('gastos')) || [];setGasto(gastosSalvos);}, []);

  
  const removerGasto = (id)=>{
    const novosGastos = gastos.filter((gasto) => gasto.id !== id);
    setGasto(novosGastos);

    //remover os gastos do localStorage
    localStorage.setItem('gastos', JSON.stringify(novosGastos));
  }
  
  const toggleCriarBox= () =>{
    setCriarBox(!criarBox)
  }
  
  const mudarCor = () =>{
    setIsClicked(!isClicked)
  }

  const total = () =>{
    let soma = 0
    for (let i in gastos){
      soma += parseInt(gastos[i].valor)
    }
    return soma
  }

  return (
    <div className={isClicked ? 'container container-cor-escura' : 'container container-cor-clara'}>
        <div className="box-cabecalho">
          <div className="titulo">
          <h1 id='titulo-cursiva'>Controle de</h1>
          <h1 id='titulo-caixaalta'>FINANÇAS</h1>
          </div>
          {/* (aqui em baixo) class="bi bi-brightness-high-fill" parece desnecessario, e tava dando um erro no console */}
          <i  className= {isClicked ? 'bi bi-brightness-high-fill botaoluzclaro' : 'bi bi-brightness-high-fill botaoluzescuro'} onClick={mudarCor}></i>
        </div>
        <div className='CriarFiltroCambio'>
        <button className='botaoCriar botao' onClick={toggleCriarBox}>Criar <span>+</span></button>
        <Filtro filtrar={filtrar} setFiltrar={setFiltrar}/>
        <div>
          <p>Total: {total()}</p>
        </div>
        {/* colocar aq o câmbio API */}
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
            isClicked={isClicked} // precisava disso aqui anna, agr tas funcionando - God Of Codes (allan)
            key={objGasto.id}
            propGasto={objGasto} 
            removerGasto={removerGasto}/>))}
        </div>
      </div>
  )
}

export default App
