import { Inter } from 'next/font/google'
import QuestaoModel from '../model/questao'
import RespostaModel from '@/model/resposta'
import { useEffect, useRef, useState } from 'react'
import Questionario from '../components/Questionario'

const inter = Inter({ subsets: ['latin'] })

const questaoMoc = new QuestaoModel(1, "melhor cor?", [
    RespostaModel.errada('verde'),
    RespostaModel.errada('preto'),
    RespostaModel.errada('vermelhor'),
    RespostaModel.certa('azul'),
  ])

// const questaoMoc2 = new QuestaoModel(1, "melhor cor2222?", [
//     RespostaModel.errada('verde'),
//     RespostaModel.errada('preto'),
//     RespostaModel.errada('vermelhor'),
//     RespostaModel.certa('azul'),
//   

const BASE_URL = 'http://localhost:3000/api'



export default function Home() {

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMoc)
  const [respostasCertas, setRespostasCertas] = useState<number>(0)



  // fazer chamada na api da questao
  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    console.log(idsDasQuestoes)
    setIdsDasQuestoes(idsDasQuestoes)

  }

  // chamando a funcao acima
  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])


  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
    console.log(QuestaoModel.criarUsandoObjeto(json))

  }


  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])


  

  
  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    console.log(respostasCertas + (acertou ? 1 : 0))
  }

  function irPraProximoPasso() {
    
  }
  
  return (
    // <div style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   height: '100vh',
    //   justifyContent: 'center',
    //   alignItems: 'center'

    // }}>
      <Questionario questao={questao} ultima={false} questaoRespondida={questaoRespondida} irPraProximoPasso={irPraProximoPasso}/>
      

    
  )
}
