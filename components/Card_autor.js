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
let data = new Date(props.data_nascimento);
let dataFormatada = (adicionaZero((data.getDate()+1).toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear());
  
const apagarAutor = async (IdAutor) => {
  console.log(IdAutor);
}
let router = useRouter();
async function deleta(){
  let alerta = confirm("Você deseja deletar esse autor ?");
  if(alerta == true){
    const response = await axios.delete("https://projetofinal-ptas2.guilhermetombin.repl.co/autors/"+ parseInt(props.id))
     console.log(response);
    alert("Autor excluido com sucesso") 
        router.push('/')
  }else{
    alert("O autor não foi deletado")
  }
}
  function altera(){
            router.push('/posts/' + props.id)

  }
  const nome = props.nome+" "+props.sobrenome
  return (
    <>
      <div className={styles.card}>
        <div className={styles.texto}>
        <h1><Link href={`/posts/autor/${props.id}`}>{nome}</Link></h1>
        <h4>Data de nascimento: {dataFormatada}</h4>
          </div>
        <div className={styles.botoes}>
          
          <button className={styles.botao1} onClick={deleta}>
            Deletar
      </button>
<button className={styles.botao2} onClick={altera}>Alterar</button>        
        </div>
      </div>
    </>
  )
}