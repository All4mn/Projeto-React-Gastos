import React from 'react'

import { useState } from 'react'

const Cambio = ({setCotacao , setSigla}) => {
    const [moeda,setMoeda] = useState("")

 const buscarCotacao = async (novaMoeda) => {
    if (novaMoeda === "") {
      setCotacao(1); //multiplicado por 1, pq td é em real msm
      return;
    }

    // const datanow = new Date().toISOString().split("T")[0]; pega a data atual, mas não tem cotação atualizada para a data atual
    const data = '2024-12-31'
    const url = `https://brasilapi.com.br/api/cambio/v1/cotacao/${novaMoeda}/${data}`;

try {
    const res = await fetch(url);
    const dados = await res.json();

    if (dados && dados.cotacoes) {
      const fechamento = dados.cotacoes.find(c => c.tipo_boletim === "FECHAMENTO PTAX"); //aqui é rolo mano, basicamente a API retorna uma lista de coisas, isso aqui ta pegando a cotação certa, pq tipo tem duas cotações
      if (fechamento) {
        setCotacao(fechamento.cotacao_venda);
        setSigla(novaMoeda);
        return;
      }
    }

    setCotacao(1);
    setSigla("BRL");

  } catch (erro) {
    console.error("Erro ao buscar cotação:", erro);
    setCotacao(1);
    setSigla("BRL");
  }
};

  const handleChange = (e) => {
    const novaMoeda = e.target.value;
    setMoeda(novaMoeda);
    setSigla(novaMoeda === "" ? "BRL" : novaMoeda)
    buscarCotacao(novaMoeda); // 
  };




  return (
     <div className="cambio" > 
          <select value={moeda} onChange={handleChange}>
            <option value="">BRL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
  )
}

export default Cambio