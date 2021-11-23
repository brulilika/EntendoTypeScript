"use strict";
//string
let nome = 'Maria';
//tipo number, podendo ser int/float/decimal
let idade = 27;
console.log(idade);
idade = 2.3;
//boolean
let existe = true;
//tipos explícitos
let dinamico;
//essa permissao acontece pois quando declarado a variavel,
//nao foi declarado que tipo ela seria
dinamico = 'string';
dinamico = 20;
dinamico = false;
//definindo uma tipo para a variavel
let explicito;
explicito = 30;
//Vetor de strings
let vetor = ["Valor1", "Valor2"];
console.log(vetor[0]);
console.log(typeof vetor);
//Vetor de qualquer tipo de objeto
let objetos = [10, "Alguma coisa", false];
objetos[2] = true;
//Tuplas -> com essa declaração ele valida a quantidade e os tipos
let endereco = ["Algum lugar", 5];
let tupla = ["Algo", false];
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Verde"] = 2] = "Verde";
})(Cor || (Cor = {}));
let cor = Cor.Azul;
console.log(cor);
//Funcoes com return tipado
function novaFuncao() {
    return nome;
}
function executaVoid() {
    console.log("Execucao de void");
}
executaVoid();
function recebeParametro(valor, valor2) {
    return valor + valor2.toString();
}
let backFunction;
backFunction = recebeParametro;
backFunction("outro valor", 5);
//Objetos
let usuario = {
    nome,
    idade
};
usuario = {
    idade: 5,
    nome: "Julia"
};
