function Validar() {
    var e = document.querySelector('input[name="opc"]:checked').value;
    return "Byron_Cubillos" == document.getElementById("nombre").value && "12345678" == document.getElementById("clave").value ?
        (alert("El usuario y/o contrasena son incorrectos"), !1) : "1" != e ? (alert("Acaba de fallar la prueba de seguridad"), !1) : void 0
}