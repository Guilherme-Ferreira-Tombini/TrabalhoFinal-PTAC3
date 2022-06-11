import Link from 'next/link'
import api from '../pages/api/api.js'
import {useEffect, useState} from 'react'
import styles from '../styles/Cards.module.css'
import Card from '/components/Card_autor.js'

export default function Cards1(){
const [autores, setAutores]= useState([])
  useEffect( async ()=>{
    api.get('/autors')
      .then(response=>{
        setAutores(response.data)
      })
      .catch(err => {
        console.log("Deu ruim ", err)
      })
  }, [])
  
  return(
    <>
      {
       autores.map(autor => {
         return(
         <div className={styles.cards} key={autor.id}>
          <div className={styles.espaco}>
           <Card id={autor.id} nome={autor.nome} sobrenome={autor.sobrenome} data_nascimento={autor.data_nascimento}/>
         </div> 
         </div>
         )
       })
      }
    </>
  )}