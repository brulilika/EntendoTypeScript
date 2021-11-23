"use strict";
/*Converter o código informado em JavaScript
 * para TypeScript
*/
let podeSerNulo = 'abc';
console.log(podeSerNulo);
let correntista, ContaBancaria = {
    nome: "Ana Silva",
    saldo: 1234,
    contatos: ['123', '456', '789'],
    valorDeposito(valor) {
        this.saldo += valor;
    }
};
