// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Note: Assume punctuation and numbers symbols are not included in the passed
// string..

let text = "webmaster";

let textOrdenado = text.split("").sort().join("");

console.log(textOrdenado);
