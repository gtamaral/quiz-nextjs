import Image from 'next/image'
import { Inter } from 'next/font/google'
import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useEffect, useRef, useState } from 'react'
import Botao from '@/components/Botao'

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
  
  function tempoEsgotado() {
    if(!questao.respondida) {
      setQuestao(questao.responderCom(-1))
    }
      
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Questao valor={questao} tempoParaResposta={6} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado}/>
      <Botao texto='teste do botao' href='/resultado'/>

    </div>
  )
}
