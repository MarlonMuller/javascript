/* 
Calcula desconto:

Todos os produtos acima de R$ 30,00 tem desconto de 10%
*/

const cart = [10, 244, 99, 2, 20, 33, 250];
let soma = 0;


/*cart.forEach(element => {
    const soma = element += element;
    console.log(soma)

});*/

function somarArrey (arrey) {

for (let i = 0; i < cart.length; i++) {
    soma += cart[i];
}
    return soma;
}

console.log(somarArrey (cart))

