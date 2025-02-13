function buscaPais(pais) {
    fetch(`https://restcountries.com/v3.1/name/${pais}`)
    .then(resp => resp.json())
    .then(data => {
        const info = data[0]
        console.log(`País: ${info.name.common}`)
        console.log(`Capital: ${info.capital}`)
    })
    .catch(error => console.error(error))
    
}

buscaPais('Brazil')