const escola=[{
    nome:'Turma M1',
    alunos:[{
        nome:'Matheus',
        notas:8.1
    },{
        nome:'Ana',
        notas:9.3
    }]
},{
    nome:'Turma M2',
    alunos:[{
        nome:'Rebeca',
        notas:8.9
    },{
        nome:'Paula',
        notas:7.3
}]

}]
const getNotaDoAluno=aluno=>aluno.notas
const getNotaDaTurma =turma=>turma.alunos.map(getNotaDoAluno)


const notas1=escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat( [ 8.1, 9.3 ], [ 8.9, 7.3 ] ))


Array.prototype.flatMap=function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}
const notas2=escola.flatMap(getNotaDaTurma)
console.log(notas2)

