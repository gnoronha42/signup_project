
function errorMessage(erros2){
     const ul = document.querySelector("#mensagem_erro")
    ul.innerHTML = "";
    erros2.forEach(function(erros2) {
        const li =  document.createElement("li");
        li.innerHTML = "";
        li.textContent = erros2;
        ul.appendChild(li)
    });
}

function vrUser(login){
     const  erros  =[]
    if(login.Email.length == 0)erros.push("O email não pode estar em branco");
    if(login.Password.length == 0)erros.push("A senha não pode estar em branco");
    if(login.Email.indexOf("@") == -1 )erros.push("o email está inválido");
    return erros;
}

