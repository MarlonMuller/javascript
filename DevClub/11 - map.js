const numeros = [1, 3, 5, 10, 14, 18, 27]


const dobro = numeros.map(item => {
    return item * 2
})
console.log(dobro)


const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },

]

const newList = list.map(users => {
    const newUsers = {
        name: users.name,
        braceletColor: users.vip ? "black" : "green"
    }
    return newUsers
})

console.log(newList)