import './ListaGasto.css'
const ListaGasto = ({propGasto}) => { 

    return (
    <div className='itemLista'>
        <p id='itemNome'>{propGasto.nome}</p>
        <p>R$ {propGasto.valor}</p>
        <p>{propGasto.tipo}</p>
        <button className="excluir">x</button>
    </div>
  )
}

export default ListaGasto

// implementar {cambio.sigla} no segundo p e tirar o R$
//implementar primeira letra do nome toUpperCase (inputGasto)
