// https://rickandmortyapi.com/api/character/2
const btn = document.getElementById("btn");
const value = 2;

function chamarApi(value){
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then(res => res.json())
    .then(data => console.log(data))
    
}

btn.addEventListener("click", () => {
    chamarApi(value)
})

