/*Escreva um programa que exiba os números de 1 a 100 no console, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para números que são múltiplos de ambos (3 e 5), exiba a palavra "FizzBuzz".*/

for (let i = 1; i <= 100; i++) {
    if(i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz")
    } else if(i%3 ===0){
        console.log("Fizz")
    } else if(i%5 ===0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}