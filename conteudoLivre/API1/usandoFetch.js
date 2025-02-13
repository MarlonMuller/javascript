function chamarApi(){
    fetch('https://dummyjson.com/products')
    .then(resp => {
        if(!resp.ok){
            throw new Error('Erro na requisição')
        }
        return resp.json()
    })
    .then(obj =>  console.log(obj))
    .catch(error => console.error('Erro ao chamar a API: ', error.message));
}

chamarApi()