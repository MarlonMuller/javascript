/*Desafio 6: Contagem de Letras

Crie uma função em JavaScript que recebe um array de palavras e retorna um novo array onde cada elemento é a contagem de letras na palavra correspondente. Utilize apenas o método .map() para realizar essa operação.*/

const contarLetras = ['gato', 'cachorro', 'passarinho']; // Deve retornar [4, 8, 10]

const numeroLetras = contarLetras.map(word => {
    return word.length
})

console.log(numeroLetras)
