import React, { useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Commerce from "../../assets/Icon3.png";
import api from "../../services/api"
export default function Comercio({ history }) {
  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await api.post("/comercio", {
      nome,
      rua,
      numero,
      bairro,
      cidade,
      estado
    }
    )
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <div>
            <img src={Commerce} alt="Comercio" />
          </div> 
        </div>
        <div className="nome">
          <input type="nome" required placeholder="Digite o nome do comércio" onChange={event => setNome(event.target.value)} />
        </div>
        <div className="rua">
          <input type="rua" required placeholder="Digite a rua do comércio" onChange={event => setRua(event.target.value)} />
        </div>
        <div className="numero">
          <input type="numero" required placeholder="Digite o número do comércio" onChange={event => setNumero(event.target.value)} />
        </div>
        <div className="bairro">
          <input type="bairro" required placeholder="Digite o bairro do comércio" onChange={event => setBairro(event.target.value)} />
        </div>
        <div className="cidade">
          <input type="cidade" required placeholder="Digite a cidade do comércio" onChange={event => setCidade(event.target.value)} />
        </div>
        <div className="estado">
          <input type="estado" required placeholder="Digite o estado do comércio (UF)" onChange={event => setEstado(event.target.value)} />
        </div>
        <div>
          <button type="submit">Cadastrar Comércio</button> 
        </div>
         <div>
          <Link className="lk" to="/PaginaInicial">
          <button type="button">Voltar</button>
          </Link>
        </div>
      </form>
    </Container>
  );
}