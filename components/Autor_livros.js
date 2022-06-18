import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";
import styles from '../styles/Autor_livros.module.css'
import api from '../pages/api/api.js'
import { useEffect, useState } from 'react'

export default function Autor_Livro(props) {
  const [livros, setLivros] = useState({
    titulo: props.titulo,
    editora: props.editora,
    preco: props.preco
  });

  return(
    <>
      <div className={styles.frase}>
        <center>
          <h2>{livros.titulo}</h2>
          <h4>Editora: {livros.editora}</h4>
          <h4>Preço: R${livros.preco}</h4>
          </center>
       </div>
    </>
  );
  
}