// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Obtener elementos del DOM
const adivinanzaInput = document.getElementById('adivinanzaInput');
const adivinarBtn = document.getElementById('adivinarBtn');
const resultado = document.getElementById('resultado');

let intentos = 0;
let intentosMaximos = 10; // 7 es el máximo con divide y venceras

// Función para comprobar la adivinanza
function comprobarAdivinanza() {
    const adivinanza = parseInt(adivinanzaInput.value);

    if (isNaN(adivinanza)) {
        resultado.textContent = 'Ingresa un número válido.';
    } else {
        intentos++;
        if (adivinanza === numeroAleatorio) {
            resultado.textContent = `¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`;
            adivinanzaInput.disabled = true;
            adivinarBtn.disabled = true;
        } else if (adivinanza > numeroAleatorio) {
            resultado.textContent = 'Demasiado alto. Intenta de nuevo.';
        } else {
            resultado.textContent = 'Demasiado bajo. Intenta de nuevo.';
        }

        adivinanzaInput.value = "";
        adivinanzaInput.focus();

        if (intentos === intentosMaximos) {
            resultado.textContent = `¡Has agotado tus ${intentosMaximos} intentos! El número era ${numeroAleatorio}.`;
            adivinanzaInput.disabled = true;
            adivinarBtn.disabled = true;
        }
    }
}


// Agregar un evento al botón
adivinarBtn.addEventListener('click', comprobarAdivinanza);

adivinanzaInput.addEventListener("keypress", function(event) {
    var keyPressed = event.key;
    if (keyPressed === "Enter") {
        adivinarBtn.focus(); // Devuelve true si se pulsó Enter
    } 
});
