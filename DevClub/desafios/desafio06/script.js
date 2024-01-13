/*Crie uma página HTML com um botão e um parágrafo. Escreva um programa que, ao clicar no botão, altere o texto do parágrafo para "Olá, mundo!" utilizando o método getElementById.*/
const result = document.getElementById('result')

const change = () => {
    result.innerHTML = "Olá, mundo!"
}
