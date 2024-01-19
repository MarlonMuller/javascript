/*Desafio 5: Concatenação de Nomes

Crie uma função em JavaScript que recebe um array de strings (nomes) e retorna um novo array onde cada nome é concatenado com a string " - Dev". Utilize apenas o método .map() para realizar essa operação.*/

const concatenarComDev = ['Alice', 'Bob', 'Charlie']; // Deve retornar ['Alice - Dev', 'Bob - Dev', 'Charlie - Dev']

const concatenado = concatenarComDev.map(name => {
    return name + " - Dev"
})

console.log(concatenado)