const cep = document.querySelector('#cep');
const btnGo = document.querySelector('#btnGo');
const resposta = document.querySelector('#resposta');
const street = document.querySelector('#street'); // logradouro
const bairro = document.querySelector('#bairro'); // bairro
const city = document.querySelector('#city'); // localidade
const estado = document.querySelector('#estado'); // uf

const fetchApi = async (value) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);

        if(!response.ok){
            throw new Error(`Erro na busca: ${response.status}`)
        }

        const data = response.json();
        
        if(data.erro){
            throw new Error('CEP não encontrado')
        }
        
        return data;
    }
    catch(error) {
        console.log(error)
        return null;
    }
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