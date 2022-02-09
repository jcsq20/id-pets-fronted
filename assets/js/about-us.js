function Validar() {

    var usuario = document.getElementById("nombre").value;
    var password = document.getElementById("clave").value;

    if (usuario == "1" && password == "1") {

    }
    if (usuario != "1" && password != "1") {
        alert("El usuario y/o contrasena son incorrectos");

        return false;
    }

}