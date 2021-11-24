// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}


@perfilAdmin 
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Substituidor>(substituidor : T){
    return class extends substituidor{
        constructor (...args : any[]){
            super(...args)
            if(!usuarioLogado.admin){
                throw new Error("Sem permissão")
            }
        }
    }
}

//Decorator em métodos
class ContaCorrente {
    private saldo : number

    constructor(saldo : number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor : number){
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        }
        else{
            return false
        }
    }

    //Faz com que a funcao nao se sobreescrita
    @congelar
    getsaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(10000.00)
cc.sacar(10.00)
console.log(cc.getsaldo())

// cc.getsaldo = function(){
//     return this['saldo']+5000
// }

function congelar(alvo : any, nomePropriedade : string, description : PropertyDescriptor){
    description.writable = false
}

//Decorator em parametro de metodos
function paramInfo(alvo : any, nomeMetodo : string, indiceParam : number){
    console.log(alvo)
    console.log(nomeMetodo)
    console.log(indiceParam)
}

 