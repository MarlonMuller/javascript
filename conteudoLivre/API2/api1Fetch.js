function buscaCep() {
    fetch('https://viacep.com.br/ws/94190070/json/')
        .then(resp => resp.json())
        .then(data => console.log(data.estado))
        .catch(error => console.error(error))
          
}

buscaCep()