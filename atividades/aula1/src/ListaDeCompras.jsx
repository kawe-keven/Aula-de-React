import React, { useState } from "react";
import "./ListaDeCompras.css";

// Definindo o limite de itens que aparecerão no histórico
const LIMITE_HISTORICO = 5;

// A função do componente deve envolver TODAS as lógicas e o 'return'
function ListaDeCompras() {
  const [item, setItem] = useState(""); // Estado para o item atual
  const [lista, setLista] = useState([]); // Estado para a lista de compras
  // NOVO: Estado para armazenar os últimos itens adicionados (histórico)
  const [ultimosItens, setUltimosItens] = useState([]);
  // ^^^ O fechamento da função estava aqui antes! ^^^

  // Função para adicionar um item à lista
  const adicionarItem = () => {
    // 1. Normaliza e verifica se o item não está vazio
    const itemNormalizado = item.trim();

    if (itemNormalizado !== "") {
      // Opcional: Verifica se o item JÁ EXISTE na lista principal
      const itemJaExiste = lista.some(
        (itemAtual) => itemAtual.toLowerCase() === itemNormalizado.toLowerCase()
      );

      if (itemJaExiste) {
        setItem("");
        return;
      }

      // 2. Adiciona à lista principal
      setLista([...lista, itemNormalizado]);

      // 3. Atualiza o histórico de últimos itens
      setUltimosItens((historicoAtual) => {
        // Filtra o histórico para evitar duplicados nas sugestões
        const historicoFiltrado = historicoAtual.filter(
          (histItem) => histItem.toLowerCase() !== itemNormalizado.toLowerCase()
        );

        // Adiciona o novo item no início e limita o tamanho
        const novoHistorico = [itemNormalizado, ...historicoFiltrado];
        return novoHistorico.slice(0, LIMITE_HISTORICO);
      });

      // 4. Limpa o campo de entrada
      setItem("");
    }
  };

  // Função para remover um item da lista
  const removerItem = (itemParaRemover) => {
    const novaLista = lista.filter(
      (itemAtual) => itemAtual !== itemParaRemover
    );
    setLista(novaLista);
  };

  // Função para lidar com a tecla pressionada no input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      adicionarItem();
    }
  };

  // Função para usar um item do histórico (sugestão)
  const usarItemDoHistorico = (itemHistorico) => {
    setItem(itemHistorico);
  };

  return (
    // <-- CORRIGIDO: O 'return' deve ter parênteses
    <div className="container">
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Adicionar item"
        className="input"
      />

      <button onClick={adicionarItem} className="btn-adicionar">
        Adicionar
      </button>

      {/* --- Histórico de Últimos Itens Adicionados: CORRIGIDO! --- */}
      {/* CORRIGIDO: Usa ( ) para envolver o JSX condicional */}
      {ultimosItens.length > 0 && (
        <div className="historico">
          <h3>Últimos Itens Adicionados:</h3>
          <ul className="lista-historico">
            {/* CORRIGIDO: Usa ( ) para envolver o JSX dentro do .map */}
            {ultimosItens.map((histItem, index) => (
              <li key={index} className="item-historico">
                <span onClick={() => usarItemDoHistorico(histItem)}>
                  {histItem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* ---------------------------------------------------- */}

      <hr />

      <ul className="lista-compras">
        {lista.map((compra, index) => (
          <li key={index} className="item-compra">
            <span>
              {index + 1} - {compra}
            </span>{" "}
            <button onClick={() => removerItem(compra)} className="btn-remover">
              Remover
            </button>
          </li>
        ))}
      </ul>
      {lista.length === 0 && <p>Sua lista de compras está vazia!</p>}
    </div>
  ); // <-- Fechamento final do return
} // <-- Fechamento final da função ListaDeCompras

export default ListaDeCompras;
