//Efrén Corzón

// Solicitar o texto ó usuario
let texto = prompt("Escribre unha cadea de texto:");

// Crear un array coas letras do texto
let letras = texto.split("");
//Comprobación por consola que se meten as letras nun array
console.log(letras);

// Bucle 'for-of'
let resultadoForOf = "";
for (let letra of letras) {
  if ("aeiouAEIOU".includes(letra)) {
    continue; // Saltar se é unha vogal
  }
  resultadoForOf += letra; // Engadir á cadea sen vogais
}
alert("Texto sen vocales (for-of): " + resultadoForOf);

// Bucle 'for-in'
let resultadoForIn = "";
for (let indice in letras) {
  let letra = letras[indice];
  if ("aeiouAEIOU".includes(letra)) {
    continue; // Saltar se é unha vocal
  }
  resultadoForIn += letra; // Engadir á cadea sen vocales
}
alert("Texto sen vocales (for-in): " + resultadoForIn);
