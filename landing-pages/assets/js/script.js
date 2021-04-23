let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
//let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
//let assuntoOk= false
let comentarioOk= false
let mapa = document.querySelector('#mapa')
let comentario = document.querySelector('#comentario')

nome.style.width = '100%'
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = 'green'
        nomeOk= true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
/*
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length>=100){
        txtAssunto.innerHTML = "Texto é muito grande, digite no maximo 100 caracteres "
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
    
}*/

function validaComentario(){
    let txtComentario = document.querySelector('#txtComentario')
    if(comentario.value.length >=10){
        txtComentario.innerHTML = "Texto é muito grande, digite no maximo 100 caracteres "
        txtComentario.style.color = "red"
        txtComentario.style.display = 'block'
    }else{
        txtComentario.style.display = 'none'
        comentarioOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && comentarioOk == true){
        alert("Formulario enviado com sucesso!")
    }else{
        alert('Preencha o formulario corretamente antes de enviar...')
    }
}
function mapazoom(){
    mapa.style.width = '650px'
    mapa.style.height = '500px'
}

function mapanormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
