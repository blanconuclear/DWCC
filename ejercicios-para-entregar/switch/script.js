//EFrén Corzón Vázquez

// Pide a nota ao usuario
const nota = parseFloat(prompt("Introduce a nota numérica do alumno (0-10):"));

// Usa un switch para determinar a categoría da nota
switch (true) {
  case nota >= 9 && nota <= 10:
    alert("Nota: " + nota + " - Sobresaliente");
    break;
  case nota >= 7 && nota < 9:
    alert("Nota: " + nota + " - Notable");
    break;
  case nota >= 6 && nota < 7:
    alert("Nota: " + nota + " - Ben");
    break;
  case nota >= 5 && nota < 6:
    alert("Nota: " + nota + " - Suficiente");
    break;
  case nota >= 0 && nota < 5:
    alert("Nota: " + nota + " - Insuficiente");
    break;
  default:
    alert("Nota inválida. Introduce un valor entre 0 e 10.");
    break;
}
