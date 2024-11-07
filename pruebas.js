const fecha = new Date();

const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

console.log(`${dia} - ${mes} - ${anio}`);

if (anio > 2023) {
  console.log("es mayor");
} else {
  console.log("es menor");
}
