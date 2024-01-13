//Escreva um programa que exiba a soma dos números de 1 a 10 no console.//

const myArrey = [1,2,3,4,5,6,7,8,9,10]

myArrey.forEach(element, index => {
    element += element[index]
    console.log(element)
});