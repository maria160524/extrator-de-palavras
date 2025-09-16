const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").Value;
    const campoResultado = document.querySelactor("#resultado-palavrachave");
    const palavrasChave = processaTexto(texto);
    
    campoResultado.textcontent = palavras.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}