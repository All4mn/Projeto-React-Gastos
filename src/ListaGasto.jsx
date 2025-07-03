
const ListaGasto = ({propGasto}) => {  
    return (
    <div className='listaGasto'>
        <p>{propGasto.nome}</p>
        <p>{propGasto.valor}</p>
        <p>{propGasto.tipo}</p>
    </div>
  )
}

export default ListaGasto