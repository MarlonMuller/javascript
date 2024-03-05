const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]


// vip: pulseira preta
// não vip: pulseira azul


const newList = list.map((user) => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'Black' : 'Green'
    }
    return newUser
})

console.log(newList)
