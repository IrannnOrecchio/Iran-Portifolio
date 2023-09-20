document.addEventListener("DOMContentLoaded", function() {
  const welcomeElement = document.getElementById("welcome");
  welcomeElement.classList.remove("hidden");

  const dotsElement = document.getElementById("dots");

  let lines = welcomeElement.innerHTML.split("<br>");
  welcomeElement.innerHTML = "";

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    let line = lines[lineIndex];
    let typing = setInterval(function() {
      if (charIndex < line.length) {
        welcomeElement.innerHTML += line.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typing);
        charIndex = 0;
        lineIndex++;
        if (lineIndex < lines.length) {
          welcomeElement.innerHTML += "<br>";
          typeLine();
        } else {
          dotsElement.style.visibility = "visible";
          dotsElement.classList.add("blink");
          removeTypingIndicator();
        }
      }
    }, 46); // Intervalo de 46ms
  }

  function removeTypingIndicator() {
    setTimeout(function() {
      dotsElement.style.visibility = "hidden";
      dotsElement.classList.remove("blink");
    }, 2000); // Tempo de espera de 2 segundos antes de remover a barra de digitação
  }

  typeLine();
});

document.addEventListener("DOMContentLoaded", function () {
  const textoPortifolio = "PORTIFÓLIO";
  const elementoPortifolio = document.getElementById("escrita-portifolio");
  elementoPortifolio.innerHTML = "";

  let indiceCaractere = 0;

  function digitarTexto() {
    if (indiceCaractere < textoPortifolio.length) {
      elementoPortifolio.innerHTML += textoPortifolio.charAt(indiceCaractere);
      indiceCaractere++;
      setTimeout(digitarTexto, 167);
    } else {
      elementoPortifolio.classList.remove("blink"); // Remove a classe que faz a barra de digitação piscar
    }
  }

  digitarTexto();
});