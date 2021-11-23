"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1900) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DataNova {
    constructor(dia = 1, mes = 1, ano = 1900) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    resumo() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}
const aniversario = new Data(28, 12, 1998);
console.log(`Meu aniversário é ${aniversario.dia}/${aniversario.mes}/${aniversario.ano}}`);
const casamento = new DataNova(10, 12, 2021);
