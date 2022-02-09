function Validar_Por_Nombre() {

    var Nombre = document.getElementById("nombre").value;

    if (Nombre == "") {
        alert("Hay campos obligatorios que no ha completado")

        return false;
    }

}

function Validar_Por_Correo() {

    var Correo = document.getElementById("Correo").value;

    if (Correo == "") {
        alert("Hay campos obligatorios que no ha completado")

        return false;
    }

}