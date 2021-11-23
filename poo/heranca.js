"use strict";
class Carro {
    constructor(marca, modelo, velocidadeAtual, velocidadeMaxima = 200, delta) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = velocidadeAtual;
        this.velocidadeMaxima = velocidadeMaxima;
        this.delta = 5;
    }
    alterarVelocidade(delta) {
        if (this.velocidadeAtual < this.velocidadeMaxima) {
            const novaVelocidade = this.velocidadeAtual + delta;
            this.velocidadeAtual = novaVelocidade;
        }
        return this.velocidadeAtual;
    }
}
class Ferrari extends Carro {
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
//Getter e Setter
class Person {
    constructor() {
        this._idade = 0;
    }
    get idade() { return this._idade; }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoal = new Person();
pessoal.idade = 30;
console.log(pessoal.idade);
//Static uses
class Matematica {
    static areaCircunf(raio) {
        return this.pi * raio * raio;
    }
}
Matematica.pi = 3.1415;
//Sem static ->
//const m = new Matematica()
//m.pi = 10
//console.log(m.areaCircunf(5))
console.log(Matematica.areaCircunf(5));
//Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Unico {
    constructor() {
    }
    static getInstance() {
        return Unico.isntance;
    }
    agora() {
        return new Date;
    }
}
Unico.isntance = new Unico;
console.log(Unico.getInstance().agora());
//Somente leitura
class Leitura {
    constructor(termo, perfixo) {
        this.perfixo = perfixo;
        this.termo = termo;
    }
}
const livro = new Leitura('Livro', "Romance");
//Nao é possivel fazer a atribuicao abaixo
//livro.termo = 'Novo livro'
console.log(livro);
