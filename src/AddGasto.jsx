import {useState} from 'react'
import './AddGasto.css'

const AddGasto = () => {
  const [nome,setNome] = useState("")
  const [valor,setValor] = useState("")
  const [tipo,setTipo] = useState("")
  
  const addNome = (e)=>{
    nome.setNome(e)
    setNome("")
  }
  const addValor = (e)=>{
    valor.setValor(e)
    setValor("")
  }

  const addTipo = (e)=>{
    tipo.setTipo(e)
    setTipo("")
  }

  const hoverAdd = ()=>{
    
  }

  return (
    <div className='addGasto'>
      <input type="text" placeholder='Nome' onChange={(e)=>(addNome(e.target.value))}/>
      <input type="number" placeholder='Valor'onChange={(e)=>(addValor(e.target.value))}/>
      <select onChange={(e)=>(addTipo(e.target.value))} >
          <option value="">Tipo</option>
          <option value="fixo">Fixo</option>
          <option value="variavel">Variavel</option>
      </select>
      <button>Adicionar</button>
    </div>
  )
}

export default AddGasto