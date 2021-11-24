/*
Criar um objeto funcionario com:
 - Array de strings com nomes dos supervisores
 - Funcao de bater ponto que recebe a hora e retorna uma string
   - "Ponto normal" se hora <= 8
   - "Fora do horário" se hora > 8
*/

//Criacao de Alias
type Funcionario = {
    supervisores : string[] 
    marcarPonto : (hora : number) => string
}

let funcionario : Funcionario = {
    supervisores: ["Supervisor 1", "Supervisor 2", "Supervisor 3"],
    marcarPonto(horario : number) : string{
        return horario <= 8 ? "Ponto normal" : "Fora do horário"
    }
}

//Union Types
let nota : number | string = 10
console.log(`Valor da nota é ${nota}`)
console.log('Valor da nota é ' + nota)

//Chegageem de tipos em Runtime
if(typeof nome === "string"){
    console.log("Temos uma string!")
}
else{
    console.log("Temos uma " + typeof nome)
}

//Tipo NEVER - diz que a funcao nunca vai retornar 
//ou vai ficar em um looping
function falha(mensagem : string) : never{
    throw new Error(mensagem)
}
if(nome != "Pao"){
    falha("Como assim não é um pao?")
}

//Como permitir que objetos sejam Nullable
let altura : null | number = 10
altura = null