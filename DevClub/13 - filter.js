const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]


// Apenas valores acima de 100
const listAcima100 = list.filter(number => number > 100)
console.log(listAcima100);

// Apenas valores pares ou abaixo de 150
const listParOuAbaixo150 = list.filter((number) => {
    if(number < 150 || number % 2 ==0) {
        return true
    } else {
        return false
    }
})
console.log(listParOuAbaixo150)

//Apenas valores ímpares e maiores que 100
const listImparesEMaiores100 = list.filter((number) => {
    if(number % 2 != 0 && number > 100) {
        return true
    } else {
        return false
    }
})
console.log(listImparesEMaiores100)