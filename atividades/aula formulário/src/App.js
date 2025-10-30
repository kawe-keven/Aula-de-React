import React, { useState } from "react";
import "./styles.css";

const NovaPropriedadeTable = () => {
  const [formData, setFormData] = useState({
    texto: "",
    descricao: "",
    nome1: "",
    nome2: "",
    nome3: "",
    tipo: "TEXTO",
    histograma: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConfirm = () => {
    console.log("Dados confirmados:", formData);
    alert("Dados confirmados! Verifique o console.");
  };

  const handleCancel = () => {
    setFormData({
      texto: "",
      descricao: "",
      nome1: "",
      nome2: "",
      nome3: "",
      tipo: "TEXTO",
      histograma: "",
    });
  };

  return (
    <div className="nova-propriedade-container">
      <div className="header">
        <h1>Nova Propriedade</h1>
      </div>

      <div className="nova-propriedade-table">
        {/* Seção Texto */}
        <div className="form-section">
          <div className="section-header">
            <span className="section-title">Texto</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-input"
              placeholder="Norme"
              value={formData.texto}
              onChange={(e) => handleInputChange("texto", e.target.value)}
            />
          </div>
        </div>

        {/* Seção Descrição */}
        <div className="form-section">
          <div className="section-header">
            <span className="section-title">Descrição</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-input"
              placeholder="Norme"
              value={formData.descricao}
              onChange={(e) => handleInputChange("descricao", e.target.value)}
            />
          </div>
        </div>

        {/* Seção Nome com 3 campos */}
        <div className="form-section">
          <div className="section-header">
            <span className="section-title">Nome</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-input"
              placeholder="Norme"
              value={formData.nome1}
              onChange={(e) => handleInputChange("nome1", e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-input"
              placeholder="Norme"
              value={formData.nome2}
              onChange={(e) => handleInputChange("nome2", e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-input"
              placeholder="Norme"
              value={formData.nome3}
              onChange={(e) => handleInputChange("nome3", e.target.value)}
            />
          </div>
        </div>

        {/* Seção Tipo */}
        <div className="form-section">
          <div className="section-header">
            <span className="section-title">Tipo</span>
          </div>
          <div className="input-group">
            <select
              className="form-select"
              value={formData.tipo}
              onChange={(e) => handleInputChange("tipo", e.target.value)}
            >
              <option value="TEXTO">TEXTO</option>
              <option value="NUMERO">NÚMERO</option>
              <option value="DATA">DATA</option>
              <option value="BOOLEANO">BOOLEANO</option>
            </select>
          </div>
        </div>

        {/* Divisor */}
        <div className="divider"></div>

        {/* Seção Histograma */}
        <div className="form-section">
          <div className="section-header">
            <span className="section-title">
              Nome para histogram (separados por "."): Ex. UnrDataTek
            </span>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-input"
              placeholder="Ex. UnrDataTek"
              value={formData.histograma}
              onChange={(e) =>
                handleInputChange("separados por", e.target.value)
              }
            />
          </div>
        </div>

        {/* Divisor */}
        <div className="divider"></div>

        {/* Botões de ação */}
        <div className="action-buttons">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            CANCELAR
          </button>
          <button type="button" className="confirm-btn" onClick={handleConfirm}>
            CONFIRMAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <NovaPropriedadeTable />
    </div>
  );
}
