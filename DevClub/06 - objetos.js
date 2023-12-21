/*
String -> Textos
Numbers -> Números
Boolean -> Verdadeiro (true) ou falso (false)
Object -> objetos
*/

const name = "Marlon";
const age = 27;
const address = "Rua do Marlon, 123"

let marlon = {
    name: "Marlon",
    age: 30,
    address: "Rua do Marlon, 123"
}

console.log(marlon)

let marlon2 = {
    name: "Marlon",
    age: 30,
    address: {
        street: "do Marlon",
        number: 123,
        city: "Gravataí",
        state: "RS",
        country: "Brasil"
    }
}

console.log(marlon2)

console.log(marlon2.name)

console.log(marlon2.address.city)


marlon2.address.number = 55;



console.log(marlon2.address.number)