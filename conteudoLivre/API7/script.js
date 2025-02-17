const resposta = document.querySelector("#resposta")
const cep = document.querySelector("#cep");
const street = document.querySelector("#street"); // logradouro
const bairro = document.querySelector("#bairro"); // bairro
const cidade = document.querySelector("#city"); // localidade
const estado = document.querySelector("#estado"); // estado
const btnGo = document.querySelector("#btnGo");

// Axios
const fetchApi = async (value) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${value}/json/`)
        return response.data;
    }
    catch (error) {
        console.error('Erro ao buscar CEP', error);
        return { error: 'CEP não encontrado.'};
    }
};

btnGo.addEventListener("click", async (event) => {
    event.preventDefault();
    const cepBuscado = cep.value;
    if(!cepBuscado) {
        resposta.textContent = "Por favor, insira um número válido.";
        return;
    }

    const result = await fetchApi(cepBuscado);

    if (result.error) {
        resposta.textContent = result.error;
    } else {
        resposta.textContent = 'Resultado da busca'
        street.textContent = `${result.logradouro}`;
        bairro.textContent = `${result.bairro}`;
        cidade.textContent = `${result.localidade}`;
        estado.textContent = `${result.estado}`;
    }
})