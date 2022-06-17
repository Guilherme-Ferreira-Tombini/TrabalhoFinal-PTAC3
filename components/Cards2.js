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
      {
        livros.map(livro => {
          return(
          <div className={styles.cards} key={livro.id}>
     <div>
     <Card id={livro.id} titulo={livro.titulo} autorId={livro.autorId} preco={livro.preco}/>
       </div>
   </div>)
        })
      }
    </div>
  )}