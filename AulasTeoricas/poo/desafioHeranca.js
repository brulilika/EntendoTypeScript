"use strict";
//Desafio 1
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    Buzinar() {
        console.log('Buzinada!');
    }
    Acelerar(delta) {
        this.velocidade += delta;
    }
}
const moto = new Moto('Ducati');
moto.Buzinar();
console.log(moto.velocidade);
moto.Acelerar(20);
console.log(moto.velocidade);
//Desafio 2
class Forma2D {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Forma2D {
    Area() {
        return this.base * this.altura;
    }
}
var retangulo = new Retangulo(5, 7);
console.log(retangulo.Area());
//Desafio 3
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() { return this._primeiroNome; }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
