/*Escreva um programa que compare a idade de duas pessoas e exiba "A primeira pessoa é mais velha" se a idade da primeira pessoa for maior que a idade da segunda pessoa, ou "A segunda pessoa é mais velha" se for menor.*/

const agePerson1 = 27
const agePerson2 = 27

if(agePerson1 > agePerson2) {
    console.log(`A primeira pessoa (${agePerson1} anos) é mais velha do que a segunda pessoa (${agePerson2} anos)`)
} else if (agePerson1 < agePerson2){
    console.log(`A segunda pessoa (${agePerson2} anos) é mais velha do que a primeira pessoa (${agePerson1} anos)`)
} else {
    console.log(`As duas pessoas possuem a mesma idade`)
}