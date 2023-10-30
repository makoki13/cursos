function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var nombreError = document.getElementById("nombreError");
    var emailError = document.getElementById("emailError");
    var nombreValido = /^[a-zA-Z ]+$/.test(nombre); // Valida que el nombre contenga solo letras y espacios
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Valida el formato de correo electrónico
    // Restablecer los errores
    
    nombreError.classList.remove("active");
    emailError.classList.remove("active");

    if (!nombreValido) {
        nombreError.classList.add("active");
    }

    if (!emailValido) {
        emailError.classList.add("active");
    }

    // Evita que el formulario se envíe si hay errores
    if (!nombreValido || !emailValido) {        
        return false;
    }

    // Enviar el formulario si todo está bien  
    alert("CORRECTO")  
    return true;
}