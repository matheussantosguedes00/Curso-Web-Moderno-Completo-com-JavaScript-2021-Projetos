class Lancamento{
    construtor (nome='Genérico',valor=0){
        this.nome=nome
        this.valor=valor
    }
}

class CicloFinaceiro{
    constructor(mes,ano){
        this.mes=mes
        this.ano=ano
        this.lancamentos=[]
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l=> this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado=0
        this.lancamentos.forEach(l=>{
            valorConsolidado+=l.valor
        })
        return valorConsolidado
    }
}
const salario =new Lancamento ('Salario',45000)
const contaDLuz=new Lancamento('Luz',-220)


const contas=new CicloFinaceiro(6,2018)
contas.addLancamentos(salario,contaDLuz)
console.log(contas.sumario())













