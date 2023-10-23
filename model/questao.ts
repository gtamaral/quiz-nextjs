import RespostaModel from "./resposta"

export default class QuestaoModel {
    // campos privados
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean
    // #respondida: boolean

    // constructor => para uma nova instancia da classe
    constructor(id: number, enunciado: string, respostas: any[], acertou: false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    // getter methods ===> permite obter os valores dos campos privados da classe 
    // permite acessar os valores de fora da classe
    get id() {return this.#id}
    get enunciado() {return this.#enunciado}
    get respostas() {return this.#respostas}
    get acertou() {return this.#acertou}
    
    // implementar esse metodo abaixo
    get respondida() {
        for (let resposta of this.#respostas) {
            if(resposta.revelada) return true
        }
        return false
    }
}