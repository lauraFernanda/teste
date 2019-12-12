import React, {useState} from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api"
import Cadastrar from "../../assets/Icon2.png";
export default function Cadastro({history}){
  const[nome, setNome] = useState("");
  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");

  async function handleSubmit(event){
    event.preventDefault();
    try{
    await api.post("/Us", {
      nome,
      email,
      senha
    })
    history.push("/Cadastro")
  }catch(erro){
    alert("Nome, email ou senha inválidos!")
  }
  }

  return (
    <Container>
      <form onSubmit = {handleSubmit}>
        <div className="title">
          <div>
            <img src={Cadastrar} alt="Cadastrar"/>
          </div> 
        </div>
        <div className="nome">
          <input type="nome" required placeholder="Digite seu nome" onChange={event => setNome(event.target.value)}/>
        </div>
        <div className="email">
          <input type="email" required placeholder="Digite seu email" onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="senha">
          <input type="senha" required placeholder="Digite sua senha" onChange={event => setSenha(event.target.value)}/>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div> 
        <div>
        <Link className="lk" to="/">
          <button type="button">Voltar</button>
          </Link>
       </div>
      </form>
    </Container>
  );
  }
