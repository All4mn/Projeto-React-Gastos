import {useState} from 'react'
import '../style/AddGasto.css'

const AddGasto = ({adicionarGasto}) => {
  const [nome,setNome] = useState("")
  const [valor,setValor] = useState("")
  const [tipo,setTipo] = useState("")
  
  const hoverAdd = ()=>{
    if(!nome){
      alert("o campo Nome é obrigatório")
      return
    }
    if(!valor){
      alert("o campo Valor é obrigatório")
      return
    }
    if(tipo == ""){
      alert("selecione o Tipo do gasto")
      return
    }

    let arrNome = nome.split("")
    arrNome[0] = arrNome[0].toUpperCase()
    const newNome = arrNome.join("")

    adicionarGasto(newNome,valor,tipo)
    setNome("")
    setValor("")
    setTipo("")
  }

  return (
    <div className="boxGasto">
      <div className='addGasto'>
        <div className="titEinfo">
          <div id="tituloGasto">
            <h2>INSIRA AS INFORMAÇÕES SOBRE A NOVA SAÍDA</h2>
          </div>
          <div className="infoGasto">
            <input id='name' type="text" value={nome} placeholder='  Nome(obrigatório)' onChange={(e)=>(setNome(e.target.value))}/>
            <input id='value' type="number" value={valor} placeholder='  Valor(obrigatório)'onChange={(e)=>(setValor(e.target.value))}/>
            <select value={tipo} onChange={(e)=>(setTipo(e.target.value))} >
                <option value="">Tipo</option>
                <option value="Fixo">Fixo</option>
                <option value="Variavel">Variavel</option>
            </select>
          </div>
        </div>
        <div id="Add"><button className='botaoADD'onClick={hoverAdd}>Adicionar</button></div>
      </div>
    </div>
  )
}

export default AddGasto