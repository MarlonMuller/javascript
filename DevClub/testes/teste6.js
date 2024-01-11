function soma (value1, value2) {
    valueSum = value1 + value2
    return valueSum
}

function somaEimprime (value1, value2){
    console.log(soma(value1, value2))
}


somaEimprime(1,2)


// Arrow function

const soma2 = (value3, value4) => {
    valueSum2 = value3 + value4
    return valueSum2
}

const somaEimprime2 = (value3, value4) => {
    console.log(soma2(value3, value4)) 
}

console.log(soma2(2,3))
