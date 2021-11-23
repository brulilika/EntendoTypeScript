//Desafio 1
const dobro = (valor:number) : number => valor*2

//Desafio 2
const frase = (nominho : string|null) : string => {
    return nominho == null ? "Nao informado" : `Ola ${nominho}`
}

//Desafio 3
const vetorNumero = [-3,33,38,5]
console.log(`Menor valor ${Math.min(...vetorNumero)}`)

//Desafio 4
let arrayNumeric = [55,20]
arrayNumeric.push(...vetorNumero)
console.log(arrayNumeric)

//Desafio 5 - Destructuring
const notas = [8.5, 6.3,9.4]
const [nota1, nota2,nota3] = notas

//Desafio 6 - Destructuring
const cientista = { primeiroNome: 'Camila', experiencia: 20}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)