import '../style/Filtro.css'

const Filtro = ({filtrar, setFiltrar, isClicked}) => {
  return (
    <div className={isClicked ? 'filtroContainer filtroContainerCLARO' : 'filtroContainer filtroContainerESCURO'}>
        <h2>Filtrar:</h2>
        <select className='select' value={filtrar} onChange={(e) => setFiltrar(e.target.value)}>
            <option value="all">Todos</option>
            <option value="fix">Fixo</option>
            <option value="var">Variavel</option>
        </select>
    </div>
  )
}

export default Filtro