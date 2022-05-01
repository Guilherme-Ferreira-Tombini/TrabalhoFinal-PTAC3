import Link from 'next/link'
import styles from '../styles/MenuPequeno.module.css'

export default function Card_autor(props) {
function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
let data = new Date(props.data_de_nascimento);
let dataFormatada = (adicionaZero(data.getDate().toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());
  
const apagarAutor = async (IdAutor) => {
  console.log(IdAutor);
}
  return (
    <>
      <div className={styles.card}>
        <div className={styles.texto}>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h4>Data de nascimento: {dataFormatada}</h4>
          </div>
        <div className={styles.botoes}>
          
          <button className={styles.botao1}>
            Deletar
      </button>
        </div>
      </div>
    </>
  )
}