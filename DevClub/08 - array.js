/*
String -> Textos
Numbers -> Números
Boolean -> Verdadeiro (true) ou falso (false)
Object -> objetos
Null -> nulo
Undefined -> Indefinido
array/vetor -> estrutura de dados
*/

const myArray = [20, 30, "Olá JS", { name: "Marlon", age: 27 }]

const user = [
  {
    name: "Marlon",
    age: 30,
    address: "Rua do Marlon, 123",
    id: null
  },
  {
    name: "Duda",
    age: 29,
    address: "Rua da Duda, 456",
    id: null
  },
]

const users2 = [20, 30, 490]


console.log(users2[1])

users2[1] = 454

console.log(users2[1])

const usuarios = [
    { name: 'Rodolfo', age:30},
    { name: 'Aline', age:30}
]

console.log(usuarios)

usuarios[1].name = 'Laryssa'

console.log(usuarios)

console.log(usuarios[0].age)