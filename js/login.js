document.addEventListener("DOMContentLoaded", function(e){

    localStorage.removeItem("nombre");
  
  });

function loguear() {  

    let pw1 = document.getElementById("psw1");  
    let email = document.getElementById("email");
    
    if((email.value != '') && (pw1.value != '')){
        window.location.href = 'home.html';
    } else {  
        alert('Complete los campos vacios');  
    }

    if (email.value) localStorage.setItem("nombre", email.value);
       
  }
