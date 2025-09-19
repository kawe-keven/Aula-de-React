import React, { useState } from "react";
import "./ListaDeCompras.css"; // Importando o arquivo CSS

function ListaDeCompras() {
  const [item, setItem] = useState(""); // Estado para o item atual
  const [lista, setLista] = useState([]); // Estado para a lista de compras

  // Função para adicionar um item à lista
  const adicionarItem = () => {
    if (item !== "") {
      setLista([...lista, item]); // Adiciona o item à lista
      setItem(""); // Limpa o campo de entrada
    }
  };

  // Função para remover um item da lista
  const removerItem = (itemParaRemover) => {
    // Cria uma nova lista, filtrando e mantendo todos os itens
    // que NÃO são iguais ao item que você quer remover.
    const novaLista = lista.filter(
      (itemAtual) => itemAtual !== itemParaRemover
    );

    // Atualiza o estado com a nova lista (agora sem o item removido)
    setLista(novaLista);
  };
  return (
    <div className="container">
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)} // Atualiza o estado do item
        placeholder="Adicionar item"
        className="input" // Aplicando estilo do CSS
      />
      <button onClick={adicionarItem} className="btn-adicionar">
        Adicionar
      </button>

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
    </div>
  );
}

export default ListaDeCompras;
