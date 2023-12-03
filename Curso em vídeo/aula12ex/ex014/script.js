function carregar () {

var msg = document.getElementById('msg');
var foto = document.getElementById('foto');
var imagem = document.getElementById('imagem');
var agora = new Date();
var hora = agora.getHours();

msg.innerHTML = `Agora são ${hora} horas.`

if(hora >=0 && hora <=12) {
    //bom dia
    imagem.src='fotomanha.png';
    document.body.style.backgroundColor='#a5813f9f'
} else if (hora >12 && hora <=18){
    //boa tarde
    imagem.src='fototarde.png'
    document.body.style.backgroundColor='#af56039f'
} else {
    //boa noite
    imagem.src='fotonoite.png'
    document.body.style.backgroundColor='#0e043a9f'
}
}