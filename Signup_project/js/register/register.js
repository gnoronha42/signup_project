const form = document.querySelector("#cadastro_todo")
const botao  = document.querySelector(".botao_cadastro")
function takeUser(form){
    const user =  {
        FirstName:form.FirstName.value,
        LastName : form.LastName.value,
        Email    : form.Email.value,
        Password : form.Password.value,
        Cpassword: form.Cpassword.value,
    }
    saveUser(user)
    return user;
}


botao.addEventListener("click", function(event){
const user   = takeUser(form)
const erros  = vrUser(user);
       
            if(erros.length > 0){
            event.preventDefault()
            errorMessage(erros)
            vrUser.innerHTML = ""
        }
});