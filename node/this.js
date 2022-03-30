console.log(this===global)
console.log('===========================')
console.log(this===module)

console.log('===========================')
console.log(this===module.exports)
console.log('===========================')
console.log(this===exports)//e true
console.log('===========================')

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this===exports) //e false
    console.log(this===module.exports)//e false
    console.log(this===global)//e true

    this.perigo='...'
}
logThis()









