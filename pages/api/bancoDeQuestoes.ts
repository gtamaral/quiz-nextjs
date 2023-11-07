import QuestaoModel from "../../model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'qual bixo transmite a dooenca de chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('barata'),
        RespostaModel.errada('pulga'),
        RespostaModel.certa('barbeiro')
    ],),
    new QuestaoModel(307, 'qual o maior ganhador da bola de ouro?', [
        RespostaModel.errada('caça rato'),
        RespostaModel.certa('messi'),
        RespostaModel.errada('neymar'),
        RespostaModel.errada('cr7')
    ],),
    new QuestaoModel(308, 'qual é o maior do nordeste?', [
        RespostaModel.certa('santa cruz'),
        RespostaModel.errada('sport'),
        RespostaModel.errada('fortaleza'),
        RespostaModel.errada('bahia')
    ],)

]

export default questoes;