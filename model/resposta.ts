export default class RespostaModel {
    // campos privados
    #valor: string
    #certa: boolean
    #revelada: boolean

    
    // constructor => para uma nova instancia da classe
    constructor(valor: string, certa: boolean, revelada: false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    // getter methods
    get valor() {return this.#valor}
    get certa() {return this.#certa}
    get revelada() {return this.#revelada}
}