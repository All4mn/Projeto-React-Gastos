
const Filtro = ({filtrar, setFiltrar}) => {
  return (
    <div>
        <h2>Filtrar:</h2>
        <select value={filtrar} onChange={(e) => setFiltrar(e.target.value)}>
            <option value="all">Todos</option>
            <option value="fix">Fixo</option>
            <option value="var">Variavel</option>
        </select>
    </div>
  )
}

export default Filtro