console.log(typeof Array,typeof new Array,typeof [])

let aprovados = new Array ('Bia','Matheus','Ana')
console.log(aprovados)

aprovados=['Bia','Matheus','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]='Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9]='Jóse'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])


aprovados=['Bia','Matheus','Ana']
aprovados.splice(1,1,'Elemento1','Elemento')
console.log(aprovados)





















