import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";
import styles from '../styles/Card.module.css'
import api from '../pages/api/api.js'
import { useEffect, useState } from 'react'

export default function Card1() {
  const [autores, setAutores] = useState({
    nome: "",
    sobrenome: "",
    data_nascimento: ""
  });
  let router = useRouter();
  
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAutores({ ...autores, [id]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    nome: autores.nome,
    sobrenome: autores.sobrenome, 
    data_nascimento: autores.data_nascimento,
    }
    console.log(data);
    const response = await axios.post("https://projetofinal-ptas2.guilhermetombin.repl.co/autors/", data)
     if (!response.statusText === "OK") {
      alert("Erro ao adicionar post!");
    } else {
      router.push('/posts/Pagina_autores')
    }
    console.log(response)

  }
  
  return (
    <>
      <div className={styles.loginbox}>
        <h2>Autores</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.userbox}>
            <input id="nome"
              type="text"
              value={autores.nome}
              onChange={handleInputChange} />
            <label>Nome</label>
          </div>

          <div className={styles.userbox}>
            <input id="sobrenome"
              type="text"
              value={autores.sobrenome}
              onChange={handleInputChange} />
            <label>Sobrenome</label>
          </div>

          <div className={styles.userbox}>
            <input id="data_nascimento"
              type="date"
              value={autores.data_nascimento}
              onChange={handleInputChange} />
            <label>Data de nascimento</label>
          </div>
          <center>
            <button type="submit">CADASTRAR</button>
          </center>
        </form>
      </div>
    </>
  )
}