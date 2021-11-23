interface Humano {
    nome: string
    idade ? : number //Indica que o atributo é opcional na interface
    [prop:string] : any //Quando eu nao sei o nome da propriedade a ser informada

    saudar(sobrenome : string) : void
}

function apresentacao(pessoa : Humano){
    console.log("Apresentacao")
}
function trocaNome( pessoa :Humano, novoNome : string){
     pessoa.nome = novoNome
}

const pessoa = {
    nome : 'Joao',
    idade : 30
}

const propriedade : Humano= {
    nome: 'Maria',
    ['regiao'] : "sudeste",
    saudar(sobrenome : string) : void{
        console.log(sobrenome)
    }
}

apresentacao(propriedade)
trocaNome(propriedade, "Otavio")
propriedade.saudar('Aparecida')


class Humanin implements Humano{
    [prop: string]: any,
    nome: string = ''
    idade?: number | undefined
    saudar(sobrenome: string): void {
        console.log(sobrenome)
    }
}

interface funcaoCalculo {
    (a : number, b:number) : number
}
let potencia : funcaoCalculo
potencia = function(base : number, exp:number) : number{
    return Math.pow(base, exp)
}

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = {
    nome: 'Pedro',
    toString() {
        return  this.nome
    }
}
cli.log()