//pessoa -> 123 ->{...}
const pessoa ={nome:'João'}
pessoa.nome='Pedro'
console.log(pessoa)

//pessoa ->456 ->{...}
//pessoa ={nome:'Ana'}//Error não troca o endreço pessoa


Object.freeze(pessoa)//não deixa troca o nome e nao pode altera
pessoa.nome ='Maria'
pessoa.end ='Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)//Vai continuar sendo Pedro e nao mudar
console.log(pessoa)



const pessoaConstante =Object.freeze({nome:'João'})
pessoaConstante.nome ='Maria'
console.log(pessoaConstante)

