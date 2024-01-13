/*Crie uma página HTML com várias divs com a classe "item". Escreva um programa que altere o texto de todas as divs para "Item alterado" utilizando o método querySelectorAll.*/

const divs = document.querySelectorAll(".item")
const button = document.querySelector("button")

const click = () => {
    
    divs.forEach(element => {
        element.innerHTML = "Item alterado";
    });

}

button.addEventListener("click", click)