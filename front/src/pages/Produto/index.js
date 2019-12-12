import React, { useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";


export default function Produto() {
  const [nome, setNome] = useState("");
  const [quant, setQuant] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post("/produto", {
      nome,
      quant
    }
    )
    alert("Cadastrado com sucesso");
  }

  return (
    <Container>
      <div className="ali">
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar Alimento</h1>

          <input
            type="text"
            required
            placeholder="Nome"
            onChange={event => setNome(event.target.value)}
            value={nome}
          />
          <input
            type="text"
            required
            placeholder="Quantidade"
            onChange={event => setQuant(event.target.value)}
            value={quant}
          />
          <button nameClass="b1" type="submit">
            Cadastrar
          </button>

        </form>
      </div>
    </Container >
  );
}