const moduloA=require('../../moduloA')
console.log(moduloA.ola)

const saudacao=require('saudacao')
console.log(saudacao.ola)

const c= require('./pastaC/index')
console.log(c.ola2)

const http=require ('http')
http.createServer((res,res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)