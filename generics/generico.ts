function echo (objeto : any){
    return objeto
}
function echoGenerics<T>(objeto : T) : T{
    return objeto
}

console.log(echo(27).lenght)
console.log(echoGenerics<number>(27))

//Tipo genérico
type Echo = <T>(data : T) => T
const tipoGenerico : Echo = echoGenerics
console.log(tipoGenerico<string>('Uma string aqui'))

//Classes Generics
abstract class ClasseGenerica<T, R>{
    constructor(public variavel1 : T, public variavel2 : T){

    }

    abstract executar() : R
}
class UsaClasseGenerica extends ClasseGenerica<number,number>{
    executar(): number{
        return this.variavel1+this.variavel2
    }
    
}

class DiferencaEntreDatas extends ClasseGenerica<Data, string>{
    getTime(data:Data) : number{
        let{dia,mes,ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }
    
    executar(): string {
        const tempo1 = this.getTime(this.variavel1)
        const tempo2 = this.getTime(this.variavel2)
        const dif = Math.abs(tempo1 - tempo2) //resultado em milissegundos
        const dia = 1000*60*60*24
        return `${Math.ceil(dif/dia)} dias`
    }    
}