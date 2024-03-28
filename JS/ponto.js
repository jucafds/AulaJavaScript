function processar()
{
    var valor = document.querySelector(".bla") //d
    var idade = document.querySelectorAll("input.bla1") //e
    var res = document.getElementsByClassName("resu") //c
    var res2 = document.getElementsByClassName("resu1")

    res[0].innerHTML = valor.value;
    res2[0].innerHTML = idade[0].value;
}