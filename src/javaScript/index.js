const botaoTema = document.getElementById("botao-tema");
const body = document.querySelector("body");
const imagemBotaoTema = document.querySelector(".imagem-botao");


botaoTema.addEventListener("click", () => {
    const modoEscuroAtivado = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroAtivado) {
        imagemBotaoTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTema.setAttribute("src", "./src/imagens/moon.png");
    }
});