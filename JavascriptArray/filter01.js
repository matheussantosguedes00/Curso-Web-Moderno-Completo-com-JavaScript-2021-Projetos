const  produto=[
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'iPad Pro',preco:4199,fragil:true},
    {nome:'Copo de Vidro ',preco:12.99,fragil:true},
    {nome:'Copo de Plástico',preco:18.99,fragil:false}

]

console.log(produto.filter(function(p){
    return false 
}))

console.log('-------------------------------------------')

const caro=produto=>produto.preco>=500
const fragil=produto=>produto.fragil
console.log(produto.filter(caro).filter(fragil))

console.log('-------------------------------------------')

console.log(produto.filter(function(p){
    if(p.preco>2000&&p.fragil==true){
        return produto
    }
}))