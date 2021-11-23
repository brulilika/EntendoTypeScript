"use strict";
/*
Criar um objeto funcionario com:
 - Array de strings com nomes dos supervisores
 - Funcao de bater ponto que recebe a hora e retorna uma string
   - "Ponto normal" se hora <= 8
   - "Fora do horário" se hora > 8
*/
let funcionario = {
    supervisores: ["Supervisor 1", "Supervisor 2", "Supervisor 3"],
    marcarPonto(horario) {
        return horario <= 8 ? "Ponto normal" : "Fora do horário";
    }
};
//Union Types
let nota = 10;
console.log(`Valor da nota é ${nota}`);
console.log('Valor da nota é ' + nota);
//Chegageem de tipos em Runtime
if (typeof nome === "string") {
    console.log("Temos uma string!");
}
else {
    console.log("Temos uma " + typeof nome);
}
//Tipo NEVER - diz que a funcao nunca vai retornar 
//ou vai ficar em um looping
function falha(mensagem) {
    throw new Error(mensagem);
}
if (nome != "Pao") {
    falha("Como assim não é um pao?");
}
//Como permitir que objetos sejam Nullable
let altura = 10;
altura = null;
