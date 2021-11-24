//Desafio
/* criar uma classe fila
Atributo : fila Arrry
Métodos -> entrar, proximo, imprimir
*/
class Fila<T extends string | number>{
    private fila : Array<T>

    constructor(...args:T[]){
        this.fila = args
    }

    entrar(elemento : T) {
        this.fila.push(elemento)
    }

    proximo() : T{
        const prim = this.fila[0]
        this.fila.splice(0,1)
        return prim
    }

    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('A','B','C','D');
fila.imprimir()
fila.entrar('E')
fila.imprimir()
fila.proximo()

//Desafio 2
/*
Criar um arrray de objetos com chave-valor
criar metodos de obter(chave) e colocar*(chave,valor)
limpar e imprimir
 */
type ChaveValor<C,V> = {chave : C, valor : V}
class Mapa<C,V>{
    map : Array<ChaveValor<C,V>> = new Array<ChaveValor<C,V>>()

    colocar(objeto :ChaveValor<C,V>){
        var busca = this.obter(objeto.chave)
        if(busca){
            busca.valor = objeto.valor
        }
        else{
            this.map.push(objeto)
        }
    }

    imprimir(){
        console.log(this.map)
    }

    limpar() {
        this.map = new Array<ChaveValor<C,V>>()
    }

    obter(chave : C) : ChaveValor<C,V>|null{
        var busca = this.map.filter(f=>f.chave == chave)
        return busca ? busca[0] : null
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()