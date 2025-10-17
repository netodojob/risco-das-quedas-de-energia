try{
const form = document.querySelector("form") ?? null;
const nomeinput = document.querySelector("#nome");
const assunnto = document.querySelector("#assunto");
const mensagemtextarea =  document.querySelector("#mensagem");
const enviarbtn = document.querySelector("#enviar-btn");


function validarformulario(evento){
    evento.preventDefault();
let valido = true;
if(nomeinput.value.trim()===''){
    valido = false ;
    alert("o campo de nome não pode estar vazio!")
}

if(mensagemtextarea.value.trim()===''){
valido = false;
alert("mensagem não pode ser vazia")
}
else if (mensagemtextarea.value.trim().length > 500){
    valido = false
    alert("a mensagem deve ter pelo menos 500 caracteres.")
}
if (valido){
    alert("agradesemos o seu contato");
    form.submit();
}
}

 enviarbtn.addEventListener('click', validarformulario)
} catch(exception) {
    console.log(exception.message)
}