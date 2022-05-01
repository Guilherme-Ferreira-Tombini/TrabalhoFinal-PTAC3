import Link from 'next/link'
import styles from '../styles/MenuPequeno.module.css'

export default function Card_livro(props) {
  function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
let data = new Date(props.data_publicacao);
let dataFormatada = (adicionaZero(data.getDate().toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());
  return (
    <>
      <div className={styles.card}>
        <div className={styles.texto}>
        <h1>{props.titulo}</h1>
        <h4>Editora: {props.editora}</h4>
        <h4>Data de publicação: {dataFormatada}</h4>
        <h4>Preço: {props.preco}</h4>
          </div>
        <div className={styles.botoes} >
          
         <button className={styles.botao1}>
            Deletar
      </button>
        </div>
      </div>
    </>
  )
}