

function CalcularMedia(notas){
    soma = 0;
    for(i = 0;i < notas.length;i++){
        soma += notas[i];
    }
    mediaFinal = soma / notas.length;
        
    return mediaFinal;
         
    }
let mediaFinal;

function AprovarReprovar(mediaFinal){
    if(mediaFinal >= 7 ){
            return "Aprovado";
         }
         else{
            return "Reprovado";
         }
}
  

document.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let form = document.getElementById("form_1");

    let dados = new FormData(form)

    let object = {};

    let notas = [];
    for(let key of dados.keys()){
        object[key] = dados.get(key)

        notas.push(parseFloat(object[key]));}

       document.getElementById("resultado").innerText = "Média Final: " + CalcularMedia(notas) + " - " + AprovarReprovar(mediaFinal);
      });
     

document.addEventListener("reset", function(event){
    document.getElementById("resultado").innerText = "";
    
    
});