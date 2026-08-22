const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botao-musica");

botaoMusica.addEventListener("click", function () {
    if (musica.paused) {
        musica.play();
        botaoMusica.textContent = "🔇";
    } else {
        musica.pause();
        botaoMusica.textContent = "🔊";
    }
});