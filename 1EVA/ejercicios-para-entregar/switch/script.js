//EFrén Corzón Vázquez

// Pide la nota al usuario
const nota = parseFloat(
  prompt("Introduce la nota numérica del alumno (0-10):")
);

// Mapea la nota a un valor discreto que el switch pueda evaluar
let categoriaValor;

// Asigna un valor a la variable `categoriaValor` según el rango de la nota
if (nota >= 9 && nota <= 10) {
  categoriaValor = 1; // Sobresaliente
} else if (nota >= 7 && nota < 9) {
  categoriaValor = 2; // Notable
} else if (nota >= 6 && nota < 7) {
  categoriaValor = 3; // Bien
} else if (nota >= 5 && nota < 6) {
  categoriaValor = 4; // Suficiente
} else if (nota >= 0 && nota < 5) {
  categoriaValor = 5; // Insuficiente
} else {
  categoriaValor = 6; // Nota inválida
}

// Usa un switch sin `true` y compara el valor de `categoriaValor`
switch (categoriaValor) {
  case 1:
    alert("Nota: " + nota + " - Sobresaliente");
    break;
  case 2:
    alert("Nota: " + nota + " - Notable");
    break;
  case 3:
    alert("Nota: " + nota + " - Bien");
    break;
  case 4:
    alert("Nota: " + nota + " - Suficiente");
    break;
  case 5:
    alert("Nota: " + nota + " - Insuficiente");
    break;
  case 6:
    alert("Nota inválida. Introduce un valor entre 0 y 10.");
    break;
  default:
    alert("Ocurrió un error inesperado.");
}
