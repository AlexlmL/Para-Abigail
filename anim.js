//var audio = document.querySelector("audio");
//var lyrics = document.querySelector("#lyrics");

/*var lyricsData = [
  { time: 0, text: "I'll be your baby" },
  { time: 7, text: "There's nothing better I'd rather do" },
  { time: 13, text: "I'm lost completely" },
  { time: 20, text: "I might as well be over the moon" },
  { time: 30, text: "I'd like it if you tried"},
  { time: 31, text: "Before you change my mind"},
  { time: 35, text: "Are you gonna be here with me?"},
  { time: 39, text: "I know you better"},
  { time: 41, text: "This momentary ride"},
  { time: 47, text: "This fire by my side"},
  { time: 49, text: "Are you gonna be here with me?"},
  { time: 54, text: "You know that"},
  { time: 55, text: "I'll be your baby" },
  { time: 62, text: "There's nothing better I'd rather do" },
  { time: 68, text: "I'm lost completely" },
  { time: 75, text: "I might as well be over the Moon" },
  { time: 87, text: "You call me up at night" },
  { time: 90, text: "Imaginary lines" },
  { time: 93, text: "Are you gonna go back to sleep?" },
  { time: 96, text: "I know you better" },
  { time: 100, text: "Than you know yourself" },
  { time: 103, text: "I'm only saying" },
  { time: 104, text: "Play your hand with someone else (someone else)" },
  { time: 109, text: "Don't tell me how to" },
  { time: 112, text: "Be your baby" },
  { time: 118, text: "There's nothing better I'd rather do" },
  { time: 124, text: "I'm lost completely" },
  { time: 131, text: "I might as well be over the Moon" },
  { time: 138, text: "I might as well be over the Moon" }
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime)+1;
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
        var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}
setTimeout(ocultarTitulo, 306000);*/