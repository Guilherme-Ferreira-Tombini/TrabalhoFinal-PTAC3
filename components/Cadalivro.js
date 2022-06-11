import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";
import styles from '../styles/Card_unico.module.css'
import api from '../pages/api/api.js'
import { useEffect, useState } from 'react'

export default function CadaLivro(props) {
  function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
  let data = new Date(props.data_publicacao);
let dataFormatada = (adicionaZero((data.getDate()+1).toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());
  
  const [livros, setLivros] = useState({
    id: props.id,
    autorId: props.autorId,
    titulo: props.titulo,
    editora: props.editora,
    data_publicacao: props.data_publicacao,
    preco: props.preco
  });

  return(
    <>
      <div className={styles.frase}>
        <center>
        <h1>{livros.titulo}</h1>
        <h4>Editora: {livros.editora}</h4>
        <h4>Data de publicação: {dataFormatada}</h4>
        <h4>Atualmente o livro custa ${livros.preco}</h4>
          </center>
       </div>
    </>
  );
  
}