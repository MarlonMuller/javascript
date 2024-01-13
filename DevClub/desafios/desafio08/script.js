/*Crie uma página HTML com um botão e um parágrafo. Escreva um programa que, ao clicar no botão, altere o texto do parágrafo para "Olá, mundo!" utilizando o método querySelector.*/

const result = document.querySelector("#result")

const clicou = () => {
    result.innerHTML = "Olá, mundo!"
}