const idCharacter = document.querySelector("#idCharacter");
const btnGo = document.querySelector("#btn-go")
const resposta = document.querySelector("#resposta")
const image = document.querySelector("#img") //image


const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data;
    })
    return result;
}





btnGo.addEventListener("click", async (event) => {
    event.preventDefault();
    const id = idCharacter.value;
    const result = await fetchApi(id)
    resposta.textContent = `${JSON.stringify(result, undefined, 2)}`;
    image.src = `${result.image}`;
})