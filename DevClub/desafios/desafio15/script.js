//Escreva um programa que exiba a soma dos números de 1 a 10 no console.//

const myArrey = [1,2,3,4,5,6,7,8,9,10]

let soma = 0

const somaTotal = () => {
for (let i = 0; i < myArrey.length; i++) {
    soma += myArrey[i]
    console.log(`${soma}`)
}
console.log(`A soma final é ${soma}`)
}

somaTotal()