import Link from 'next/link'
import styles from '../styles/Cadastro.module.css'

export default function Cadastro_card(props) {
  return (
    <div className={styles.tudo}>
      <div className={styles.card}>
        <div className={styles.texto}>
        <h1>No site também tem a possibilidade de fazer um cadastro de um {props.titulo}</h1>
    </div>
        <div className={styles.botoes}>
          
          <a className={styles.botao1} href={props.link}>
            Cadastrar
      </a>
        </div>
      </div>
    </div>
  )
}