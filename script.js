// ACTIVIDAD PREGUNTAS Y RESPUESTAS
const preguntas = [
  { pregunta: "¿Cuántas teclas tiene un piano estándar?", respuesta: "88" },
  { pregunta: "¿Quién compuso 'Para Elisa'?", respuesta: "Beethoven" },
  { pregunta: "¿Qué tipo de piano es más grande: de cola o vertical?", respuesta: "de cola" },
];

let preguntaActual = 0;

document.getElementById("comprobar").addEventListener("click", () => {
  const respuestaUsuario = document.getElementById("respuesta").value.toLowerCase();
  const respuestaCorrecta = preguntas[preguntaActual].respuesta.toLowerCase();

  if (respuestaUsuario === respuestaCorrecta) {
    document.getElementById("resultado").textContent = "¡Correcto!";
  } else {
    document.getElementById("resultado").textContent = `Incorrecto. La respuesta correcta es: ${preguntas[preguntaActual].respuesta}`;
  }

  preguntaActual = (preguntaActual + 1) % preguntas.length;
  document.getElementById("pregunta").textContent = preguntas[preguntaActual].pregunta;
  document.getElementById("respuesta").value = "";
});

// Mostrar la primera pregunta al cargar la página
document.getElementById("pregunta").textContent = preguntas[preguntaActual].pregunta;

// ACTIVIDAD MEMORIA
const notas = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
const cartas = [...notas, ...notas].sort(() => Math.random() - 0.5);

let cartasVolteadas = [];
let paresEncontrados = 0;

const tablero = document.getElementById("tablero-memoria");

cartas.forEach((nota, index) => {
  const carta = document.createElement("div");
  carta.classList.add("carta");
  carta.dataset.nota = nota;
  carta.textContent = "?";
  carta.addEventListener("click", () => voltearCarta(carta));
  tablero.appendChild(carta);
});

function voltearCarta(carta) {
  if (cartasVolteadas.length < 2 && !carta.classList.contains("volteada")) {
    carta.textContent = carta.dataset.nota;
    carta.classList.add("volteada");
    cartasVolteadas.push(carta);

    if (cartasVolteadas.length === 2) {
      setTimeout(comprobarPareja, 1000);
    }
  }
}

function comprobarPareja() {
  const [carta1, carta2] = cartasVolteadas;

  if (carta1.dataset.nota === carta2.dataset.nota) {
    paresEncontrados++;
    if (paresEncontrados === notas.length) {
      document.getElementById("mensaje-memoria").textContent = "¡Felicidades, has ganado!";
    }
  } else {
    carta1.textContent = "?";
    carta2.textContent = "?";
  }

  carta1.classList.remove("volteada");
  carta2.classList.remove("volteada");
  cartasVolteadas = [];
}

// RECONOCIMIENTO AUDITIVO
const notasSonido = {
  Do: "do.mp3",
  Re: "re.mp3",
  Mi: "mi.mp3",
  Fa: "fa.mp3",
  Sol: "sol.mp3",
  La: "la.mp3",
  Si: "si.mp3",
};

let notaActual;

document.getElementById("reproducir").addEventListener("click", () => {
  const notas = Object.keys(notasSonido);
  notaActual = notas[Math.floor(Math.random() * notas.length)];
  const audio = new Audio(notasSonido[notaActual]);
  audio.play();
});

document.getElementById("comprobar-auditivo").addEventListener("click", () => {
  const respuestaUsuario = document.getElementById("respuesta-auditiva").value.trim();
  if (respuestaUsuario.toLowerCase() === notaActual.toLowerCase()) {
    document.getElementById("resultado-auditivo").textContent = "¡Correcto!";
  } else {
    document.getElementById("resultado-auditivo").textContent = `Incorrecto. La nota era: ${notaActual}`;
  }
});

// LECTURA A PRIMERA VISTA
const partituras = ["♩ ♫ ♬ ♭", "♩ ♪ ♫ ♬", "♭ ♮ ♯", "♩ ♪ ♫ ♬ ♭ ♮ ♯"];

let partituraActual = 0;

document.getElementById("siguiente-partitura").addEventListener("click", () => {
  partituraActual = (partituraActual + 1) % partituras.length;
  document.getElementById("partitura").textContent = partituras[partituraActual];
});

// Mostrar la primera partitura al cargar la página
document.getElementById("partitura").textContent = partituras[partituraActual];


  document.querySelectorAll('.partitura-img').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('zoom');
    });
  });
</script>
<style>
  .zoom {
    transform: scale(1.5);
    cursor: zoom-out;
  }
