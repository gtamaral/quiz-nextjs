
// componentss
import RespostaModel from "@/model/resposta";

// styles
import styles from "../styles/Resposta.module.css";


interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

const Resposta = (props: RespostaProps) => {
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ""

    return (
        <div className={styles.resposta} onClick={(e) => props.respostaFornecida(props.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
                
                    <div className={styles.frente}>
                    <div className={styles.letra} style={{backgroundColor: props.corFundoLetra}}>{props.letra}</div>
                    <div className={styles.valor}>{resposta.valor}</div>
                    </div> 


                    <div className={styles.verso}>
                        {resposta.certa ? (
                        <div className={styles.certa}>
                            <div>A resposta certa é...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <div>A resposta certa está errada...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )}
                    </div>
            </div>
        </div>
    )
}


export default Resposta;