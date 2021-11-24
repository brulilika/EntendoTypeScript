"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(substituidor) {
    return class extends substituidor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado.admin) {
                throw new Error("Sem permissão");
            }
        }
    };
}
//Decorator em métodos
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    //Faz com que a funcao nao se sobreescrita
    getsaldo() {
        return this.saldo;
    }
}
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getsaldo", null);
const cc = new ContaCorrente(10000.00);
cc.sacar(10.00);
console.log(cc.getsaldo());
// cc.getsaldo = function(){
//     return this['saldo']+5000
// }
function congelar(alvo, nomePropriedade, description) {
    description.writable = false;
}
//Decorator em parametro de metodos
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(alvo);
    console.log(nomeMetodo);
    console.log(indiceParam);
}
