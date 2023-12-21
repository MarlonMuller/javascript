/* Controlador de fluxo
    - IF(Se) -> Faça isso
    - Else (Se não) -> Faça aquilo

Operadores de comparação
    > maior que
    < menor que
    == igual que
*/

const notaDoAluno = 9
const notaDeCorte = 5

if (notaDoAluno > notaDeCorte) {
    console.log('Parabéns, você foi aprovado.')
} else {
    console.log('Você foi reprovado')
}

const senhaDoUsuario = 123456
const senhaDigitada = 123457

if (senhaDigitada == senhaDoUsuario) {
    console.log('Seja bem-vindo(a), você está logado(a)')
} else {
    console.log('Senha incorreta')
}

const senhaDoUsuario2 = 123456
const senhaDigitada2 = 123456

if (senhaDigitada2 == senhaDoUsuario2) {
    console.log('Seja bem-vindo(a), você está logado(a)')
} else {
    console.log('Senha incorreta')
}