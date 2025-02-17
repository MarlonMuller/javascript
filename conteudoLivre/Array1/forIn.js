// for in

const pessoa = {nome: "Marlon", idade: 28, cidade: "Gravataí"};
const numeros = [10, 20, 30];

for(chave in pessoa){
    console.log(`${chave} : ${pessoa[chave]}`)
}

for(chave in numeros) {
    console.log(`${chave} : ${numeros[chave]}`)
}