// export default (req, res) => {
//     res.status(200).json({ 
//         id: req.query.id,
//         name: "Rod #01"
//      })
// }

import questoes from "../bancoDeQuestoes"


const handler = (req, res) => {

    // obtendo o id da url p relacionar com a questao
    const idSelecionado = +req.query.id

    // array que so possui um elemento ==> a questao obtida pelo id
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)


    // caso o id bata com a questao
    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()

        res.status(200).json(questaoSelecionada.converterParaObjeto())

    } else {
        // caso nao exista uma questao selecionada ao id
        res.status(204).send()
    }

}

export default handler;