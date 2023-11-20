function ejecutar() {
    mostrar("SE EJECUTÓ LA FUNCIÓN")
}

function mostrar(texto) {
    document.getElementById("salida").innerHTML = texto
}

function limpiar() {
    document.getElementById("salida").innerHTML = ""
}