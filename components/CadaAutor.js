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
  let data = new Date(props.data_de_nascimento);
let dataFormatada = (adicionaZero((data.getDate()+1).toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());
  
  const [autores, setAutores] = useState({
    nome: props.nome,
    sobrenome: props.sobrenome,
    data_de_nascimento: props.data_de_nascimento
  });

  return(
    <>
      <div className={styles.frase}>
        <center>
        <h1>Autor: {autores.nome} {autores.sobrenome}</h1>
        <h4>{dataFormatada}</h4>
          </center>
       </div>
    </>
  );
  
}