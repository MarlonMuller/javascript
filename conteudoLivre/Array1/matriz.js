const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(`Elemento [${i}][${j}]:`, matriz[i][j])
    }
}


const outraMatriz = [
    ['Marlon', 'Iury', 'Oliveira', 'Muller'],
    ['João', 'Maria', 'da', 'Fonseca'],
    ['Pedro', 'Marcelo', 'Santos', 'Silva']
]

for(let i = 0; i < outraMatriz.length; i++){
    console.log(outraMatriz[i])
}

