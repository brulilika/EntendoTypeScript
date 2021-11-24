"use strict";
//Desafio
/* criar uma classe fila
Atributo : fila Arrry
Métodos -> entrar, proximo, imprimir
*/
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        const prim = this.fila[0];
        this.fila.splice(0, 1);
        return prim;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('A', 'B', 'C', 'D');
fila.imprimir();
fila.entrar('E');
fila.imprimir();
fila.proximo();
class Mapa {
    constructor() {
        this.map = new Array();
    }
    colocar(objeto) {
        var busca = this.obter(objeto.chave);
        if (busca) {
            busca.valor = objeto.valor;
        }
        else {
            this.map.push(objeto);
        }
    }
    imprimir() {
        console.log(this.map);
    }
    limpar() {
        this.map = new Array();
    }
    obter(chave) {
        var busca = this.map.filter(f => f.chave == chave);
        return busca ? busca[0] : null;
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
