//Efrén COrzón

// Pedir al usuario que introduzca las fechas
const fecha1 = new Date(
  prompt(
    "Introduce la primera fecha (en formato YYYY-MM-DD o en milisegundos):"
  )
);
const fecha2 = new Date(
  prompt(
    "Introduce la segunda fecha (en formato YYYY-MM-DD o en milisegundos):"
  )
);

// Calcular la diferencia en milisegundos y luego en días
const diferenciaMilisegundos = Math.abs(fecha2 - fecha1);
const diferenciaDias = Math.round(
  diferenciaMilisegundos / (1000 * 60 * 60 * 24)
);

// Mostrar el resultado al usuario
alert(`La diferencia en días es: ${diferenciaDias}`);
