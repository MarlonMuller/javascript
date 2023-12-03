var agora = new Date()
var hora = agora.getHours();
var dia = agora.getDay();
var mes = agora.getMonth();
var ano = agora.getFullYear();

console.log(`Hoje é ${dia} / ${mes} / ${ano}`)
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 5 ) {
    console.log('Boa madrugada!')
} else if (hora <= 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}