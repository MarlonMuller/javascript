/*Desafio 1: Dobrando os Números

Crie uma função em JavaScript que recebe um array de números e retorna um novo array onde cada número é dobrado. Utilize o método .map() para realizar essa operação.*/

const dobrarNumeros = [1, 2, 3, 4]; // Deve retornar [2, 4, 6, 8]

const numerosDobrados = dobrarNumeros.map(item => {
    return  item *2;
})

console.log(numerosDobrados)