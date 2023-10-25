
// styles
import styles from "../styles/Questao.module.css";

// components
import Enunciado from "./Enunciado";
import QuestaoModel from "@/model/questao";
import Resposta from "./Resposta";


const letras = [
    {valor: 'A', cor: '#f2c866'},
    {valor: 'B', cor: '#f266ba'},
    {valor: 'C', cor: '#85b4f2'},
    {valor: 'D', cor: '#bce596'},
]

interface QuestaoProps {
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
}


const Questao = (props: QuestaoProps) => {
    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, i) => {
            return <Resposta key={i} valor={resposta} indice={i} letra={letras[i].valor} corFundoLetra={letras[i].cor} respostaFornecida={props.respostaFornecida} />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            {renderizarRespostas()}
        </div>
    )
}


export default Questao;