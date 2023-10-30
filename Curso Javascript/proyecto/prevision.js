const apiKey = "c43ae5b94e9147e1ad7135409232810"; // 
//const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=c43ae5b94e9147e1ad7135409232810&q=Gandia&aqi=no';
const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=c43ae5b94e9147e1ad7135409232810';

const ubicacionInput = document.getElementById('ubicacionInput');
const obtenerClimaBtn = document.getElementById('obtenerClimaBtn');
const resultado = document.getElementById('resultado');

obtenerClimaBtn.addEventListener('click', () => {
  const ubicacion = ubicacionInput.value;
  obtenerClima(ubicacion);
});


async function obtenerClima(ubicacion) {
  try {
    const url = baseUrl + "&q=" + ubicacion + "&aqi=no"
    console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No se pudo obtener el clima.');
    }

    const data = await response.json()
    console.log(data);    
    mostrarClima(data);
  } catch (error) {
    resultado.textContent = `Error: ${error.message}`;
  }
}

function mostrarClima(data) {
  const nombre = data.location.name;
  const temperatura = data.current.temp_c;
  const pais = data.location.country;
  resultado.textContent = `Clima en ${nombre} (${pais}): ${temperatura}°C`
}

