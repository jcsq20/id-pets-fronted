function Validar_Registro() {

    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellido").value;
    var Direccion = document.getElementById("Direccion").value;
    var Celular = parseInt(document.getElementById("Celular").value);
    var Edad = parseInt(document.getElementById("Edad").value);
    var Email = document.getElementById("Email").value;
    var Username = document.getElementById("Username").value;
    var Contrasena = document.getElementById("Contrasena").value;
    var Confirmar_contrasena = document.getElementById("Confirmar_contrasena").value;


    if (Nombre == "" || Apellido == "" || Direccion == "" || Edad == "" || Email == "" || Username == "" || Contrasena == "" || Confirmar_contrasena == "") {
        alert("Hay campos obligatorios que no ha completado")

        return false;
    }
    if (Number.isInteger(Edad) == false) {
        alert("En el campo edad debe digitar valores numericos");
        alert(Number.isInteger(Edad));
        return false;
    }
    if (Number.isInteger(Celular) == false) {
        alert("En el campo celular debe digitar valores numericos");
        return false;
    }
    if (Contrasena != Confirmar_contrasena) {
        alert("Error al confirmar la contraseña, por favor verifique que las contraseñas coincidan");
        return false;
    }
}