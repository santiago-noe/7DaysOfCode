
alert('¡Bienvenido a mi página!');
//Dia 1 practicando logica de programacion con js

function imprimir(mensaje) {
  const div = document.getElementById('resultados');
  div.innerHTML += `<p>${mensaje}</p>`;
}

let numeroUn  = 1
let stringUn = "1"

let numeroTreinta = 30
let stringTreinta = "30"

let numeroDiez = 10
let stringDiez = "10"

if (numeroUn === stringUn) {
  imprimir('Las variables numeroUn y stringUn tienen el mismo valor y el mismo tipo');
} else if (numeroUn == stringUn) {
  imprimir('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  imprimir('Las variables numeroUn y stringUn no tienen el mismo valor');
}

if (numeroTreinta === stringTreinta) {
  imprimir('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else if (numeroTreinta == stringTreinta) {
  imprimir('Las variables numeroTreinta y stringTreinta tienen el mismo valor, pero tipos diferentes');
} else {
  imprimir('Las variables numeroTreinta y stringTreinta no tienen el mismo valor');
}

if (numeroDiez === stringDiez) {
  imprimir('Las variables numeroDiez y stringDiez tienen el mismo valor y el mismo tipo');
} else if (numeroDiez == stringDiez) {
  imprimir('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  imprimir('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}