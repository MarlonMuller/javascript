const btProcurar = document.querySelector('#btProcurar')
let input = document.querySelector('#nameContato')
let result = document.querySelector('#result')

const contacts = [
    { name: 'Rodolfo', number: '(19) 94343-3434' },
    { name: 'Paulo', number: '(12) 9444-3654' },
    { name: 'Aline', number: '(13) 9586-3435' },
    { name: 'Maria', number: '(15) 91212-3434' },
]

function procurar() {
    let i = 0;

    do {
        if (input.value.toLowerCase() == contacts[i].name.toLowerCase()) {
            result.innerHTML = `O contato de ${contacts[i].name} é ${contacts[i].number}`
            break
        } else {
            result.innerHTML = `Contrato não encontrado`
        }
        i++
    } while (i < contacts.length)
}

btProcurar.addEventListener('click', procurar)