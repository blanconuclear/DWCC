//Efrén Corzón

// Solicitar o texto ó usuario
let texto = prompt("Introduce unha cadea de texto:");

// Bucle 'while'
let resultadoWhile = "";
let i = 0;
while (i < texto.length) {
  let char = texto[i];
  if ("aeiouAEIOU".includes(char)) {
    i++;
    continue;
  }
  resultadoWhile += char;
  i++;
}
alert("Texto sin vocales (while): " + resultadoWhile);

// Bucle 'do-while'
let resultadoDoWhile = "";
let j = 0;
do {
  let char = texto[j];
  if ("aeiouAEIOU".includes(char)) {
    j++;
    continue;
  }
  resultadoDoWhile += char;
  j++;
} while (j < texto.length);
alert("Texto sin vocales (do-while): " + resultadoDoWhile);

// Bucle 'for'
let resultadoFor = "";
for (let i = 0; i < texto.length; i++) {
  let char = texto[i];
  if ("aeiouAEIOU".includes(char)) {
    continue;
  }
  resultadoFor += char;
}
alert("Texto sin vocales (for): " + resultadoFor);
