console.log("=== PROPIEDADES, SUBTIPOS Y CONTROL DE ERRORES EN JAVASCRIPT ===");

// 1. Creación y lanzamiento de errores
console.log("\n1. Creación y lanzamiento de errores:");

try {
  console.log("Intentando ejecutar código...");

  // Crear y lanzar un error personalizado
  throw new Error("Este es un error personalizado.");

  console.log("Este código no se ejecutará."); // No se alcanzará
} catch (err) {
  console.log("Error capturado:");
  console.log("Nombre del error:", err.name); // Nombre del error (Error)
  console.log("Mensaje del error:", err.message); // Mensaje del error
} finally {
  console.log("Bloque finally: Se ejecuta siempre.");
}

// 2. Subtipos de errores
console.log("\n2. Subtipos de errores:");

try {
  // EvalError (raro de encontrar en navegadores modernos)
  throw new EvalError("Error al ejecutar eval().");
} catch (err) {
  console.log("EvalError capturado:", err.message);
}

try {
  // RangeError
  let arr = new Array(-1); // Rango inválido
} catch (err) {
  console.log("RangeError capturado:", err.message);
}

try {
  // ReferenceError
  console.log(variableInexistente); // Referencia no definida
} catch (err) {
  console.log("ReferenceError capturado:", err.message);
}

try {
  // SyntaxError (solo ocurre en eval)
  eval("var a = 'test;"); // Error de sintaxis
} catch (err) {
  console.log("SyntaxError capturado:", err.message);
}

try {
  // TypeError
  let num = null;
  num.toString(); // Error al llamar a un método sobre null
} catch (err) {
  console.log("TypeError capturado:", err.message);
}

try {
  // URIError
  decodeURI("%"); // URI malformada
} catch (err) {
  console.log("URIError capturado:", err.message);
}

// 3. Uso de propiedades name y message
console.log("\n3. Propiedades 'name' y 'message':");

let customError = new RangeError("Número fuera de rango.");
console.log("Nombre del error:", customError.name); // RangeError
console.log("Mensaje del error:", customError.message); // Número fuera de rango

// 4. Uso de try-catch-finally con throw
console.log("\n4. Uso de try-catch-finally con throw:");

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero."); // Lanzar error
    }
    return a / b;
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Fin del intento de división.");
  }
}

console.log("Resultado:", divide(10, 2)); // Correcto
console.log("Resultado:", divide(10, 0)); // Error

// 5. Lanzamiento de diferentes tipos de errores
console.log("\n5. Lanzamiento de diferentes tipos de errores:");

try {
  let valor = 200;

  if (valor > 100) {
    throw "El valor es demasiado grande."; // Error como String
  }
} catch (err) {
  console.log("Error capturado:", err);
}

// 6. Generar errores con parámetros no válidos
console.log("\n6. Generar errores con parámetros no válidos:");

function verificarNumero(num) {
  if (typeof num !== "number") {
    throw new TypeError("El argumento debe ser un número.");
  }
  console.log("El número es válido:", num);
}

try {
  verificarNumero("texto"); // Tipo incorrecto
} catch (err) {
  console.log(err.name + ": " + err.message);
}

try {
  verificarNumero(42); // Correcto
} catch (err) {
  console.log(err.name + ": " + err.message);
}
