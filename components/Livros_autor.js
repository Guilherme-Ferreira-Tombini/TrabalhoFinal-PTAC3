import Link from 'next/link'
import axios from 'axios'
import { useRouter } from "next/router";
import styles from '../styles/Livros_autor.module.css'
import api from '../pages/api/api.js'
import { useEffect, useState } from 'react'



export default function Autor_Livros(props) {
  const [autores, setAutores] = useState({
    nome: props.nome,
    sobrenome: props.sobrenome,
    data_nascimento: props.data_nascimento
  });

  function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
let data = new Date(autores.data_nascimento);
let dataFormatada = (adicionaZero((data.getDate()+1).toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());

  const nome = autores.nome + " " + autores.sobrenome

  return (
    <>
      <div className={styles.frase}>
        <center>
          <h2>{nome}</h2>
          <h4>Data de nascimento: {dataFormatada}</h4>
        </center>
      </div>
    </>
  );

}