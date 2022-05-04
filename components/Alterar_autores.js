import axios from 'axios'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../styles/Card.module.css'


export const getStaticPaths = async () => {
  const response = await axios.get('https://skeleton-nodejs.guilhermetombin.repl.co')
  const data = await response.data

  const paths = data.map(autores => {
    return {
      params: { id: autores.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await axios.get(`https://skeleton-nodejs.guilhermetombin.repl.co/${id}`)
  const categoria = await response.data
  return {
    props: {
      categoria
    }
  }
}

export default function Update({ autores }) {
  const [values, setValues] = useState({
    nome: "",
    sobrenome: "",
    data_de_nascimento: ""
  });

  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(values).some(
      (element) => element === ""
    )
    if (emptyFieldCheck) {
      toast.error("Preencha todos os campos!");
      return
    }
    const data = {
      ...values,
      id: Number(autores[0].id)
    }

    console.log('data', data);
    const response = await axios.put("https://skeleton-nodejs.guilhermetombin.repl.co/atualizar", data)


    if (!response.statusText === "OK") {
      toast.error("Erro ao alterar categoria!");
    } else {
      router.push('/posts/Pagina_autores')
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

 const {nome} = values || autores[0].nome;
   const {sobrenome} = values || autores[0].sobrenome;
   const {data_de_nascimento} = values || autores[0].data_de_nascimento;
  

  return (
    <>
      <div className={styles.loginbox}>
        <h2>Alterar Autor</h2>
        <h5>Autor: {nome || autores[0].nome} {sobrenome || autores[0].sobrenome}</h5>
        <form onSubmit={handleSubmit}>
          <div className={styles.userbox}>
            <input id="nome"
              type="text"
              value={nome || autores[0].nome}
              onChange={handleInputChange} />
            <label>Nome</label>
          </div>

          <div className={styles.userbox}>
            <input id="sobrenome"
              type="text"
              value={sobrenome || autores[0].sobrenome}
              onChange={handleInputChange} />
            <label>Sobrenome</label>
          </div>

          <div className={styles.userbox}>
            <input id="data_de_nascimento"
              type="date"
              value={data_de_nascimento || autores[0].data_de_nascimento}
              onChange={handleInputChange} />
            <label>Data de nascimento</label>
          </div>
          <center>
            <button type="submit">Alterar Autor</button>
          </center>
        </form>
      </div>
    </>
  );
}