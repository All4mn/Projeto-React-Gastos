import {useState} from 'react'

const AddGasto = () => {
  const [nome,setNome] = useState("")
  const [valor,setValor] = useState("")
  const [tipo,setTipo] = useState("")
  
    return (
    <div className='addGasto'>
    <input type="text" placeholder='Nome'/>
    <input type="number" placeholder='Valor'/>
    <select value="">
        <option value="">Tipo</option>
        <option value="fixo">Fixo</option>
        <option value="variavel">Variavel</option>
    </select>
    <button>Adicionar</button>
    </div>
  )
}

export default AddGasto