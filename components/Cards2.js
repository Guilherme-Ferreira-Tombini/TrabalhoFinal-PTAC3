import Link from 'next/link'
import styles from '../styles/Cards.module.css'
import api from '../pages/api/api.js'
import {useEffect, useState} from 'react'
import Card from '/components/Card_livro.js'

export default function Cards2(){
  const [livros, setLivros]= useState([])
  useEffect(()=>{
    api.get('/livrosmostrar')
      .then(response=>{
        setLivros(response.data)
      })
      .catch(err => {
        console.log("Deu ruim ", err)
      })
  }, [])
  return(
    <>
      {
        livros.map(livro => {
          return(
          <div className={styles.cards} key={livro.id}>
     <div className={styles.espaco}>
     <Card id={livro.id} titulo={livro.titulo} editora={livro.editora} data_publicacao={livro.data_publicacao} preco={livro.preco}/>
       </div>
   </div>)
        })
      }
    </>
  )}