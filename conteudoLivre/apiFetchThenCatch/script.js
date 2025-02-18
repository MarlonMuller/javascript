const cep = document.querySelector('#cep');
const btnGo = document.querySelector('#btnGo');
const resposta = document.querySelector('#resposta');
const street = document.querySelector('#street'); // logradouro
const bairro = document.querySelector('#bairro'); // bairro
const city = document.querySelector('#city'); // localidade
const estado = document.querySelector('#estado'); // uf


const fetchApi = (value) => {
    const result = fetch(`https://viacep.com.br/ws/${value}/json/`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    return data;
                })
            return result;
}



btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const cepBuscado = cep.value;
    const result = await fetchApi(cepBuscado)
    street.innerHTML = result.logradouro;
    bairro.innerHTML = result.bairro;
    city.innerHTML = result.localidade;
    estado.innerHTML = result.uf;
})

