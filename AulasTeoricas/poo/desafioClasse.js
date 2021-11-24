"use strict";
//Desafio 
/*
Criar a classe Produto com nome, preco e desconto
 - Desconto opicional
 - Criar um produto com 2 parametros
 - Criar um produto com os 3 parametros
*/
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    CalculaDesconto() {
        return this.desconto == 0 ? this.preco : this.preco * this.desconto;
    }
}
const fruta = new Produto('Maça', 10.00);
console.log(`O preço da ${fruta.nome} é de ${fruta.preco}. ${fruta.desconto == 0 ? "Sem desconto" : `Com desconto de ${fruta.desconto}`}`);
console.log(fruta.CalculaDesconto());
const legumes = new Produto('Pepino', 8.00, 2.00);
console.log(`O preço da ${legumes.nome} é de ${legumes.preco}. ${fruta.desconto == 0 ? "Sem desconto" : `Com desconto de ${legumes.desconto}`}`);
console.log(legumes.CalculaDesconto());
