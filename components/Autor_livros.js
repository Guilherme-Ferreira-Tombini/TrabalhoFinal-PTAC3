import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";
import styles from '../styles/Card_unico.module.css'
import api from '../pages/api/api.js'
import { useEffect, useState } from 'react'

export default function Autor_Livro(props) {
  const [livros, setLivros] = useState({
    titulo: props.titulo
  });

  return(
    <>
      <div className={styles.frase}>
        <center>
        <h1>Livros relacionados ao autor</h1>
          <h2>{livros.titulo}</h2>
          </center>
       </div>
    </>
  );
  
}