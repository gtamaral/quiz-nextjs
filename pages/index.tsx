import Image from 'next/image'
import { Inter } from 'next/font/google'
import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const questaoMoc = new QuestaoModel(1, "melhor cor?", [
    RespostaModel.errada('verde'),
    RespostaModel.errada('preto'),
    RespostaModel.errada('vermelhor'),
    RespostaModel.certa('azul'),
  ])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMoc)

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice) )
    console.log(indice)
  }
  
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Questao valor={questao} respostaFornecida={respostaFornecida}/>

    </div>
  )
}
