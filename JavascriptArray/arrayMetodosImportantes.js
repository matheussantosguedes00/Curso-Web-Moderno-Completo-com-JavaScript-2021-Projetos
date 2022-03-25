const pilotos=['Vettel','Alonso','Raikkonem','Massa']
pilotos.pop()//Massa quebro o carro !
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar 
pilotos.splice (2,0,'Bottas','Massa')
console.log(pilotos)

//Remover 
pilotos.splice(3,1)//massa quebro :(
    console.log(pilotos)

const algunsPilotos1=pilotos.slice(2)//novo array
console.log(algunsPilotos1)

const algunsPilotos2= pilotos.slice(1,4)
console.log(algunsPilotos2)













