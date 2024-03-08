const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', fundedOn: 1976 },
];

// Adicionar 10% de valor de mercado a todas as companhias - MAP
// Filtrar somente companhias fundadas depois de 1980 - FILTER
// Somar o valor de mercado das restantes - REDUCE

const add10porcento = company => {
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}
const filtrar = company => company.fundedOn > 1980
const somar = (acc, company) => {
    return acc + company.marketValue
}

const totalValue = companies.map(add10porcento)
.filter(filtrar)
.reduce(somar, 0)

console.log(totalValue)