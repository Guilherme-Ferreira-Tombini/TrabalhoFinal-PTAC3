import Link from 'next/link'
import styles from '../styles/Cards.module.css'
import api from '../pages/api/api.js'
import {useEffect, useState} from 'react'
import Card from '/components/Card_livro.js'


export default function Cards2(){
  const [livros, setLivros]= useState([])
  useEffect(()=>{
    api.get('/livros')
      .then(response=>{
        setLivros(response.data)
      })
      .catch(err => {
        console.log("Deu ruim ", err)
      })
  }, [])
  
  return(
    <div className={styles.tela}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      {
        livros.map(livro => {
          return(
          <div className={styles.cards} key={livro.id}>
     <div class="animate__animated animate__backInLeft">
     <Card id={livro.id} titulo={livro.titulo} autorId={livro.autorId} preco={livro.preco} editora={livro.editora}/>
       </div>
   </div>)
        })
      }
    </div>
  )}