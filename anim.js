// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Bueno queria decirte que nunca cambies yosi👀..", time: 15 },
  { text: "Que siempre seas tu misma", time: 18 },
  { text: "aunque si cambia esto: ..", time: 23 },
  { text: "aaa no te creas que voy a estar queriendote cambiar yo vale", time: 28 },
  { text: "si vales mil y no son bs son bitcoins osea demasiá plata ps.", time: 35 },
  { text: "Bueno queria felicitarte por tu cumple con este detallito", time: 40 },
  { text: "con mucho cariño", time: 46 },
  { text: "detallito que si me costo un poco de tiempo y algo de estudio pero bueno se me antojo para ti", time: 49 },
  { text: "y bueno solo queria darte algo", time: 55 },
  { text: "a la vez decirte algunas cositas pero no soy bueno para esto jsjs", time: 59 },
  { text: "entonces espero que tengas un lindo cumple", time: 67 },
  { text: "que te quede como un recuerdo bien chevere", time: 71 },
  { text: "epa yava", time: 75 },
  { text: "espero que ya en este punto en el que veas esto ya tenga mi pedazo de torta jijij", time: 78 },
  { text: "no mentira jajsh", time: 85 },
  { text: "solo quería decirte que te considero alguien muy especia, inteligente y random jsjahd", time: 89 },
  { text: "medio resumiendo es lindo y interesante tu forma de ser, me encanta :) ", time: 97 },
  { text: "tienes mi aprecio y cualquier cosita que pueda hacer por ti me dices", time: 103 },
  { text: "si esta en mis posibilidades con gusto te ayudaré", time: 109 },
  { text: "cuidate mucho si?🤗", time: 114 },
  { text: "porque estan llendo por ti 💀", time: 118 },
  { text: "a no te creas jashas", time: 122 },
  { text: "bueno que massss...... no sé pudin?", time: 133 },
  { text: "bueno no se cuando salimo a hartar?", time: 136 },
  { text: "yo invito, tu pagas :D", time: 140 },
  { text: "ya se antoja comer o tal vez cuando escribi esto tenia hambre, sueño o no se tarea", time: 144 },
  { text: "pero aja si cuidate mucho, actualmente estan pasando cosas malas a mucha gente", time: 152 },
  { text: "y no me gustaria que te pasara nada a ti", time: 158 },
  { text: "obvio si te pasara que te toca una loteria o algo asi si jsjsjdh", time: 162 },
  { text: "Amen🙏", time: 169 },
  { text: "que Dios y la Virgen te cuiden entonces de lo malo", time: 171 },
  { text: "doble Amen🙏", time: 175 },
  { text: "bueno ya para finalizar", time: 178 },
  { text: "te deseo un Feliz cumpleaños a ti Yoseglys Valentina❤️", time: 182 },
  { text: "Iloviuyu", time: 188 },
  { text: "FIN:D", time: 200 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 16000);

function ocultarImagen() {
  var imagenmanzana = document.querySelector(".imagenmanzana");
  imagenmanzana.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    imagenmanzana.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarImagen, 16000);
