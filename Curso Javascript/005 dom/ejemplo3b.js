// Definir el rango de números (por ejemplo, del 1 al 10)
const inicio = 1;
const fin = 10;

// Iterar a través del rango y encontrar números pares e impares
for (let numero = inicio; numero <= fin; numero++) {
  // Usar una sentencia if-else para determinar si el número es par o impar
  if (numero % 2 === 0) {
    console.log(`${numero} es un número par.`);
  } else {
    console.log(`${numero} es un número impar.`);
  }
}
