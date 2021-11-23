class Carro{
    private delta : number = 5

    constructor(public marca : string, public modelo : string,
        public velocidadeAtual: number , private velocidadeMaxima : number = 200, delta: number){

    }

    protected alterarVelocidade (delta : number) : number{
        if (this.velocidadeAtual < this.velocidadeMaxima){
            const novaVelocidade = this.velocidadeAtual + delta
            this.velocidadeAtual = novaVelocidade        
        }
        return this.velocidadeAtual

    }
}

class Ferrari extends Carro{
    public acelerar() : number{
        return this.alterarVelocidade(5)
    }

    public frear() : number{
        return this.alterarVelocidade(-5)
    }
}

//Getter e Setter
class Person{
    private _idade : number = 0
    get idade() : number{ return this._idade}
    set idade(valor : number){
        if(valor >=0 && valor <= 120){
            this._idade = valor
        }
    }
}

const pessoal = new Person()
pessoal.idade = 30
console.log(pessoal.idade)

//Static uses
class Matematica {
    static pi : number = 3.1415

    static areaCircunf(raio : number) : number{
        return this.pi*raio*raio
    }
}

//Sem static ->
//const m = new Matematica()
//m.pi = 10
//console.log(m.areaCircunf(5))

console.log(Matematica.areaCircunf(5))

//Classe abstrata
abstract class Calculo{
    protected resultado : number = 0

    abstract executar(...numeros:number []) : void

    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo{
    executar(...numeros : number[]): void {
        this.resultado = numeros.reduce((t,a)=>t+a)
    }
}

class Unico{
    private static isntance : Unico = new Unico
    private constructor(){
    }

    static getInstance(){
        return Unico.isntance
    }

    agora(){
        return new Date
    }
}

console.log(Unico.getInstance().agora())

//Somente leitura
class Leitura{
    public readonly termo : string

    constructor(termo: string, public readonly perfixo :string){
        this.termo = termo
    }
}
const livro = new Leitura('Livro',"Romance")
//Nao é possivel fazer a atribuicao abaixo
//livro.termo = 'Novo livro'
console.log(livro)