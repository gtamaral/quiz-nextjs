import questoes from "../bancoDeQuestoes"

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {

    const idSelecionado = +req.query.id

    // array que so possui um elemento ==> a questao obtida pelo id
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)


    // caso o id bata com a questao
    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()

        res.status(200).json(questaoSelecionada.paraObjeto())

    } else {
        // caso nao exista uma questao selecionada ao id
        res.status(204).send()
    }
    res.status(200).json({
        id: req.query.id,
        name: "Rod #01"
    })
}




// const handler = (req:any, res:any) => {

//     // obtendo o id da url p relacionar com a questao
//     const idSelecionado = +req.query.id

//     // array que so possui um elemento ==> a questao obtida pelo id
//     const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)


//     // caso o id bata com a questao
//     if (unicaQuestaoOuNada.length === 1) {
//         const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()

//         res.status(200).json(questaoSelecionada.paraObjeto())

//     } else {
//         // caso nao exista uma questao selecionada ao id
//         res.status(204).send()
//     }

// }

// export default handler;