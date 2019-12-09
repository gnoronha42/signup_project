//exibe a messagem de erro
function errorMessage(erros){
    const ul = document.querySelector("#mensagem_erro")
    ul.innerHTML = "";
    erros.forEach(function(erros) {
        const li =  document.createElement("li");
        li.innerHTML = "";
        li.textContent = erros;
        ul.appendChild(li)
    });
}

// verifica o  usuario e mostra o erro
function vrUser(user){
    const  erros  =[]
    if(user.FirstName.length == 0)erros.push("o nome não pode ser em branco");
    if(user.LastName.length == 0)erros.push("O sobrenome não pode ser em branco");
    if(user.Email.length == 0)erros.push("o email não pode ser em branco");
    if(user.Email.indexOf("@") == -1 )erros.push("o email está inválido");
    if(user.Password.length == 0)erros.push("a senha não pode ser em branco");
    if(user.Cpassword.length == 0)erros.push(" A confirmação da senha não pode estar em branco");
    if(user.Password.length <= 5)erros.push(" a senha pode possuir  no minimo 5 caracteres");
    if(user.Password != user.Cpassword)erros.push(" as senhas não coicidem");
   
    return erros;
}

