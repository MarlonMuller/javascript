/*Desafio 2: Nomes em Maiúsculas

Crie uma função em JavaScript que recebe um array de nomes e retorna um novo array onde cada nome está em maiúsculas. Utilize o método .map() para realizar essa operação.*/

const converterParaMaiusculas = ['Ana', 'João', 'Maria']; // Deve retornar ['ANA', 'JOÃO', 'MARIA']

const convertido = converterParaMaiusculas.map(name => {
    return name.toUpperCase()
})

console.log(convertido)