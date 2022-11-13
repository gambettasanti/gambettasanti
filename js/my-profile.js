document.getElementById("form").addEventListener('submit', event =>{
    
    let email = document.getElementById("email");
    let firstName = document.getElementById("firstName");
    let secondName = document.getElementById("secondName");
    let firstLastName = document.getElementById("firstLastname");
    let secondLastName = document.getElementById("secondLastName");
    let telNumber = document.getElementById("telNumber");

    if(!(document.getElementById('form').checkValidity())){
      event.preventDefault();
      event.stopPropagation();
    } else {
      localStorage.setItem('email', email.value);
      localStorage.setItem('primerNombre', firstName.value);
      localStorage.setItem('segundoNombre', secondName.value);
      localStorage.setItem('primerApellido', firstLastName.value);
      localStorage.setItem('segundoApellido', secondLastName.value);
      localStorage.setItem('telefono', telNumber.value);
      alert("ACTUALIZADO CON EXITO");
    }
    form.classList.add('was-validated');
    ['change', 'input'].forEach(elemento => {document.body.addEventListener(elemento, validation)})

})

document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById('email').value = localStorage.getItem('email');
    
    if ((localStorage.getItem('primerApellido') != '') && (localStorage.getItem('primerNombre'))) {
        document.getElementById('firstName').value = localStorage.getItem('primerNombre');
        document.getElementById('firstLastname').value = localStorage.getItem('primerApellido');
        if (localStorage.getItem('telefono') != '') {
          document.getElementById('telNumber').value = localStorage.getItem('telefono');
        }
        if (localStorage.getItem('segundoNombre') != '') {
          document.getElementById('secondName').value = localStorage.getItem('segundoNombre');
        }
        if (localStorage.getItem('segundoApellido') != '') {
          document.getElementById('secondLastName').value = localStorage.getItem('segundoApellido');
        }
    }
    
  });
   