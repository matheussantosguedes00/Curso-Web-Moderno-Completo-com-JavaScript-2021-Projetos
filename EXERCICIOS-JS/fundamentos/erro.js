function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    // throw true
    //throw 'mensagem'
    throw{
        nome:erro.nome,
        msg:erro.message,
        date:new Date
    }

}

function imprimirNomeGritado(obj){

    try{
        console.log(obj.nome.toUpperCase()+ '!!!')
    }catch (e) {
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
    
}

const obj = {name: 'Roberto'}
imprimirNomeGritado (obj)