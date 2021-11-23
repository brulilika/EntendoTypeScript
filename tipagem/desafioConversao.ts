/*Converter o código informado em JavaScript  
 * para TypeScript
*/

let podeSerNulo : null| string = 'abc'
console.log(podeSerNulo)

type ContaBancaria = {
    saldo : number,
    valorDeposito: (valor : number) => void
}

type Pessoa = {
    nome : string,
    contatos : string[]
}

let correntista : Pessoa, ContaBancaria = {
    nome: "Ana Silva",
    saldo: 1234,
    contatos: ['123','456','789'],
    valorDeposito(valor : number){
        this.saldo += valor
    }
}