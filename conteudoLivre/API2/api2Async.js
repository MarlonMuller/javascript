async function buscaPais(pais) {
    try{
    const resp = await fetch(`https://restcountries.com/v3.1/name/${pais}`)
    const data = await resp.json()
    const info = await data[0]
    
    console.log(`País: ${info.name.common}`)
    console.log(`Capital: ${info.capital[0]}`)
    } catch(error) {
        console.error(`Erro na requisição: ${error}`)
    }
    
}

buscaPais('Argentina')