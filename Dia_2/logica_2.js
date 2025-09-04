alert("¡Bienvenido!");

const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
const mensaje = "¡Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!";

alert(mensaje);

const gusta = prompt("¿Te gusta estudiar ${lenguaje}? Responde con el número 1 - SÍ o 2 - NO");
if (gusta == 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
if (gusta == 2){
    alert("Oh, qué pena... ¿Has intentado aprender otros lenguajes?");
}
//console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

const formulario = document.getElementById('formulario');
        const resultado = document.getElementById('resultado');
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const edad = document.getElementById('edad').value;
            const ciudad = document.getElementById('ciudad').value;
            resultado.innerHTML = `Hola, mi nombre es <strong>${nombre}</strong>, tengo <strong>${edad}</strong> años y vivo en <strong>${ciudad}</strong>.`;
        });