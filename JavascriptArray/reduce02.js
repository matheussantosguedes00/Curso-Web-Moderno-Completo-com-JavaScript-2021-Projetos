const alunos =[
    {nome:'João',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}
]
//Desafio 1:
console.log('--------------------------------------------')
console.log('Desafio 1: Todos alunos são bolsista ?')
const todosBolsistas=(resultado,bolsista)=> resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))


//Desafio 2:
console.log('--------------------------------------------')
console.log('Desafio 2: Algum alunos é bolsista ?')
const algumbolsita =(resultado,bolsista)=>resultado|| bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumbolsita))

