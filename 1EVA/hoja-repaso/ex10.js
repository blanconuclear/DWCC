// Escribe una declaración condicional en JavaScript para encontrar el signo del producto de tres números. Muestra un cuadro de alerta con el signo especificado.
// Números de ejemplo: 3, -7, 2
// Salida: El signo es -

let num1 = -3;
let num2 = -7;
let num3 = 2;

// Calcular el producto de los números
let producto = num1 * num2 * num3;

// Encontrar el signo del producto usando una declaración condicional
if (producto > 0) {
  console.log("El signo es +");
} else if (producto < 0) {
  console.log("El signo es -");
} else {
  console.log("El signo es neutro (0)");
}
