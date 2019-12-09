function saveUser(user){
    localStorage.setItem("userEmail",JSON.stringify(user.Email))  
    localStorage.setItem("userPassword",JSON.stringify(user.Password))
 }
 
 function localStorageVerification(){
     const localStorageobject = {
        Email :  JSON.parse(localStorage.getItem("userEmail")),
        Password : JSON.parse(localStorage.getItem("userPassword"))
    }
    return localStorageobject;
 }


