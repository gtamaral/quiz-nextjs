import styles from '../styles/Botao.module.css'
import Link from 'next/link'

interface BotaoProps {
    texto?: string
    href?: string
    onCLick?: (e: any) => void
}


const Botao = (props:BotaoProps) => {

    function renderizarBotao() {
        return (
        <button className={styles.botao} onClick={props.onCLick}>
            {props.texto}
        </button>
    )}

    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}    
        </Link>
    ) : 
        renderizarBotao()
    }    
    


export default Botao