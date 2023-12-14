import QuestaoModel from "../../model/questao";
import RespostaModel from "@/model/resposta";


const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'O que significa a sigla “www” na internet?', [
        RespostaModel.certa('World wide web'),
        RespostaModel.errada('Web world wide'),
        RespostaModel.errada('World web wide'),
        RespostaModel.errada('Web wide world ')
    ]),
    new QuestaoModel(307, 'Qual foi a primeira rede social da história da internet?', [
        RespostaModel.errada('Instagram'),
        RespostaModel.certa('Classmate'),
        RespostaModel.errada('Orkut'),
        RespostaModel.errada('MySpace')
    ]),
    new QuestaoModel(308, 'Qual é o maior clube de futebol do Nordeste?', [
        RespostaModel.certa('Santa Cruz'),
        RespostaModel.errada('Sport'),
        RespostaModel.errada('Fortaleza'),
        RespostaModel.errada('Bahia')
    ]),
    new QuestaoModel(309, 'Qual é o maior rio do mundo?', [
        RespostaModel.certa('Rio Amazonas'),
        RespostaModel.errada('Rio Nilo'),
        RespostaModel.errada('Rio Yangtzé'),
        RespostaModel.errada('Rio Mississipi')
    ]),
    new QuestaoModel(310, 'Qual é o maior deserto do mundo?', [
        RespostaModel.certa('Deserto do Saara'),
        RespostaModel.errada('Deserto da Arábia'),
        RespostaModel.errada('Deserto de Gobi'),
        RespostaModel.errada('Deserto da Patagônia')
    ]),
    new QuestaoModel(311, 'Quem foi o primeiro presidente do Brasil?', [
        RespostaModel.errada('Getúlio Vargas'),
        RespostaModel.certa('Marechal Deodoro da Fonseca'),
        RespostaModel.errada('Juscelino Kubitschek'),
        RespostaModel.errada('Fernando Henrique Cardoso')
    ]),
    new QuestaoModel(312, 'Qual é a capital da França?', [
        RespostaModel.certa('Paris'),
        RespostaModel.errada('Londres'),
        RespostaModel.errada('Roma'),
        RespostaModel.errada('Berlim')
    ]),
    new QuestaoModel(313, 'Quem escreveu "Dom Quixote"?', [
        RespostaModel.certa('Miguel de Cervantes'),
        RespostaModel.errada('William Shakespeare'),
        RespostaModel.errada('Fyodor Dostoevsky'),
        RespostaModel.errada('Charles Dickens')
    ]),
    new QuestaoModel(314, 'Qual é o menor país do mundo?', [
        RespostaModel.certa('Vaticano'),
        RespostaModel.errada('Mônaco'),
        RespostaModel.errada('Nauru'),
        RespostaModel.errada('Tuvalu')
    ]),
    new QuestaoModel(315, 'Quantos continentes existem?', [
        RespostaModel.certa('7'),
        RespostaModel.errada('5'),
        RespostaModel.errada('6'),
        RespostaModel.errada('8')
    ]),
    new QuestaoModel(316, 'Quem foi o líder do movimento pelos direitos civis nos Estados Unidos?', [
        RespostaModel.errada('Malcolm X'),
        RespostaModel.certa('Martin Luther King Jr.'),
        RespostaModel.errada('Rosa Parks'),
        RespostaModel.errada('Angela Davis')
    ]),
];

// const questoes: QuestaoModel[] = [
//     new QuestaoModel(306, 'O que significa a sigla “www” na internet?', [
//         RespostaModel.certa('World wide web'),
//         RespostaModel.errada('Web world wide'),
//         RespostaModel.errada('World web wide'),
//         RespostaModel.errada('Web wide world ')
//     ],),
//     new QuestaoModel(307, 'Qual foi a primeira rede social da história da internet?', [
//         RespostaModel.errada('Instagram'),
//         RespostaModel.certa('Classmate'),
//         RespostaModel.errada('Orkut'),
//         RespostaModel.errada('MySpace')
//     ],),
//     new QuestaoModel(308, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),
//     new QuestaoModel(309, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),
//     new QuestaoModel(310, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),
//     new QuestaoModel(310, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),
//     new QuestaoModel(310, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),
//     new QuestaoModel(310, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),
//     new QuestaoModel(310, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),
//     new QuestaoModel(310, 'qual é o maior do nordeste?', [
//         RespostaModel.certa('santa cruz'),
//         RespostaModel.errada('sport'),
//         RespostaModel.errada('fortaleza'),
//         RespostaModel.errada('bahia')
//     ],),

// ]

export default questoes;