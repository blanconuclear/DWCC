// Escribe una función en JavaScript que acepte una cadena como parámetro y cuente el número de vocales dentro de la cadena.
// Nota: Dado que la letra 'y' puede considerarse tanto una vocal como una consonante, no contamos la 'y' como vocal aquí.

// Datos de ejemplo y salida:

// Cadena de ejemplo: 'The quick brown fox'
// Salida esperada: 5

let cadena = "The quick brown fox";
let count = 0;
let countSegundaSolucion = 0;
let vocales = "aeiou";

let arrCadena = cadena.split("");

for (let i = 0; i < arrCadena.length; i++) {
  if (
    arrCadena[i] === "a" ||
    arrCadena[i] === "e" ||
    arrCadena[i] === "i" ||
    arrCadena[i] === "o" ||
    arrCadena[i] === "u"
  ) {
    count++;
  }
}

console.log("Mi solución: " + count);

//otra solución
for (let i = 0; i < cadena.length; i++) {
  if (vocales.includes(cadena[i].toLowerCase())) {
    countSegundaSolucion++;
  }
}

console.log("Segunda solución optima: " + countSegundaSolucion);
