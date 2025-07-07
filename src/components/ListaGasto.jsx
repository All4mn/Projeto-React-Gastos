import '../style/ListaGasto.css'
const ListaGasto = ( {propGasto,removerGasto,isClicked, cotacao, sigla}) => { 

  const valorNumerico = Number(propGasto.valor)
  const contacaoNumerica = Number(cotacao)
  const valorCerto = Number(valorNumerico / contacaoNumerica).toFixed(2)


  return (
    <div className='itemLista'>
      <div className={isClicked ? 'itemLista outraItemLista corlistaescuro' : 'itemLista outraItemLista corlistaclaro'} >
          <p id='itemNome'>{propGasto.nome}</p>
          <p>{sigla} {(valorCerto)}</p>
          <p>{propGasto.dia}/{propGasto.mes}/{propGasto.ano}</p>
          <p>{propGasto.tipo}</p>
      </div>
          <i className="bi bi-x-circle-fill"  onClick={()=>{removerGasto(propGasto.id)}} id='excluir'></i>
    </div>
  )
}

export default ListaGasto

// implementar {cambio.sigla} no segundo p e tirar o R$