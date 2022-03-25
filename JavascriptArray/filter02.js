Array.prototype.filter2=function(callback){
    const newArray=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const  produto=[
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'iPad Pro',preco:4199,fragil:true},
    {nome:'Copo de Vidro ',preco:12.99,fragil:true},
    {nome:'Copo de Plástico',preco:18.99,fragil:false}

]


console.log('-------------------------------------------')

const caro=produto=>produto.preco>=500
const fragil=produto=>produto.fragil
console.log(produto.filter2(caro).filter2(fragil))

console.log('-------------------------------------------')

