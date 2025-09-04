// Lógica de elección interactiva solo con JS (alert y prompt)

// 1. Elegir área
let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End')");
while (area !== "Front-End" && area !== "Back-End") {
    area = prompt("Por favor, escribe 'Front-End' o 'Back-End'");
}

if (area === "Front-End") {
    let framework = prompt("¿Quieres aprender React o aprender Vue?");
    while (framework !== "React" && framework !== "Vue") {
        framework = prompt("Por favor, escribe 'React' o 'Vue'");
    }
    alert(`¡Genial! Elegiste Front-End y quieres aprender ${framework}.`);
} else {
    let lenguaje = prompt("¿Quieres aprender C# o aprender Java?");
    while (lenguaje !== "C#" && lenguaje !== "Java") {
        lenguaje = prompt("Por favor, escribe 'C#' o 'Java'");
    }
    alert(`¡Excelente! Elegiste Back-End y quieres aprender ${lenguaje}.`);
}

// 2. Especialización o Fullstack
let camino = prompt("¿Quieres seguir especializándote en el área elegida o convertirte en Fullstack? (Escribe 'especializarme' o 'Fullstack')");
while (camino !== "especializarme" && camino !== "Fullstack") {
    camino = prompt("Por favor, escribe 'especializarme' o 'Fullstack'");
}

if (camino === "especializarme") {
    alert("¡Sigue profundizando en tu área y conviértete en un experto!");
} else {
    alert("¡Genial! Convertirse en Fullstack abre muchas puertas en el mundo del desarrollo.");
}

// 3. Tecnologías adicionales
let otra = "ok";
while (otra.toLowerCase() === "ok") {
    let tech = prompt("¿Qué otra tecnología te gustaría aprender?");
    if (tech && tech.trim() !== "") {
        alert(`¡${tech} es una excelente tecnología para aprender!`);
    }
    otra = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe 'ok' para agregar otra o cualquier otra cosa para finalizar)");
}

alert("¡Gracias por compartir tus elecciones de aprendizaje! ¡Mucho éxito en tu camino como desarrollador!");