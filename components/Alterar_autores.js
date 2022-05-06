import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";
import styles from '../styles/Card.module.css'
import api from '../pages/api/api.js'
import { useEffect, useState } from 'react'

export default function Atualiza(props) {

  const data = (e) => e.replace("T00:00:00.000Z", '')
  
  const [autores, setAutores] = useState({
    nome: props.nome,
    sobrenome: props.sobrenome,
    data_de_nascimento: data(props.data_de_nascimento)
  });
  let router = useRouter();
  
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAutores({ ...autores, [id]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    id: props.id,
    nome: autores.nome,
    sobrenome: autores.sobrenome, 
    data_de_nascimento: autores.data_de_nascimento,
    }
    console.log(data);
    const response = await axios.put("https://skeleton-nodejs.guilhermetombin.repl.co/atualizar", data)
     if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/Pagina_autores')
    }
    console.log(response)

  }
  
  return (
    <>
      <div className={styles.loginbox}>
        <h2>Alterar Autor</h2>
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
            <input id="data_de_nascimento"
              type="date"
              value={autores.data_de_nascimento}
              onChange={handleInputChange} />
            <label>Data de nascimento</label>
          </div>
          <center>
            <button type="submit">Alterar</button>
          </center>
        </form>
      </div>
    </>
  )
}