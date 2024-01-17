//Escreva um programa que exiba os números pares de 1 a 20 no console//

for (let i = 0; i < 19; i++) {
    const elements = i+2;
    console.log(elements)
    
}

console.log('Outra forma')

for (let i = 1; i <= 20; i++) {
    if(i%2 === 0){
    console.log(i);}
}