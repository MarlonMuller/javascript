const btnGo = document.querySelector("#btnGo");
const cep = document.querySelector("#cep");
const street = document.querySelector("#street"); //logradouro
const bairro = document.querySelector("#bairro"); // bairro
const city = document.querySelector("#city"); // localidade
const estado = document.querySelector("#estado"); // estado

const fetchApi = (value) => {
    const result = fetch(`https://viacep.com.br/ws/${value}/json/`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data;
    })
    return result;
}

btnGo.addEventListener("click", async (event) => {
    event.preventDefault();
    const cepInformado = cep.value;
    const result = await fetchApi(cepInformado)
    street.innerHTML = result.logradouro;
    bairro.innerHTML = "Bairro " + result.bairro;
    city.innerHTML = "Cidade " + result.localidade;
    estado.innerHTML = "Estado " + result.estado;
})