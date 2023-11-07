import { Inter } from 'next/font/google'
import QuestaoModel from '../model/questao'
import { useEffect, useRef, useState } from 'react'
import Questionario from '../components/Questionario'

import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


const BASE_URL = 'http://localhost:3000/api'



export default function Home() {

  const router = useRouter( )

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
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
    
  }

  const idProximaPergunta = () => {
    if(questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
    }
  }

  const irPraProximoPasso = () => {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }

  const irPraProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId)
  }
  
  const finalizar = () => {
      router.push({
        pathname: "/resultado",
        query: {
          total: idsDasQuestoes.length,
          certas: respostasCertas
        }
      })

  }


  return questao ? (
    
    <Questionario 
     questao={questao}
     ultima={idProximaPergunta() === undefined} 
     questaoRespondida={questaoRespondida} 
     irPraProximoPasso={irPraProximoPasso}/>
  ) : false 
 
  }
