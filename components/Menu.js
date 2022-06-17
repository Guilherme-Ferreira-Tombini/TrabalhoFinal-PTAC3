import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Menu(){
  return(
    <>
    <div className={styles.header}>
        <Link href="/">
    <a className={styles.h1}><h1 className={styles.titulo}>Livraria Dos Amigos</h1></a></Link>    
    <div className={styles.menu}>
    <Link href="/posts/Pagina_autores"><a className={styles.link}>Autores ✍</a></Link>
    <Link href="/posts/Pagina_livros"><a className={styles.link}>Livros 📚</a></Link>
    </div>
      </div>
    
    </>
  )}