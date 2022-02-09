function Validar_Contrasena() {

    var contrasena_actual = document.getElementById("Contrasena_actual").value;
    var contrasena_nueva = document.getElementById("Contrasena_nueva").value;
    var contrasena_nueva_confirmar = document.getElementById("Contrasena_nueva_confirmar").value;

    if (contrasena_actual == "12345678" && contrasena_nueva != contrasena_actual && contrasena_nueva_confirmar == contrasena_nueva) {

    }

    if (contrasena_actual == "12345678" && contrasena_nueva != contrasena_actual && contrasena_nueva_confirmar != contrasena_nueva) {
        alert("Error al confirmar la nueva contraseña");

        return false;
    }

    if (contrasena_actual == "12345678" && contrasena_nueva == contrasena_actual && contrasena_nueva_confirmar == contrasena_nueva) {
        alert("La contraseña nueva no puede ser igual a la anterior");

        return false;
    }

    if (contrasena_actual == "12345678" && contrasena_nueva == contrasena_actual && contrasena_nueva_confirmar != contrasena_nueva) {
        alert("La contraseña nueva no puede ser igual a la anterior");

        return false;
    }
}