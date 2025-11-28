
function inserirTitulo() {
    
    
    var input = document.getElementById("txt-titulo");
    var textoDigitado = input.value;

    
    var titulo = document.getElementById("titulo");

    
    titulo.innerText = textoDigitado;

    
    titulo.style.color = "blue";
}