function Validar() {
    console.log('Entro')
    var use = document.getElementById("nombre").value;
    var pass = document.getElementById("clave").value;
    var opc = document.querySelector('input[name="opc"]:checked').value;

    if (use != "1" || pass != "1" || opc !='2') {
        console.log('error')
        alert('error')
        return false;
    }
    return true;
}