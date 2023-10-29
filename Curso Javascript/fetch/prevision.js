const apiKey = "c43ae5b94e9147e1ad7135409232810"; // 
const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=c43ae5b94e9147e1ad7135409232810&q=Gandia&aqi=no';

const ubicacionInput = document.getElementById('ubicacionInput');
const obtenerClimaBtn = document.getElementById('obtenerClimaBtn');
const resultado = document.getElementById('resultado');

obtenerClimaBtn.addEventListener('click', () => {
  const ubicacion = ubicacionInput.value;
  obtenerClima(ubicacion);
});


async function obtenerClima(ubicacion) {
  try {
    const url = baseUrl
    console.log(url)
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) {
      throw new Error('No se pudo obtener el clima.');
    }

    const data = await response.json();    
    mostrarClima(data);
  } catch (error) {
    resultado.textContent = `Error: ${error.message}`;
  }
}

function mostrarClima(data) {
  const nombre = data.location.name;
  const temperatura = data.current.temp_c;
}

