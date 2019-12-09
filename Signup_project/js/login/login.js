const form = document.querySelector("#form4")
const esbotao = document.querySelector("#botao_signin")

function getLoginUser(form){
  const user2 = {
      Email : form.Email.value,
      Password: form.Password.value,
  }

  return user2;
}

esbotao.addEventListener("click", function(event){
  // const pglogin = document.querySelector("#form4")
  const login = getLoginUser(form)
  const erros = vrUser(login)
  
  if(erros.length > 0){  
    event.preventDefault()
    errorMessage(erros)
    vrUser.innerHTML = "";
    return;
  }

  const localStorageUser = localStorageVerification()  
  
  // console.table(login);
  // console.table(localStorageUser)

  if(localStorageUser.Email === login.Email && localStorageUser.Password === login.Password) {
     alert("Parabéns você entrou")
  }
  else {
    event.preventDefault()
    errorMessage(erros)
    vrUser.innerHTML = "";
    return
  }
});



