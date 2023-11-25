class AdivinanzaJuego {
    constructor() {
        this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        this.intentos = 0;
        this.intentosMaximos = 10;
        this.adivinanzaInput = document.getElementById('adivinanzaInput');
        this.adivinarBtn = document.getElementById('adivinarBtn');
        this.resultado = document.getElementById('resultado');

        this.inicializar();
    }

    inicializar() {
        this.adivinarBtn.addEventListener('click', () => this.comprobarAdivinanza());
        
        this.adivinanzaInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.adivinarBtn.focus();
            }
        });
    }

    comprobarAdivinanza() {
        const adivinanza = parseInt(this.adivinanzaInput.value);

        if (isNaN(adivinanza)) {
            this.resultado.textContent = 'Ingresa un número válido.';
        } else {
            this.intentos++;
            if (adivinanza === this.numeroAleatorio) {
                this.resultado.textContent = `¡Felicidades! Adivinaste el número ${this.numeroAleatorio} en ${this.intentos} intentos.`;
                this.desactivarJuego();
            } else if (adivinanza > this.numeroAleatorio) {
                this.resultado.textContent = 'Demasiado alto. Intenta de nuevo.';
            } else {
                this.resultado.textContent = 'Demasiado bajo. Intenta de nuevo.';
            }

            this.adivinanzaInput.value = '';
            this.adivinanzaInput.focus();

            if (this.intentos === this.intentosMaximos) {
                this.resultado.textContent = `¡Has agotado tus ${this.intentosMaximos} intentos! El número era ${this.numeroAleatorio}.`;
                this.desactivarJuego();
            }
        }
    }

    desactivarJuego() {
        this.adivinanzaInput.disabled = true;
        this.adivinarBtn.disabled = true;
    }
}

// Crear una instancia del juego
const juego = new AdivinanzaJuego();
