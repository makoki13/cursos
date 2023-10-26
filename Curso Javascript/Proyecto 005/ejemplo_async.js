function promesaAsincronica(url) {
    return new Promise(function(resolve, reject) {
        // Simular una solicitud AJAX
        setTimeout(function() {
            var datos = "Datos obtenidos de " + url;
            resolve(datos); // Éxito            
        }, 1000);
    });
}

async function miFuncionAsincronica() {
    // Usando "await" para esperar a que una promesa se resuelva
    const resultado = await promesaAsincronica("https://ejemplo.com/datos");
    // El código aquí se ejecuta después de que la promesa se resuelve
    return resultado;
}
   
function lanzar_peticion() {
    document.getElementById("peticion").innerHTML = 'OBTENIENDO DATOS...'
    miFuncionAsincronica().then((valor) => {
        document.getElementById("peticion").innerHTML = valor
      });
    //document.getElementById("peticion").innerHTML = 'FIN OBTENIENDO DATOS...'
}

function lanzar_mensaje() {
    document.getElementById("mensaje").innerHTML = "Esto es un mensaje"
}