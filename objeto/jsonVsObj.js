const obj ={a:1,b:2,c:3,soma(){return a + b + c}}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a:1,b:2,c:3}")) //não aceita desse jeito
//console.log (JSON.parse("{'a':1,'b':2,'c':3}"))//tambem não esta certo
console.log (JSON.parse('{"a":1,"b":2,"c":3}'))//esse  formanto e valido
console.log (JSON.parse('{"a":1.7,"b":"string","c":true,"d":{},"e":[]}'))//Esse tambem e um formanto json valido
