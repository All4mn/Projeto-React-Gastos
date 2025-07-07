import { useState, useEffect } from 'react'
import './App.css'
import AddGasto from './components/AddGasto'
import ListaGasto from './components/ListaGasto'
import Filtro from './components/Filtro'
import Cambio from './components/Cambio'

function App() {

  //States:

  const [gastos,setGasto] = useState([])
  
  const [criarBox,setCriarBox] = useState(false)
  
  const [filtrar,setFiltrar] = useState("all")
  
  const [isClicked, setIsClicked] = useState(false)
  
  const [cotacao, setCotacao] = useState(1)

  const [sigla,setSigla] = useState("BRL")

  //Funções:

  const adicionarGasto = (nome,valor,tipo)=>{

    const novaData = new Date()
    const newDia = novaData.getDay() + 6
    const newMes = novaData.getMonth() + 1
    const newAno = novaData.getFullYear()

    const newGasto = {
      id: Date.now(),
      dia: newDia,
      mes: newMes,
      ano: newAno,
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
      soma += parseFloat(gastos[i].valor)
    }
    return Number(soma/ cotacao).toFixed(2)
  }

  return (
    <div className={isClicked ? 'container container-cor-escura' : 'container container-cor-clara'}>
        <div className="TUDO">
          <div className="box-cabecalho">
            <div className='titulo'>
            <h1 className={isClicked ? 'titulo-cursivaCLARO' : 'titulo-cursivaCLARO'} id='titulo-cursiva'>Controle de</h1>
            <h1 className={isClicked ? 'titulo-caixaaltaESCURO' : 'titulo-caixaaltaCLARO'} id='titulo-caixaalta'>FINANÇAS</h1>
            </div>
            {/* (aqui em baixo) class="bi bi-brightness-high-fill" parece desnecessario, e tava dando um erro no console */}
            <i  className= {isClicked ? 'bi bi-brightness-high-fill botaoluzclaro' : 'bi bi-moon-fill botaoluzescuro'} onClick={mudarCor}></i>
          </div>
          <div className='CriarFiltroCambio'>
          <button className='botaoCriar botao' onClick={toggleCriarBox}>Criar <span>+</span></button>
          <div id="filtroTotalCambio">
            <Filtro isClicked={isClicked} filtrar={filtrar} setFiltrar={setFiltrar}/>
            <Cambio isClicked={isClicked} setCotacao={setCotacao} setSigla={setSigla}/>
          </div>
          </div>
          {/* fiz separado msm pq senao dava mt trampo */}
          <div style={{ display: criarBox ? "block" : "none" }} >
          <AddGasto isClicked={isClicked} adicionarGasto = {adicionarGasto}/>
          </div>
          <div className="boxcabecalho">
            <div className= {isClicked ? 'cabecalho cabecalhoCLARO' : 'cabecalho cabecalhoESCURO'}>
              <h2 id='primeirofilho'>Descrição</h2>
              <h2 id='segundofilho'>Valor</h2>
              <h2 id='quartofilho'>Data</h2>
              <h2 id='terceirofilho'>Categoria</h2>
            </div>
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
              removerGasto={removerGasto}
              cotacao = {cotacao}
              sigla = {sigla}/>))}
          </div>
        </div>
      <div className="containertotal">
        <div className={isClicked ? 'total totalCLARO': 'total totalESCURO'}>
            <p>Total: {total()}</p>
        </div>
      </div>
      </div>
  )
}

export default App
