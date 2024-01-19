/*Desafio 4: Números ao Cubo

Crie uma função em JavaScript que recebe um array de números e retorna um novo array onde cada número é elevado ao cubo. Utilize apenas o método .map() para realizar essa operação.*/

const elevarAoCubo = [1, 2, 3, 4]; // Deve retornar [1, 8, 27, 64]

const aoCubo = elevarAoCubo.map(number => {
    return number*number*number
})

console.log(aoCubo)