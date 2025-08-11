
function validarFormulario(){
    if(document.getElementById("nome").value != "" 
        && document.getElementById("email").value != ""
        && document.getElementById("whatsapp").value != ""){
        alert("Show! Em breve entro em contato contigo! <3")
    }else{
        alert("Faz favor de preencher todos os campos, meu anjo <3")
    }
}
document.getElementById("botaoEnviar").addEventListener("click", validarFormulario)