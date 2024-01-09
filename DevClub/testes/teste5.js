const cart = [10, 244, 99, 2, 20, 33, 250];

let totalValue = 0
let discountValue = 0
let finalValue = 0


function calculateDiscount (value, discount) {
    discountValue += value * discount / 100
    return discountValue
}

function calculateFinalValue (totalValue, discountValue) {
    finalValue = totalValue - discountValue
    return finalValue
}

cart.forEach(value => {
    if(value > 30){
        calculateDiscount (value, 10)
    }

    totalValue += value
    calculateFinalValue (totalValue, discountValue)
});

console.log(`O valor total da sua compra foi de R$ ${totalValue.toFixed(2)}, seu desconto foi de R$ ${discountValue.toFixed(2)} e você pagará R$ ${finalValue}`)