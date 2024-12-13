console.log("=== Métodos principales del objeto Math ===");

// 1. Math.PI - Número Pi
console.log("Valor de PI:", Math.PI);

// 2. Math.abs() - Valor absoluto
console.log("Valor absoluto de -5:", Math.abs(-5));

// 3. Math.round() - Redondear al entero más cercano
console.log("Redondear 4.6:", Math.round(4.6));
console.log("Redondear 4.4:", Math.round(4.4));

// 4. Math.floor() - Redondear hacia abajo
console.log("Redondear hacia abajo 4.9:", Math.floor(4.9));

// 5. Math.ceil() - Redondear hacia arriba
console.log("Redondear hacia arriba 4.1:", Math.ceil(4.1));

// 6. Math.pow() - Potencia (base, exponente)
console.log("2 elevado a la 3:", Math.pow(2, 3));

// 7. Math.sqrt() - Raíz cuadrada
console.log("Raíz cuadrada de 16:", Math.sqrt(16));

// 8. Math.cbrt() - Raíz cúbica
console.log("Raíz cúbica de 27:", Math.cbrt(27));

// 9. Math.max() - Máximo entre números
console.log("Máximo entre 1, 5 y 3:", Math.max(1, 5, 3));

// 10. Math.min() - Mínimo entre números
console.log("Mínimo entre 1, 5 y 3:", Math.min(1, 5, 3));

// 11. Math.random() - Número aleatorio entre 0 y 1
console.log("Número aleatorio entre 0 y 1:", Math.random());

// Generar un número aleatorio entre un rango (ejemplo 1-10)
let min = 1,
  max = 10;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Número aleatorio entre ${min} y ${max}:`, randomNum);

// 12. Math.trunc() - Elimina la parte decimal
console.log("Eliminar parte decimal de 4.7:", Math.trunc(4.7));

// 13. Math.sign() - Signo del número (-1, 0, 1)
console.log("Signo de -10:", Math.sign(-10));
console.log("Signo de 0:", Math.sign(0));
console.log("Signo de 10:", Math.sign(10));

// 14. Math.sin() - Seno de un ángulo (en radianes)
console.log("Seno de PI/2:", Math.sin(Math.PI / 2));

// 15. Math.cos() - Coseno de un ángulo (en radianes)
console.log("Coseno de PI:", Math.cos(Math.PI));

// 16. Math.tan() - Tangente de un ángulo (en radianes)
console.log("Tangente de PI/4:", Math.tan(Math.PI / 4));

// 17. Math.log() - Logaritmo natural
console.log("Logaritmo natural de 10:", Math.log(10));

// 18. Math.exp() - Exponencial de un número
console.log("Exponencial de 2:", Math.exp(2));

// 19. Math.hypot() - Hipotenusa de números (Teorema de Pitágoras)
console.log("Hipotenusa de 3 y 4:", Math.hypot(3, 4));
