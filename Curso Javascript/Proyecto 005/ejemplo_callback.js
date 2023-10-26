function cargarDatos(url, callback) {
    document.getElementById("peticion").innerHTML = 'OBTENIENDO DATOS...'
    // Simular una solicitud AJAX
    setTimeout(function() {
      var datos = "Datos obtenidos de " + url;
      callback(datos);
    }, 5000);
}

function lanzar_peticion() {
    cargarDatos("https://ejemplo.com/datos", function(datos) {
        document.getElementById("peticion").innerHTML = datos;
    });
}

function lanzar_mensaje() {
    document.getElementById("mensaje").innerHTML = "Esto es un mensaje"
}