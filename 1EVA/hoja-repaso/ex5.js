// Escribe una función en JavaScript que acepte una cadena como parámetro y convierta la primera letra de cada palabra de la cadena a mayúscula.
// Cadena de ejemplo: 'the quick brown fox'
// Salida esperada: 'The Quick Brown Fox'

let cadena = "the quick brown fox";

let arrCandena = cadena.split(" ");

for (let i = 0; i < arrCandena.length; i++) {
  arrCandena[i] = arrCandena[i][0].toUpperCase() + arrCandena[i].slice(1);
}

let resultado = arrCandena.join(" ");

console.log(resultado);
