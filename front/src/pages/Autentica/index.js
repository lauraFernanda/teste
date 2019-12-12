import React, { useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Autentica from "../../assets/Icon1.png";
import api from "../../services/api"
export default function Acesso({ history }) { 
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleSubmit(event) {
      event.preventDefault();
      try{
        const use = {
          email,
          senha
        }
       const response = await api.post("/sessions", use);

     const {token} = response.data;
     console.log(token);
     if(token){
       localStorage.setItem("@CESTA/token", token);
     }   
      history.push("/PaginaInicial")
    }catch(erro){
      alert("Erro! Email ou senha inválidos!")
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>  
        <div className="title">
          <div>
            <img src={Autentica} alt="Autentica"/> 
          </div> 
        </div>
        <div className="email">
          <input type="email" required placeholder="Digite seu email" onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="senha">
          <input type="senha" required placeholder="Digite sua senha" onChange={event => setSenha(event.target.value)}/>
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
        <div> 
          <Link className="lk" to="/Cadastro">Cadastre-se</Link>
       </div>
      </form>
    </Container>
  );
}
