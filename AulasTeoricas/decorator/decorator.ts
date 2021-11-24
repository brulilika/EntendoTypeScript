//@logarClasse
//@logarClasseCondificonal(true)
//@decorator('string aqui',123)
//@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor(){
        console.log('Novo log...')
    }
}

interface Eletrodomestico{
    imprimir?() : void
}

function logarClasse(construtor: Function){
    console.log(construtor)
}

function decotarotVazio(_ : Function){}

//Factory
function logarClasseCondificonal (valor : boolean){
    return valor ? logarClasse : decotarotVazio
}

function decorator(a:string , b:number){
    return function(_:Function) : void{
        console.log(`${a}, ${b}`)
    }
}

type Substituidor = {new (...args : any []): {}}
function logarObjeto(substituidor : Substituidor){
    return class extends substituidor{
        constructor (...args : any[]){
            console.log('Anterior')
            super(...args)
            console.log('Posterior')
        }
    }
}

function imprimivel(construtor : Function){
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
//Se houver a funcao imprimir, executa ela
eletro.imprimir && eletro.imprimir()