"use strict";
//Uso de Let e Const
// console.log(variavel) -> undefined - efeito de hoisting
// let variavel = '?' 
//variavel local
// let frio = true
// if(frio){
//     let resultado = 'Colocar casaco'
// }
// console.log(resultado)
//Não se pode mudar o valor de um const
// const cpf = '012.345.678-90'
// cpf = '0987.654.321-01'
// console.log(cpf)
//Arrow Function - sempre anônima
let subtracao = (numero1, numero2) => numero1 - numero2;
console.log(subtracao(5, 1));
function soma(numero1, numero2) {
    return numero1 + numero2;
}
const falarCom = (pessoa) => console.log('Oie, ' + pessoa);
//Destructuring Array
//const caract : (string|number)[]
const caract = ['Motor', 2020];
const [motor, ano] = caract;
console.log(motor);
console.log(ano);
//Destructuring Objeto
const item = {
    nome: 'Um nome aqui',
    preco: 150.00
};
//trocando o nome da variavel nome para noume (Alias)
const { nome: noume, preco } = item;
console.log(noume);
console.log(preco);
//Delimitacao de string
const usuarioId = 'Por aspas simples';
const notificacao = '9';
const boasVindas = 'Boas vindas' + usuarioId + notificacao;
//Permite realizar algumas logicas dentro de {}, pode-se colocar javascript simples
const boasvindasTemplateString = `Boas vindas ${usuarioId}`;
//Promises - forma de trabalhar com assincronos
function esperar(callback) {
    setTimeout(() => {
        callback('3sec depois');
    }, 3000);
}
esperar(function (result) {
    console.log(result);
});
function esperarPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3sec depois com promisse');
        }, 3000);
    });
}
esperarPromise().then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(resp => resp.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(respFilms => respFilms.json())
    .then(filme => console.log(filme))
    .catch(erro => console.log(erro));
