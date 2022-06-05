import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";
import styles from '../styles/Card.module.css'
import api from '../pages/api/api.js'
import { useEffect, useState } from 'react'

export default function Atualiza2(props){
  const [autores, setAutores]= useState([])
  useEffect( async ()=>{
    api.get('/')
      .then(response =>{
        setAutores(response.data)
        
      })
      .catch(err => {
        console.log("Deu ruim ", err)
      })
  }, [] )
  console.log(autores)
  
const data = (e) => e.replace("T00:00:00.000Z", '')
const [livros, setLivros] = useState({
    autor_id: props.autor_id,
    titulo: props.titulo,
    editora: props.editora,
    data_publicacao: data(props.data_publicacao),
    preco: props.preco
  });
  let router = useRouter();

const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLivros({ ...livros, [id]: value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    id: props.id,
    autor_id: livros.autor_id,
    titulo: livros.titulo,
    editora: livros.editora, 
    data_publicacao: livros.data_publicacao,
    preco: livros.preco
    }
    console.log(data);
    const response = await axios.put("https://skeleton-nodejs.guilhermetombin.repl.co/atualizar1", data)
   if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/Pagina_livros')
    }
    console.log(response)

  }
  
  return(
    <>
    <div className={styles.loginbox}>
    <h2>Alterar Livro</h2>
    <form onSubmit={handleSubmit}>
      <label className={styles.texto}>Autor do livro</label>
      <div className={styles.userbox}>
      <select id="autor_id" value={livros.autor_id} onChange={handleInputChange}>
        {autores.map(autor => {
      return(
          <option key={autor.id} value={autor.id}>{autor.nome}</option>)
        })}
      </select>
        </div>
      
    <div className={styles.userbox}>
   <input id="titulo"
              type="text"
              value={livros.titulo}
              onChange={handleInputChange} />
    <label>Titulo</label>
    </div>
    
    <div className={styles.userbox}>
    <input id="editora"
              type="text"
              value={livros.editora}
              onChange={handleInputChange} />
    <label>Editora</label>
    </div>

    <div className={styles.userbox}>
    <input id="data_publicacao"
              type="date"
              value={livros.data_publicacao}
              onChange={handleInputChange} />
    <label>Data de publicação</label>
    </div>

    <div className={styles.userbox}>
    <input id="preco"
              type="text"
              value={livros.preco}
              onChange={handleInputChange} />
    <label>Preço</label>
    </div>
      <center>
      <button type="submit">Alterar</button>
    </center>
    </form>
    
    </div>
    </>
  )}