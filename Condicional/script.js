//Efrén Corzón Vázquez

// Pide a nota ao usuario mediante un prompt
const nota = parseFloat(prompt("Introduce a nota numérica do alumno (0-10):"));

// Verifica a categoría da nota e mostra a nota xunto co resultado
if (nota >= 9 && nota <= 10) {
  alert("Nota: " + nota + " - Sobresaliente");
} else if (nota >= 7 && nota < 9) {
  alert("Nota: " + nota + " - Notable");
} else if (nota >= 6 && nota < 7) {
  alert("Nota: " + nota + " - Ben");
} else if (nota >= 5 && nota < 6) {
  alert("Nota: " + nota + " - Suficiente");
} else if (nota >= 0 && nota < 5) {
  alert("Nota: " + nota + " - Insuficiente");
} else {
  alert("Nota inválida. Introduce un valor entre 0 e 10.");
}
