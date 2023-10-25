

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'


interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}

const Temporizador = (props: TemporizadorProps) => {

    const colors = [
        { color: '#BCE596', percentage: 33 },
        { color: '#F7b801', percentage: 33 },
        { color: '#ED827A', percentage: 33 }
    ];
    
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#9fe75c', '#f5c432', '#d4473d']}        
                colorsTime={[10,3,0]}
                >{({ remainingTime }) => remainingTime}</CountdownCircleTimer>
                
                
        </div>
    )
}

export default Temporizador;