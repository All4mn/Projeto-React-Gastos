import '../style/ListaGasto.css'
const ListaGasto = ( {propGasto,removerGasto}) => { 
  return (
    <div className='itemLista'>
      <div className='outraItemLista' >
          <p id='itemNome'>{propGasto.nome}</p>
          <p>R$ {propGasto.valor}</p>
          <p>{propGasto.tipo}</p>
      </div>
          <i className="bi bi-x-circle-fill botao"  onClick={()=>{removerGasto(propGasto.id)}} id='excluir'></i>
    </div>
  )
}

export default ListaGasto

// implementar {cambio.sigla} no segundo p e tirar o R$