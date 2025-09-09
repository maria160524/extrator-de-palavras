const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").Value;

    const campoResultado = document.querySelactor("#resultado-palavrachave");

    const palavras = texto.split(" ");
    
    campoResultado.textcontent = palavras;
}