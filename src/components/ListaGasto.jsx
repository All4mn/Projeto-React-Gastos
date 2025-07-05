import '../style/ListaGasto.css'
const ListaGasto = ( {propGasto,removerGasto,isClicked}) => { 

  // o onclick do app pra mudar as cores n ta funcionando aq, se alguem puder tentar conectar eles eu agradeço - anna

  return (
    <div className='itemLista'>
      <div className={isClicked ? 'outraItemLista corlistaescuro' : 'outraItemLista corlistaclaro'} >
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