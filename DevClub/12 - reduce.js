const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 },
]

const somado = cart.reduce((acumulador, valorInicial) => {
    return acumulador * valorInicial.pricePerKg
},1)

console.log(somado)