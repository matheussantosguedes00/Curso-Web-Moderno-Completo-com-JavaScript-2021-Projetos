for(let letra of "Cod3r"){
    console.log(letra)
}
console.log('=====================================')
const assuntosEcma =['Map','Set','Promise']

for(let i in assuntosEcma){
    console.log(i)
}

console.log('=====================================')
for(let assunto of assuntosEcma){
    console.log(assunto)
}
console.log('=====================================')
const assuntosMap=new Map([
    ['Map',{abordado :true}],
    ['Set',{abordado :true}],
    [ 'Promise',{abordado:false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}
console.log('=====================================')
for(let chave of assuntosMap.keys()){
    console.log(chave)
}
console.log('=====================================')
for(let valor of assuntosMap.values()){
    console.log(valor)
}
console.log('=====================================')

for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}
console.log('=====================================')
const s = new Set (['a','b','c'])
for(let letra of s){
    console.log(letra)
}