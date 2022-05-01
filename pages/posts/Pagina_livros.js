import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Head from 'next/head'
import Menu from '/components/Menu.js'
import Card from '/components/Cards2.js'
import Cadastro from '/components/Cadastro_card.js'

export default function Pagina_livros(){
  return(
    <div className={styles.container}>
    <Head>
        <title>Livros</title>
        <meta name="description" content="Generated by create next app" /> 
      </Head>
    <Menu/>
    <main className={styles.livro}>
      <Cadastro titulo="livro" link="/posts/Cadastro_livros"/>
      <Card/>
    </main>
    <footer className={styles.footer}>
          Guilherme Ferreira Tombini - INFO 5A
      </footer>
    </div>
  ) 
}