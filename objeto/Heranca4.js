function MeuObJeto(){}

    console.log(MeuObJeto.prototype)

    const obj1 =new MeuObJeto
    const obj2 =new MeuObJeto
    console.log(obj1.__proto__===obj2.__proto__)
    console.log(MeuObJeto.prototype===   obj1.__proto__)

    MeuObJeto.prototype.nome='Anônimo'
    MeuObJeto.prototype.falar=function(){
        console.log(`Bom dia!Meu nome é ${this.nome} !`)
    }
    
    obj1.falar()
    obj2.nome ='Rafael'
    obj2.falar()

    const obj3 ={}
    obj3.__proto__=MeuObJeto.prototype
    obj3.nome='Obj3'
    obj3.falar()

// Resumindo a loucura...
console.log((new MeuObJeto).__proto__=== MeuObJeto.prototype)
console.log (MeuObJeto.__proto__===Function.prototype)
console.log(Function.prototype.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)












