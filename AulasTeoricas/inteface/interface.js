"use strict";
function apresentacao(pessoa) {
    console.log("Apresentacao");
}
function trocaNome(pessoa, novoNome) {
    pessoa.nome = novoNome;
}
const pessoa = {
    nome: 'Joao',
    idade: 30
};
const propriedade = {
    nome: 'Maria',
    ['regiao']: "sudeste",
    saudar(sobrenome) {
        console.log(sobrenome);
    }
};
apresentacao(propriedade);
trocaNome(propriedade, "Otavio");
propriedade.saudar('Aparecida');
class Humanin {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log(sobrenome);
    }
}
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
