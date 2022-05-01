import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Head from 'next/head'
import Menu from '/components/Menu.js'
import Card2 from '/components/Cards1.js'
import Cadastro from '/components/Cadastro_card.js'


export default function Pagina_autores(){
  return(
    <div className={styles.container}>
    <Head>
        <title>Autores</title>
        <meta name="description" content="Generated by create next app" /> 
      </Head>
    <Menu/>
    <main className={styles.autor}>
      <Cadastro titulo="autor" link="/posts/Cadastro_autores"/>
      <Card2/>
    </main>
    <footer className={styles.footer}>
          Guilherme Ferreira Tombini - INFO 5A
      </footer>
    </div>
  ) 
}