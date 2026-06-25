let display = document.getElementById("display");
let usarSeparador = false;


function add(valor){

    if(display.value === "0")
        display.value = valor;
    else
        display.value += valor;

}


function limpar(){
    display.value = "0";
}


function ce(){

    display.value =
        display.value.slice(0,-1);

    if(display.value === "")
        display.value = "0";
}


function calcular(){

    try{

        let resultado =
            eval(display.value);

        display.value = formatar(resultado);

    }

    catch{
        display.value = "Erro";
    }

}


function alternarSeparador(){

    usarSeparador =
        !usarSeparador;

    let numero =
        Number(display.value.replace(/,/g,''));

    if(!isNaN(numero))
        display.value = formatar(numero);

}


function formatar(valor){

    if(!usarSeparador)
        return valor.toString();

    return Number(valor)
        .toLocaleString('pt-BR');

}