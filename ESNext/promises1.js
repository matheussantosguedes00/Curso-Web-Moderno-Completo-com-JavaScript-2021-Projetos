

function primeiroElemento(array){
    
    return array[0]
}
function primeiraLetra(string){
    return string[0]
}
const letraMinuscula=letra=>letra.toLowerCase()


let p= new Promise(function(resolve){

    resolve(['Ana','Bia','Carlos','Daniel'])
})
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
//.then(v=>console.log(v))
.then(console.log)




