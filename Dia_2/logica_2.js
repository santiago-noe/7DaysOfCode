alert("¡Bienvenido!");

//const nombre = prompt("¿Cuál es tu nombre?");
//const edad = prompt("¿Cuál es tu edad?");
//const ciudad = prompt("¿Cuál es tu ciudad?");


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