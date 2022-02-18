//Cadeia de protótipos (prototype chain) 
Object.prototype.attr0 ='0'//não faça isso !!
const avo ={ attr1: 'A'}
const pai ={__proto___  :avo, attr2:'B', attr3: '3'}
const filho ={__proto___ :pai, attr3:'C'}
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

const carro ={
vetAtual:0,
velMax:200,
acelerarMax(delta){
    if(this.vetAtual+delta<=this.velMax){
        this.vetAtual +=delta
    }else{
        this.vetAtual = this.velMax
    }
},
status(){
    return `${this.vetAtual} Km/h de ${this.velMax}Km/h`
}
}
const ferrari ={
    modelo :'F40',
    velMax: 324 //shadowing
}
const volvo ={
    modelo:'V40',
    status(){
        return `${this.modelo}:${super.status()}`
    }
}
Object.setPrototypeOf(ferrari,carro)

Object.setPrototypeOf(volvo,carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMax(100)
console.log(volvo.status())

ferrari.acelerarMax(300)
console.log(ferrari.status())





















