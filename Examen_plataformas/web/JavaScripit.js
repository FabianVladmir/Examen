var id = document.getElementById("dni");
var clave = document.getElementById("password");

function validar(e) {
    if (clave.value == ""){
        alert('La contraseña no puede ser vacia');
        e.preventDefault();
    }
    else if (!/^([0-9])*$/.test(e) && e.value < 99999999) {
        alert('CUI valido');
    }else{
        alert('CUI invalido');
        e.preventDefault();
    }

}
form.addEventListener('submit', validar)