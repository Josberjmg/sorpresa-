// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Bueno queria decirte que nunca cambies yosi..", time: 15 },
  { text: "Que siempre seas tu misma", time: 18 },
  { text: "aunque si cambia esto: ..", time: 27 },
  { text: "aaa no te creas que voy a estar queriendote cambiar yo vale", time: 32 },
  { text: "si vales mil y no son bs son bitcoins osea demasiá plata ps.", time: 35 },
  { text: "Bueno entonces no tengo otra que felicitarte por tu cumple con este detallito", time: 41 },
  { text: "detallito que si me costo un poco de tiempo y algo de estudio pero bueno se me antojo para ti", time: 47 },
  { text: "y bueno solo queria darte algo", time: 54 },
  { text: "a la vez decirte algunas cositas pero no soy bueno para esto jsjs", time: 59 },
  { text: "entonces espero que tengas un lindo cumple", time: 67 },
  { text: "que te quede como un recuerdo bien chevere", time: 72 },
  { text: "epa yava", time: 78 },
  { text: "espero que ya en este punto en el que veas esto ya tenga mi pedazo de torta jijij", time: 83 },
  { text: "no mentira jajsh", time: 91 },
  { text: "queria decirte que te considero alguien muy inteligente y random jsjahd", time: 97 },
  { text: "medio resumiendo es lindo y interesante como eres o por lo menos como siento que eres", time: 104 },
  { text: "entonces tienes mi aprecio y quiero que te cuides mucho", time: 108 },
  { text: "porque estan llendo por ti 💀", time: 113 },
  { text: "a no te creas jashas", time: 119 },
  { text: "esperate que no he terminado espera la cancion jsjsj", time: 133 },
  { text: "pero si cuidate mucho, actualmente estan pasando cosas malas a mucha gente", time: 148 },
  { text: "y no me gustaria que te pasara nada a ti", time: 153 },
  { text: "obvio si te pasara que te toca una loteria o algo asi si jsjsjdh", time: 158 },
  { text: "Amen🙏", time: 164 },
  { text: "que Dios y la Virgen te cuiden entonces de lo malo", time: 169 },
  { text: "doble Amen🙏", time: 176 },
  { text: "bueno ya para finalizar", time: 183 },
  { text: "te deseo un Feliz cumpleaños a ti Yoseglys Valentina❤️", time: 188 },
  { text: "Iloviuyu", time: 198 },
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