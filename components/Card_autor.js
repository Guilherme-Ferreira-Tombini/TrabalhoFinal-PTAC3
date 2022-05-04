import Link from 'next/link'
import styles from '../styles/MenuPequeno.module.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from "next/router";

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
let router = useRouter();
async function deleta(){
  let alerta = confirm("Você deseja deletar esse autor ?");
  if(alerta == true){
    const response = await axios.delete("https://skeleton-nodejs.guilhermetombin.repl.co/deletar?id=" + parseInt(props.id))
     console.log(response);
    alert("Autor excluido com sucesso") 
        router.push('/')
  }else{
    alert("O autor não foi deletado")
  }
}
  
  return (
    <>
      <div className={styles.card}>
        <div className={styles.texto}>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h4>Data de nascimento: {dataFormatada}</h4>
          </div>
        <div className={styles.botoes}>
          
          <button className={styles.botao1} onClick={deleta}>
            Deletar
      </button>
        </div>
      </div>
    </>
  )
}