//Efrén Corzón Vázquez

var rows = prompt("How many rows?", 9); // Pide ao usuario que introduza o número de filas (valor por defecto: 9)
var cols = prompt("How many columns?", 9); // Pide ao usuario que introduza o número de columnas (valor por defecto: 9)

// Comproba se o usuario non introduciu un valor; se é así, establece as filas e columnas a 9
if (rows == "" || rows == null) rows = 9;
if (cols == "" || cols == null) cols = 9;

// Chama á función createTable para crear a táboa co número de filas e columnas especificados
createTable(rows, cols);

/**
 * Crea unha táboa multiplicativa en HTML.
 * A táboa ten 'rows' filas e 'cols' columnas.
 * Cada celda contén o produto da fila e a columna correspondente.
 */
function createTable(rows, cols) {
  var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>"; // Inicializa a táboa HTML
  output += "<tr>"; // Comeza unha nova fila

  // Engade cabeceiras para cada columna
  for (var k = 1; k <= cols; k++) {
    output += "<td><b>X " + k + "</b></td>"; // Engade cabeceira "X k"
  }
  output += "</tr>"; // Pecha a fila de cabeceiras

  var j = 1; // Inicializa a variable j para a multiplicación
  for (var i = 1; i <= rows; i++) {
    // Crea filas para os resultados
    output += "<tr>"; // Comeza unha nova fila
    while (j <= cols) {
      // Engade columnas
      output += "<td>" + i * j + "</td>"; // Engade o resultado da multiplicación
      j++; // Incrementa j
    }
    output += "</tr>"; // Pecha a fila
    j = 1; // Reinicia j para a próxima fila
  }
}
