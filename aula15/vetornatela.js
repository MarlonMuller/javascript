let valores = [8, 1, 7, 4, 2, 9]

for(let pos = 0;pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}

console.log('')


for( let pos in valores){ //apenas para array e objetos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}