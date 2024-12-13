console.log("=== PROPIEDADES Y MÉTODOS DEL OBJETO DATE ===");

// 1. Crear fechas usando el constructor Date
console.log("1. Creación de fechas:");
let fechaActual = new Date(); // Fecha y hora actual
console.log("Fecha actual:", fechaActual);

let fechaEspecifica = new Date(2024, 5, 13); // Año, Mes (0-11), Día
console.log("Fecha específica (2024-06-13):", fechaEspecifica);

let fechaConHora = new Date(2024, 5, 13, 14, 30, 0); // Año, Mes, Día, Hora, Minutos, Segundos
console.log("Fecha con hora (2024-06-13 14:30:00):", fechaConHora);

let fechaMilisegundos = new Date(0); // Desde el 01/01/1970
console.log("Fecha desde los milisegundos 0:", fechaMilisegundos);

// 2. Métodos para obtener información de la fecha
console.log("\n2. Métodos get para obtener información:");

console.log("Año:", fechaActual.getFullYear()); // Año
console.log("Mes (0-11):", fechaActual.getMonth()); // Mes (0-11)
console.log("Día del mes:", fechaActual.getDate()); // Día del mes
console.log("Día de la semana (0-6):", fechaActual.getDay()); // Día de la semana (0: Domingo, 6: Sábado)
console.log("Horas:", fechaActual.getHours()); // Horas
console.log("Minutos:", fechaActual.getMinutes()); // Minutos
console.log("Segundos:", fechaActual.getSeconds()); // Segundos
console.log("Milisegundos:", fechaActual.getMilliseconds()); // Milisegundos
console.log("Milisegundos desde 01/01/1970:", fechaActual.getTime()); // Tiempo en milisegundos desde 01/01/1970

// 3. Métodos para establecer información de la fecha
console.log("\n3. Métodos set para modificar fechas:");

let fechaModificada = new Date();
fechaModificada.setFullYear(2030);
fechaModificada.setMonth(11); // Diciembre (0-11)
fechaModificada.setDate(25);
fechaModificada.setHours(10);
fechaModificada.setMinutes(45);
fechaModificada.setSeconds(30);
console.log("Fecha modificada:", fechaModificada);

// 4. Fecha en formato local
console.log("\n4. Métodos de formato local:");

console.log("toString():", fechaActual.toString());
console.log("toDateString():", fechaActual.toDateString()); // Fecha sin hora
console.log("toTimeString():", fechaActual.toTimeString()); // Hora sin fecha
console.log("toLocaleDateString():", fechaActual.toLocaleDateString()); // Fecha local
console.log("toLocaleTimeString():", fechaActual.toLocaleTimeString()); // Hora local
console.log("toISOString():", fechaActual.toISOString()); // Fecha en formato ISO

// 5. Comparación de fechas
console.log("\n5. Comparación de fechas:");

let fecha1 = new Date(2024, 5, 13);
let fecha2 = new Date(2024, 5, 15);

if (fecha1 < fecha2) {
  console.log("La fecha1 es anterior a fecha2");
} else if (fecha1 > fecha2) {
  console.log("La fecha1 es posterior a fecha2");
} else {
  console.log("Ambas fechas son iguales");
}

// 6. Calcular diferencias entre fechas
console.log("\n6. Cálculo de diferencias:");

let fechaInicio = new Date(2024, 5, 1);
let fechaFin = new Date(2024, 5, 13);
let diferencia = fechaFin - fechaInicio; // Diferencia en milisegundos

let diasDiferencia = diferencia / (1000 * 60 * 60 * 24); // Convertir a días
console.log(`Diferencia entre fechas en días: ${diasDiferencia}`);

// 7. Crear fecha a partir de cadenas
console.log("\n7. Crear fechas a partir de strings:");

let fechaString = new Date("2024-06-13T14:30:00");
console.log("Fecha desde string ISO:", fechaString);

let fechaStringLocal = new Date("June 13, 2024 14:30:00");
console.log("Fecha desde string local:", fechaStringLocal);

// 8. Obtener fecha UTC
console.log("\n8. Fecha en formato UTC:");

console.log("Año UTC:", fechaActual.getUTCFullYear());
console.log("Mes UTC:", fechaActual.getUTCMonth());
console.log("Día UTC:", fechaActual.getUTCDate());
console.log("Hora UTC:", fechaActual.getUTCHours());

// 9. Fecha y hora actuales con `Date.now()`
console.log("\n9. Fecha actual en milisegundos desde 1970:");
console.log("Milisegundos desde 1970:", Date.now());

// 10. Validar fechas
console.log("\n10. Validación de fechas:");

let fechaInvalida = new Date("invalid date");
console.log("Fecha inválida:", fechaInvalida);
console.log("¿Es fecha válida?:", !isNaN(fechaInvalida));
