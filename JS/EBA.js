function booh(){
    alert("Booh!"); //2
}

function soma(){ //8 e 3
    let n01 = document.getElementById("n_1"); //a
    console.log(n01.value);
    let n02 = document.getElementById("n_2");

    let soma = parseInt(n01.value) + parseInt(n02.value);

    let resultado = document.getElementsByTagName("p"); //b
    resultado[0].innerHTML = soma;
    resultado[0].value = "";
} 
    //tem que ficar fora funcionar 
    document.getElementById("nomeG").onchange = function() {maiúsculo()}; //4-c e 7
    function maiúsculo() {
      var coisa = document.getElementById("nomeG");
      coisa.value = coisa.value.toUpperCase();
    }
    function mudança(caixa) { //4-b, o clique apenas muda a cor da caixa
        caixa.style.background = "yellow";
      }

    function MarioGrande(x) { //4-a a imagem teve que ficar nesta pasta mesmo
      x.style.height = "350px";
      x.style.width = "200px";
      }
      
      function MarioPequeno(x) {
        x.style.height = "100px";
        x.style.width = "80px";
      }
