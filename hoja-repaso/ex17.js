// Escribe una declaración condicional en JavaScript para ordenar tres números.
// Muestra un cuadro de alerta para mostrar el resultado.
// Números de ejemplo: 3, -7, 2
// Salida esperada: "The sign is -"

let n1 = 50;
let n2 = 433;
let n3 = 56;

let resultado = 0;

if (n1 > n2 && n1 > n3) {
  resultado = n1;
} else if (n2 > n1 && n2 > n3) {
  resultado = n2;
} else {
  resultado = n3;
}

console.log(resultado);
