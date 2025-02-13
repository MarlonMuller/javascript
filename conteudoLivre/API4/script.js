// https://viacep.com.br/ws/94190070/json/
const cep = document.getElementById("cep");
const btnBuscar = document.getElementById("btn-go");
const resposta = document.getElementById("content");
const street = document.getElementById("street")


const fetchApi = (value) => {
    const result = fetch(`https://viacep.com.br/ws/${value}/json`)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        return data;
        });
        return result;
}


btnBuscar.addEventListener("click", async (event) => {
    event.preventDefault();
    const result = await fetchApi(cep.value)
    street.textContent = `${JSON.stringify(result.logradouro)}`
}) 