export function embaralhar(elementos: any[]): any[] {
    return elementos 
        //a funcao map cria um objeto com duas propriedades
        //Isso transforma o array original em um array de objetos com duas propriedades para cada elemento.
            .map(valor => ({valor, aleatorio: Math.random()}))
            .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
            // retorna o array de volta embaralhados aleatoriamente
            .map(obj => obj.valor)

}