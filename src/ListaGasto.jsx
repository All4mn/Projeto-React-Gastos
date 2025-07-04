import './ListaGasto.css'
const ListaGasto = ({propGasto}) => { 

    return (
    <div className='itemLista'>
      <div className='outraItemLista' >
          <p id='itemNome'>{propGasto.nome}</p>
          <p>R$ {propGasto.valor}</p>
          <p>{propGasto.tipo}</p>
      </div>
          <i className="bi bi-x-circle-fill" id='excluir'></i>
    </div>
  )
}

export default ListaGasto

// implementar {cambio.sigla} no segundo p e tirar o R$
//implementar primeira letra do nome toUpperCase (inputGasto)
