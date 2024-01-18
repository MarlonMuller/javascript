/*Escreva um programa que encontre o maior número em uma lista de números e exiba o resultado no console.*/

const numeros = [1, 3, 6, 17, 34, 55, 78, 99, 32, 120, 25, 64, 45]

let maiorNumero = [0]

const encontraMaiorNumero = () => {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
    }
    return maiorNumero
}

console.log(encontraMaiorNumero())
