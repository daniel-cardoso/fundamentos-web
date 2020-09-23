let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let tema = document.querySelector('#tema')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    
    if(nome.value.lenght){
        alert('nome inválido')
    }
}