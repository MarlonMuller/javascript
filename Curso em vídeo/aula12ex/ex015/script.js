function verificar() {
var data = new Date();
var ano = data.getFullYear();
var fano = document.getElementById('fano');
var res = document.querySelector('div#res');
if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var idade = ano - Number(fano.value);
    var fsex = document.getElementsByName('radsex');
    var genero = ''
    var img = document.createElement('img');
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        genero = 'homem';
        if(idade>0 && idade<10){
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if(idade <20){
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if(idade <60){
            img.setAttribute('src', 'foto-adulto-m.png')
        } else {
            img.setAttribute('src', 'foto-idoso-m.png')
        }
    } else if (fsex[1].checked){
        genero = 'mulher';
        if(idade>0 && idade<10){
            img.setAttribute('src', 'foto-bebe-f.png')
        } else if(idade <20){
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if(idade <60){
            img.setAttribute('src', 'foto-adulto-f.png')
        } else {
            img.setAttribute('src', 'foto-idoso-f.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} de idade.`
    res.appendChild(img);
}




}