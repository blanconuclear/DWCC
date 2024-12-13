/****************

Nombre y apellidos: 
Fecha:



Recorda engadir os comentarios que fagan falta!!!
******************/

const dataLoader = document.getElementById("dataLoader");
const dataLoader2 = document.getElementById("dataLoader2");
const dataPusher = document.getElementById("dataPusher");

// ***************************************** Editar a partir de aquí ******************************************/

function calcularFactorial(valor) {

	//Poñemos a 1 e non 0 para que empece a multiplicar e non de sempre 0
	let resultado=1;

	//recorremos e multiplicamos
	for (let i = 1; i <= valor; i++) {
		resultado=resultado*i;
	}
	
	return resultado;

}


function avaliarNota(nota) {
	// Declaración de variable para almacenar la nota

let categoria; // Declaración de variable que almacenará el texto correspondiente a la nota

// Asignar la categoría dependiendo de la nota para luego poder procesar en switch
if (nota >= 9 ) {
    categoria = "Excelente";
} else if (nota >= 5) {
    categoria = "Aprobado";
} else if (nota <5){
	categoria="suspenso"
}else{
	categoria="incorrecto";
}

return categoria;

}

function likes(totalLikes) {

    let resultado;
    
    if (totalLikes >= 1000000) {
        resultado = Math.floor(totalLikes / 1000000) + "M";
      } else if (totalLikes >= 1000) {
        resultado = Math.floor(totalLikes / 1000) + "K";
      } else {
        resultado = totalLikes.toString(); // Devolver el número como string
      }

   return resultado;
}

function sumaPares(_num1,_num2) {
	
let num1=parseInt(_num1);
let num2=parseInt(_num2);


	let resultado=0;
	
	// if(!isNaN(num1)||!isNaN(num2)){
	// 	throw new Error("Non é un número");
	// }

	//miramos os pares para o numero1

	//Si num1 > num2 entra aquí
	if (num1>num2) {
		//Recorremos
		for (let i = num2; i <= num1; i++) {
			//Miramos los pares
			if (i%2==0) {
			resultado+=i;
			}
	}
}else{
	//Recorremos
	for (let i = num1; i <= num2; i++) {
			//Miramos los pares
		if (i%2==0) {
		resultado+=i;
		}
}
}
return resultado;
	}


sumaPares();


function comprobarExercicios() {
	//Podes usar este código como exemplo para comprobar que as funcións actuan correctamente.
	dataPusher.innerHTML = " Valores entregados: Primer valor (" + dataLoader.value + ") <-> Segundo valor(" + dataLoader2.value + ")";
	dataPusher.innerHTML += "<br/>calcularFactorial("+dataLoader.value+") = " + calcularFactorial(dataLoader.value);
	dataPusher.innerHTML += "<br/>avaliarNota("+dataLoader.value+") = " + avaliarNota(dataLoader.value);
	dataPusher.innerHTML += "<br/>likes("+dataLoader.value+") = " + likes(dataLoader.value);
	dataPusher.innerHTML += "<br/>sumaPares("+dataLoader.value+") = " + sumaPares(dataLoader.value,dataLoader2.value);

}







 