const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', fundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', fundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', fundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', fundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', fundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', fundedOn: 1976 },
];

// Adicionar 10% de valor de mercado a todas as companhias - MAP

const companiesUpdateValue = companies.map(companie => {
    return companie.marketValue * 0.10 + companie.marketValue
})
console.log(companiesUpdateValue)
// Filtrar somente companhias fundadas abaixo de 1990 - FILTER
// Somar o valor de mercado das restantes - REDUCE