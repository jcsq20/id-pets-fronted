function Validar_Mascotas() {

    var Ubicacion = document.getElementById("Ubicacion").value;
    var Direccion = document.getElementById("Direccion").value;
    var Ciudad = document.getElementById("Ciudad").value;
    var Edad = parseInt(document.getElementById("Edad").value);


    if (Ubicacion == "" || Direccion == "" || Ciudad == "") {
        alert("Hay campos obligatorios que no ha completado")

        return false;
    }
    if (Number.isInteger(Edad) == false) {
        alert("En el campo edad debe digitar valores numericos");
        return false;
    }

}