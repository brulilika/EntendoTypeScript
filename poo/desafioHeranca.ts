//Desafio 1
class Moto{

    constructor(public nome : string, public velocidade: number = 0){

    }

    public Buzinar() : void{
        console.log('Buzinada!')
    }

    public Acelerar(delta : number) {
        this.velocidade += delta
    }
}
const moto = new Moto('Ducati')
moto.Buzinar()
console.log(moto.velocidade)
moto.Acelerar(20)
console.log(moto.velocidade)

//Desafio 2
abstract class Forma2D{
    constructor(public base : number, public altura: number){

    }
    abstract Area() : number
}

class Retangulo extends Forma2D{
    Area() : number {
        return this.base*this.altura
    }
}
var retangulo = new Retangulo(5,7)
console.log(retangulo.Area())

//Desafio 3
class Estagiario{
    private _primeiroNome : string = ''
    get primeiroNome() : string{ return this._primeiroNome}
    set primeiroNome(valor : string){
        if(valor.length >=3){
            this._primeiroNome = valor
        } 
        else{
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario() 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)