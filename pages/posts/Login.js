import styles from '/styles/Home.module.css'
import Head from 'next/head'
import Menu from '/components/Menu.js'

export default function Login(){
  return(
    <div className={styles.container}>
    <Head>
        <title>Login do usuário</title>Will
        <meta name="description" content="Generated by create next app" /> 
      </Head>
    <Menu/>
    <main className={styles.main}>
    
    </main>
    <footer className={styles.footer}>
          Guilherme Ferreira Tombini - INFO 5A
      </footer>
   
    </div>
  ) 
}