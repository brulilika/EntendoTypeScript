"use strict";
function echo(objeto) {
    return objeto;
}
function echoGenerics(objeto) {
    return objeto;
}
console.log(echo(27).lenght);
console.log(echoGenerics(27));
const tipoGenerico = echoGenerics;
console.log(tipoGenerico('Uma string aqui'));
//Classes Generics
class ClasseGenerica {
    constructor(variavel1, variavel2) {
        this.variavel1 = variavel1;
        this.variavel2 = variavel2;
    }
}
class UsaClasseGenerica extends ClasseGenerica {
    executar() {
        return this.variavel1 + this.variavel2;
    }
}
class DiferencaEntreDatas extends ClasseGenerica {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const tempo1 = this.getTime(this.variavel1);
        const tempo2 = this.getTime(this.variavel2);
        const dif = Math.abs(tempo1 - tempo2); //resultado em milissegundos
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(dif / dia)} dias`;
    }
}
