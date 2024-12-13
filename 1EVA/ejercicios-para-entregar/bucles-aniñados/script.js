//Efrén Corzón

let txt = prompt("Introduce unha cadea de texto para quitarlle as vocais:");

let palabras = txt.split(" ");

let textoSenVocais = "";

let i = 0;

while (i < palabras.length) {
  let palabra = palabras[i];

  for (let h = 0; h < palabra.length; h++) {
    let letra = palabra[h];

    if (
      letra !== "a" &&
      letra !== "e" &&
      letra !== "i" &&
      letra !== "o" &&
      letra !== "u"
    ) {
      textoSenVocais += palabra[h];
    }
  }

  if (i < palabras.length - 1) {
    textoSenVocais += " ";
  }

  i++;
}

alert(textoSenVocais);
