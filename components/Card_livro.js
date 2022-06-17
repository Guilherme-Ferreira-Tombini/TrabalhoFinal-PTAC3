import Link from 'next/link'
import styles from '../styles/MenuPequeno.module.css'
import axios from 'axios'
import api from '../pages/api/api.js'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Card_livro(props) {
const [autores, setAutores]= useState([]);
  useEffect( async ()=>{
    api.get('/autors')
      .then(response =>{
        setAutores(response.data)
        
      })
      .catch(err => {
        console.log("Deu ruim ", err)
      })
  }, [] )
  console.log(autores)
  
  function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
let data = new Date(props.data_publicacao);
let dataFormatada = (adicionaZero((data.getDate()+1).toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());

let router = useRouter();    
async function deleta(){
  let alerta = confirm("Você deseja deletar esse livro ?");
  if(alerta == true){
    const response = await axios.delete("https://projetofinal-ptas2.guilhermetombin.repl.co/livros/" + parseInt(props.id))
     console.log(response);
    alert("Livro excluido com sucesso")   
        router.push('/')
  }else{
    alert("O livro não foi deletado")
  }
}
  async function handleAutor(autorId) {
    console.log('autor id',autorId)
    const autor = await autores.find(autor => 
            autor.id === autorId ? autor.nome : '' )
    console.log(autor)
    return autor || 'Carregando'
  }
  
function altera(){
            router.push('/posts/livros/' + props.id)
  }
  return (
    <>
      <div className={styles.card}>
        <div>
        <h1><Link href={`/posts/livro/${props.id}`}><a className={styles.link}>{props.titulo}</a></Link></h1>
          <h4>Autor: {props.autorId}</h4>
        <h4>Preço: ${props.preco}</h4>
          </div>
        <div className={styles.botoes}>
         <button className={styles.botao1} onClick={deleta}>Deletar</button>
          <button className={styles.botao2} onClick={altera}>Alterar</button> 
        </div>
      </div>
    </>
  )
}