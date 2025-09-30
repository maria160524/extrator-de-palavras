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
    const frequencias=contrarequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenapalavra(p1, p2){
        return frequencias[p2]- frequencias[p1
{
    console. log (ordenadas);
    retuern ordenadas.slice(0,10);
}      
function contrafrequencias(palavras) {
    let frequencias= {};
    for (let i of palavras){
        frequencia[i] =0;
        for(let j of palavras){
            if(i==j){
                frequencias[i]++;
            }
        }
    }
        return palavras;
    }
