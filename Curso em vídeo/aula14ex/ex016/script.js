function contar (){
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let res = document.querySelector('p#res')



    if(inicio.value.legth == 0 || fim.value.length == 0 | passo.value.length == 0){
        res.innerHTML = `[ERRO] está faltando dados, complete e tente novamente.`
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p == 0){
            p = 1;
            res.innerHTML = "Passo 0 não é possível, considerado passo 1<br>"
        }

        if(i<f){
        res.innerHTML='Contando:<br>'
        for(c = i; c < f; c+=p){
            res.innerHTML += c;
            res.innerHTML += `\u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
               } else {

                res.innerHTML='Contando:<br>'
                for(c = i; c > f; c-=p){
                    res.innerHTML += c;
                    res.innerHTML += `\u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`

               }

    }

}