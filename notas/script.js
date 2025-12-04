function CalcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    mediaFinal = soma / notas.length;
    return mediaFinal;
}

let mediaFinal;

function AprovarReprovar(mediaFinal) {
    return mediaFinal >= 7 ? "Aprovado" : "Reprovado";
}

/* ------------------------------
   VALIDAÇÕES DO PROFESSOR
--------------------------------*/

function validaCampo(elemento) {
    elemento.addEventListener("focusout", function () {

        if (this.value.trim() === "") {
            document.querySelector(".mensagem").innerText = "Verifique os campos em vermelho.";
            this.classList.add("erro");
        } else {
            this.classList.remove("erro");
        }

    });
}

function validaCampoNumerico(elemento) {
    elemento.addEventListener("focusout", function () {

        let numero = Number(this.value);

        if (this.value === "" || isNaN(numero) || numero < 0 || numero > 10) {
            document.querySelector(".mensagem").innerText = "Digite valores numéricos entre 0 e 10.";
            this.classList.add("erro");
        } else {
            this.classList.remove("erro");
        }
    });
}

/* ------------------------------
   FORMULÁRIO
--------------------------------*/

document.getElementById("form_1").addEventListener("submit", function (event) {
    event.preventDefault();

    // se houver algum erro, não envia
    if (document.querySelector(".erro")) {
        document.querySelector(".mensagem").innerText = "Corrija os campos antes de enviar.";
        return;
    }

    let dados = new FormData(this);
    let notas = [];

    for (let key of dados.keys()) {
        notas.push(parseFloat(dados.get(key)));
    }

    let media = CalcularMedia(notas);
    let resultado = AprovarReprovar(media);

    document.getElementById("resultado").innerText =
        "Média Final: " + media + " - " + resultado;
});

document.getElementById("form_1").addEventListener("reset", function () {
    document.getElementById("resultado").innerText = "";
    document.querySelector(".mensagem").innerText = "";
});

/* ------------------------------
   APLICANDO VALIDAÇÕES
--------------------------------*/

let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
let camposNumericos = document.querySelectorAll("input.numero");

camposObrigatorios.forEach(campo => validaCampo(campo));
camposNumericos.forEach(campo => validaCampoNumerico(campo));
