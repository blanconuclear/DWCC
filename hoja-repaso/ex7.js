// Escribe un programa en JavaScript para calcular el número de días que faltan hasta la próxima Navidad.

function proximaNavidad() {
  const hoy = new Date(); // Fecha actual
  const navidad = new Date(hoy.getFullYear(), 11, 25); // Navidad (mes 11 = diciembre)

  const diasRestantes = Math.ceil((navidad - hoy) / (1000 * 60 * 60 * 24));

  console.log(`Faltan ${diasRestantes} días para la próxima Navidad.`);

  console.log(navidad);
}

proximaNavidad();
