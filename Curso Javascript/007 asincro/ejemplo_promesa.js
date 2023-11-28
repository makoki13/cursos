function cargarDatos(url) {
    return new Promise(function(resolve, reject) {
        // Simular una solicitud AJAX
        setTimeout(function() {
            var datos = "Datos obtenidos de " + url;
            resolve(datos); // Éxito    
            //reject(new Error("Error en la promesa"))        
        }, 5000);
    });
}
  
function lanzar_peticion() {
    document.getElementById("peticion").innerHTML = 'OBTENIENDO DATOS...'
    cargarDatos("https://ejemplo.com/datos")
    .then(function(datos) {
        document.getElementById("peticion").innerHTML = datos;        
    })
    .catch(function(error) {
        document.getElementById("peticion").innerHTML = error;        
    });

    //document.getElementById("peticion").innerHTML = 'FIN OBTENIENDO DATOS...'
}

function lanzar_mensaje() {
    document.getElementById("mensaje").innerHTML = "Esto es un mensaje"
}