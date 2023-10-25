import Image from 'next/image'
import { Inter } from 'next/font/google'
import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const questaoteste = new QuestaoModel(1, "melhor cor?", [
    RespostaModel.errada('verde'),
    RespostaModel.errada('preto'),
    RespostaModel.errada('vermelhor'),
    RespostaModel.certa('azul'),
  ])
  
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Questao valor={questaoteste} />

    </div>
  )
}
