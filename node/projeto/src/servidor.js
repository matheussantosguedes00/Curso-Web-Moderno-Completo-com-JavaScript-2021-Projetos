const porta = 3003

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const BancosDedados=require('./BancoDedados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos',(req,res,next)=>{
    res.send(BancosDedados.getProdutos())
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(BancosDedados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    const produto=BancosDedados.salvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //JSON
})
app.put('/produtos/:id',(req,res,next)=>{
    const produto=BancosDedados.salvarProduto({
        id:req.body.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //JSON
})
app.delete('/produtos/:id',(req,res,next)=>{
    const produto=BancosDedados.excluirProdutos(req.params.id)

    res.send(produto) //JSON
})

app.listen(porta,()=>{ 
    console.log(`Servidor executando na porta ${porta}.`)
})