// styles
import styles from '../styles/Resultado.module.css'

// components
import Botao from '@/components/Botao'
import Estatistica from '@/components/Estatistica'

// router
import { useRouter } from "next/router"


export default function Resultado() {
    const router = useRouter()

    const total = router.query.total ? +router.query.total : 0
    const certas = router.query.certas ? +router.query.certas : 0
    const percentual = Math.round((certas / total) * 100) 

    return (
        <div className={styles.container}>
            <div className={styles.resultado}>
                <h1>RESULTADO FINAL</h1>
                <div style={{display: "flex"}}>
                <Estatistica texto='Perguntas' valor={total}/>
                <Estatistica texto='Certas' valor={certas}/>
                <Estatistica texto='Percentual' valor={`${percentual}%`}
                 corFundo="#DE6A33"/>
                </div>

                <Botao href='/' texto='Tentar novamente'/>
            
            </div>
        </div>
    )
}