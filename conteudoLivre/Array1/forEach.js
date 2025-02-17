// forEach

const frutas = ['Maçã', 'Uva', 'Banana'];


frutas.forEach((fruta) => {
    console.log(fruta)
})


const nomes = ["João", "Maria", "Ana"];

nomes.forEach((nome) => console.log(`Olá, ${nome}!`));


const numeros = [10, 20, 30]
const dobrados = []

numeros.forEach((numero) => {
    dobrados.push(numero * 2)
})

console.log(dobrados)

const produtos = [
    {nome: "notebook", preco: 6000},
    {nome: "televisão", preco: 1500},
    {nome: "ventilador", preco: 150}
]

produtos.forEach((produto) => {
    console.log(`${produto.nome} : ${produto.preco}`)
})