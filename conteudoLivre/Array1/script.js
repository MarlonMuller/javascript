// for in - for of e for each

// for in

const pessoa = {nome: "Marlon", idade: 28, cidade: "Gravataí"}

for( chave in pessoa) {
    console.log(`${chave} : ${pessoa[chave]}`)
}


// for of

const numeros = [10, 20, 30]

for(let numero of numeros) {
    console.log(numero)
}

// forEach

const frutas = ["Maçã", "Banana", "Uva"]

frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`)
})