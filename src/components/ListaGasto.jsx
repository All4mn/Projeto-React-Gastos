import '../style/ListaGasto.css'
const ListaGasto = ( {propGasto,removerGasto,isClicked}) => { 

  return (
    <div className='itemLista'>
      <div className={isClicked ? 'outraItemLista corlistaescuro' : 'outraItemLista corlistaclaro'} >
          <p id='itemNome'>{propGasto.nome}</p>
          <p>R$ {propGasto.valor}</p>
          <p>{propGasto.tipo}</p>
      </div>
          <i className="bi bi-x-circle-fill"  onClick={()=>{removerGasto(propGasto.id)}} id='excluir'></i>
    </div>
  )
}

export default ListaGasto

// implementar {cambio.sigla} no segundo p e tirar o R$