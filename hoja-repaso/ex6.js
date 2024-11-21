// Escribe un programa en JavaScript para obtener la fecha actual.
// Salida esperada:
// mm-dd-yyyy, mm/dd/yyyy o dd-mm-yyyy, dd/mm/yyyy.

function fechaActual() {
  let fechaActual = new Date();

  let ano = fechaActual.getFullYear();
  let mes = fechaActual.getMonth() + 1;
  let dia = fechaActual.getDay();

  let solucion = `${dia}-${mes}-${ano}`;

  console.log(solucion);
}

fechaActual();
