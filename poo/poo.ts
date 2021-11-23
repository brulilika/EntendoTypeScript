class Data{
    //Publicos por padrao
    dia : number
    mes : number
    ano : number

    constructor(dia:number = 1, mes:number = 1, ano: number = 1900){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

class DataNova{
    constructor(public dia:number = 1, public mes:number = 1, public ano :number = 1900){

    }

    public resumo() : string {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const aniversario = new Data(28,12,1998);
console.log(`Meu aniversário é ${aniversario.dia}/${aniversario.mes}/${aniversario.ano}}`)

const casamento = new DataNova(10,12,2021)

