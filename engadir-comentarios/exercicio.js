var rows = prompt("How many rows?", 9); // Pide ao usuario que introduza o número de filas (valor por defecto: 9)
var cols = prompt("How many columns?", 9); // Pide ao usuario que introduza o número de columnas (valor por defecto: 9)

// Comproba se o usuario non introduciu un valor; se é así, establece as filas e columnas a 9
if (rows == "" || rows == null) rows = 9;
if (cols == "" || cols == null) cols = 9;

// Chama á función createTable para crear a táboa co número de filas e columnas especificados
createTable(rows, cols);

function createTable(rows, cols) {
  // Inicializa a variable output co comezo da táboa HTML
  var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";
  output += "<tr>"; // Comeza unha nova fila

  // Crea a fila de cabeceira da táboa que mostra os múltiplos
  for (var k = 1; k <= cols; k++) {
    output += "<td><b>X " + k + "</b></td>"; // Engade a celda co texto "X k" en negrita
  }
  output += "</tr>"; // Pecha a fila de cabeceira

  var j = 1; // Inicializa a variable j que se usará para a multiplicación
  // Crea as filas da táboa multiplicativa
  for (var i = 1; i <= rows; i++) {
    output = output + "<tr>"; // Comeza unha nova fila para os resultados
    while (j <= cols) {
      // Para cada columna na fila actual
      output = output + "<td>" + i * j + "</td>"; // Engade a celda co resultado da multiplicación i * j
      j = j + 1; // Incrementa j para pasar á próxima columna
    }
    output = output + "</tr>"; // Pecha a fila de resultados
    j = 1; // Reinicia j para a próxima fila
  }
}
