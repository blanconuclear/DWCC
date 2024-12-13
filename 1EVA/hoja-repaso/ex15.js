// Escribe un bucle for en JavaScript que itere desde 0 hasta 15. En cada iteración, verificará si el número actual es impar o par, y mostrará un mensaje en la pantalla.
// Salida esperada:

// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
