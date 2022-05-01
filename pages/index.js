import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Menu from '/components/Menu.js'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Livraria do Guilherme</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Menu/>

      <main className={styles.main}>
        <div className={styles.frase}>
          <center>
    <h1>Bem-vindo Usuário</h1>
    <p>Este é um site em que você pode ver ou cadastrar autores/livros para a nossa livraria online</p>
    <h5>Site do Trabalho PTAC3</h5>
          </center>
        </div>
      </main>

      <footer className={styles.footer}>
    Guilherme Ferreira Tombini - INFO 5A
       
      </footer>
    </div>
  )
}
