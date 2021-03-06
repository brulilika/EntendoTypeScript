"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//@logarClasse
//@logarClasseCondificonal(true)
//@decorator('string aqui',123)
//@logarObjeto
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('Novo log...');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function logarClasse(construtor) {
    console.log(construtor);
}
function decotarotVazio(_) { }
//Factory
function logarClasseCondificonal(valor) {
    return valor ? logarClasse : decotarotVazio;
}
function decorator(a, b) {
    return function (_) {
        console.log(`${a}, ${b}`);
    };
}
function logarObjeto(substituidor) {
    return class extends substituidor {
        constructor(...args) {
            console.log('Anterior');
            super(...args);
            console.log('Posterior');
        }
    };
}
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
//Se houver a funcao imprimir, executa ela
eletro.imprimir && eletro.imprimir();
