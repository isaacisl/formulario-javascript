
function validar(){

    /////// PEGA OS VALORES DIGITADOS PELO USUÁRIO
    let nome = document.querySelector("#inputNome")
    let email = document.querySelector("#inputEmail")
    let senha = document.querySelector("#inputPassword")
    let confirmar = document.querySelector("#inputConfirmar")
    

    ///////// VALIDANDO O FORMULARIO COM IF  E ELSE IF

    if(nome.value == '' || nome.value == undefined || nome.value == null){
        alert("Por favor, digite um nome.")
        nome.focus();

    } else if(email.value == '' || email.value == undefined || email.value == null){
        alert("Por favor, digite um email!")
        email.focus();

    }else if(senha.value == '' || senha.value == undefined || senha.value == null){
        alert("Por favor, digite uma senha")
        //senha.classList.add("invalidar")
        senha.focus()
               
    }else if(confirmar.value == '' || confirmar.value == undefined || confirmar.value == null){
        alert("Por favor, confirme sua senha.")
        confirmar.focus()

    }else if (confirmar.value != senha.value){
        alert("As senhas não são iguais!")
        confirmar.value = ""
        senha.value = ""
        senha.focus();
    }else{
        
    }
    
  




    /* Adicionando Classes nos elementos com Javascript Puro:
         c
    */

    //////// THE END
    



}


document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const botaum = document.querySelector("#botao")
        botaum.click();
    }
})
