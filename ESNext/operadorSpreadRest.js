//operador ...rest(juntar)/spread(espalhar)
//usa rest com parâmento de função

//usa spread com objeto
const funcionario ={nome:'Maria',salario:12349.99}
const clone={ativo:true, ...funcionario }
console.log(clone)

console.log('==================================')

const grupoA=['João','Pedro','Gloria']
const grupoFinal=['Maria','Rafaela',...grupoA]
console.log(grupoFinal)

console.log('==================================')
