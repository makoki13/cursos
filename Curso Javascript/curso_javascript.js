function ejecutar() {
    var numeros = [1, 2, 3, 4, 5];
    mostrar(numeros) // [1,2,3,4,5]
    var doble = numeros.map(function(numero) {
      return numero * 2;
    });
    mostrar(doble) // [2,4,6,8,10]
}

function mostrar(texto) {
    document.getElementById("salida").innerHTML = texto
}

function limpiar() {
    document.getElementById("salida").innerHTML = ""
}