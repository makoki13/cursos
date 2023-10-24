// Definir el rango de números (por ejemplo, del 1 al 10)
const inicio = 1;
const fin = 10;
let numero = inicio; // Inicializar el número con el valor de inicio

// Utilizar un bucle while para encontrar números pares e impares
while (numero <= fin) {
  // Usar una sentencia if-else para determinar si el número es par o impar
  if (numero % 2 === 0) {
    console.log(`${numero} es un número par.`);
  } else {
    console.log(`${numero} es un número impar.`);
  }

  numero++; // Incrementar el número para la siguiente iteración
}
