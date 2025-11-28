function cadastrarUsuario() {

    var nome = document.getElementById("nome").value;
    var dataNasc = document.getElementById("dataNasc").value;
    var rua = document.getElementById("rua").value;
    var numero = document.getElementById("numero").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("uf").value;


    var frase = `${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

    var pResultado = document.getElementById("resultado");

    pResultado.innerText = frase;

    pResultado.style.color = "green";
    pResultado.style.fontSize = "24px";
}