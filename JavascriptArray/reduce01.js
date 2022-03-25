const alunos =[
        {nome:'João',nota:7.3,bolsista:false},
        {nome:'Maria',nota:9.2,bolsista:true},
        {nome:'Pedro',nota:9.8,bolsista:false},
        {nome:'Ana',nota:8.7,bolsista:true}
]
console.log(alunos.map(a=>a.nota))
console.log('----------------------------------')
const resultado =alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador+atual
},0)//numero inicial nao e necessario passa o zero
console.log('----------------------------------')
console.log('Resultado de todas as  notas '+resultado)
