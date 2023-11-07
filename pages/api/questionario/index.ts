import { embaralhar } from "../../../functions/arrays"
import questoes from "../bancoDeQuestoes"

const questionario = (req: any, res: any) => {
    const ids = questoes.map(questao => questao.id)
    console.log(ids)
    res.status(200).json(embaralhar(ids))
}

export default questionario;