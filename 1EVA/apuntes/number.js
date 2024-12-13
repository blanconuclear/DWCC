console.log("=== PROPIEDADES Y MÉTODOS DEL OBJETO NUMBER ===");

// 1. Creación de números
console.log("1. Creación de números:");
let num1 = 3.14;
let num2 = 3;
let num3 = 3.14e3; // Notación científica
let num4 = 0xff; // Notación hexadecimal
let numObjeto = new Number(3.14);

console.log("Número decimal:", num1);
console.log("Número entero:", num2);
console.log("Notación científica (3.14e3):", num3); // 3140
console.log("Notación hexadecimal (0xFF):", num4); // 255
console.log("Número como objeto (no recomendado):", numObjeto);

// 2. Propiedades importantes de Number
console.log("\n2. Propiedades de Number:");
console.log("MIN_VALUE:", Number.MIN_VALUE); // Mínimo valor representable
console.log("MAX_VALUE:", Number.MAX_VALUE); // Máximo valor representable
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Infinito positivo
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // Infinito negativo
console.log("NaN (Not-a-Number):", Number.NaN);

// 3. Métodos de comprobación
console.log("\n3. Métodos de comprobación:");

console.log("¿123 es entero?", Number.isInteger(123)); // true
console.log("¿0.5 es entero?", Number.isInteger(0.5)); // false
console.log("¿'123' es entero?", Number.isInteger("123")); // false

console.log("¿123 es finito?", Number.isFinite(123)); // true
console.log("¿Infinity es finito?", Number.isFinite(Infinity)); // false
console.log("¿'123' es finito?", Number.isFinite("123")); // false

console.log("¿NaN es NaN?", Number.isNaN(NaN)); // true
console.log("¿0 / 0 es NaN?", Number.isNaN(0 / 0)); // true
console.log("¿123 es NaN?", Number.isNaN(123)); // false
console.log("¿'Hello' es NaN?", Number.isNaN("Hello")); // false

// 4. Métodos de transformación
console.log("\n4. Métodos de transformación:");

let numero = 1234.56789;

console.log("Convertir a string:", numero.toString()); // "1234.56789"
console.log(
  "Convertir a string local (es-ES):",
  numero.toLocaleString("es-ES")
); // "1.234,568"

console.log("Redondear a 2 decimales (toFixed):", numero.toFixed(2)); // "1234.57"
console.log(
  "Precisión total de 4 dígitos (toPrecision):",
  numero.toPrecision(4)
); // "1235"

console.log("Notación científica (toExponential):", numero.toExponential(2)); // "1.23e+3"

// 5. Ejemplo de precisión en operaciones aritméticas
console.log("\n5. Problemas de precisión en operaciones aritméticas:");

let sumaIncorrecta = 0.1 + 0.2;
console.log("0.1 + 0.2 =", sumaIncorrecta); // 0.30000000000000004

let sumaCorrecta = (0.1 * 10 + 0.2 * 10) / 10;
console.log("0.1 + 0.2 (solucionado):", sumaCorrecta); // 0.3

// 6. Comparación de números como objetos
console.log("\n6. Comparación de números como objetos:");

let n1 = new Number(123);
let n2 = new Number(123);

console.log("¿n1 == 123?", n1 == 123); // true (valor primitivo se compara)
console.log("¿n1 === 123?", n1 === 123); // false (objeto vs primitivo)
console.log("¿n1 == n2?", n1 == n2); // false (objetos diferentes)

// 7. Validación de números y comparación con undefined
console.log("\n7. Validación de valores:");

let valorInvalido = "ABC" / 2; // Resultado: NaN
console.log("Valor inválido (NaN):", valorInvalido);
console.log("¿Es NaN?:", Number.isNaN(valorInvalido)); // true
console.log("¿Es finito?:", Number.isFinite(valorInvalido)); // false
