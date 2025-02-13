async function buscaCep(){

    try {
    const resp = await fetch('https://viacep.com.br/ws/94190070/json/');
    const data = await resp.json()

    console.log(data.estado);
    
    } catch(error) {
        console.error(`Erro na requisição: ${error}`)
    }
}

buscaCep()