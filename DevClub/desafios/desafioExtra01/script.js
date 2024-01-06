const btProcurar = document.querySelector('#btProcurar')
let input = document.querySelector('#nameContato')
let result = document.querySelector('#result')

const contacts = [
    { name: 'Rodolfo', number: '(19) 94343-3434' },
    { name: 'Paulo', number: '(12) 9444-3654' },
    { name: 'Aline', number: '(13) 9586-3435' },
    { name: 'Maria', number: '(15) 91212-3434' },
]

function procurar(){

    for(let i = 0; i < contacts.length; i++){
        if(input.value == contacts[i].name){
            result.innerHTML = `O contato de ${contacts[i].name} é ${contacts[i].number}`
        }
    }
}

btProcurar.addEventListener('click', procurar)