// Importa o módulo 'express' e o atribui à constante 'express'
const express = require('express')

// Cria uma instância do aplicativo Express e a atribui à constante 'app'
const app = express()
const bodyParser = require('body-parser')

// Importa o middleware de saudação e o atribui à constante 'saudacao'
const saudacao = require('./saudacaoMid')

// Importa o módulo de API de usuário e o atribui à constante 'usuarioApi'
const usuarioApi = require('./api/usuario')

// Importa o módulo de API de produto e o atribui à constante 'produtoApi'
const produtoApi = require('./api/produto')

// Chama a função exportada do módulo de API de produto, passando o aplicativo 'app' e uma string como parâmetro
require('./api/produto')(app, 'com param!')

// Chama a função exportada do módulo de API de produto, passando o aplicativo 'app' e uma string como parâmetro
produtoApi(app, 'com param!')

// Define uma rota para o método POST no caminho '/usuario' que chama a função 'salvar' do 'usuarioApi'
app.post('/usuario', usuarioApi.salvar)

// Define uma rota para o método GET no caminho '/usuario' que chama a função 'obter' do 'usuarioApi'
app.get('/usuario', usuarioApi.obter)

// Usa o middleware 'body-parser' para tratar dados no formato de texto, JSON e URL codificado
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Usa o middleware de saudação com o nome 'Matheus'
app.use(saudacao('Matheus'))

// Define uma rota para o caminho '/opa1'
app.use('/opa1', (req, res) => {
    // Retorna uma resposta JSON
    res.json({
        name: 'iPad 32GB',
        price: 1899.00,
        discount: 0.12
    })
})

// Define uma rota para o caminho '/opa2'
app.use('/opa2', (req, res) => {
    // Retorna uma resposta JSON com uma lista de objetos
    res.json([
        { id: 7, name: 'Ana', position: 1 },
        { id: 37, name: 'Bia', position: 2 },
        { id: 73, name: 'Carlos', position: 3 },
    ])
})

// Middleware que exibe uma mensagem no console antes de continuar
app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

// Define uma rota para o caminho '/clientes/relatorio' que utiliza os parâmetros da consulta (query parameters)
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

// Define uma rota para o caminho '/corpo' que retorna o corpo da requisição (req.body)
app.post('/corpo', (req, res) => {
    // Retorna o corpo da requisição em diferentes formatos
    res.send(req.body)
    res.send(req.body.nome)
    res.send(JSON.stringify(req.body))
})

// Define uma rota com um parâmetro dinâmico ':id'
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

// Middleware que exibe uma mensagem no console durante a execução
app.use('/opa', (req, res, next) => {
    console.log('Durante...')
    // Retorna uma resposta JSON
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 37, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 },
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
})

// Middleware que exibe uma mensagem no console depois de todas as rotas
app.use((req, res) => {
    console.log('Depois...')
})

// Define uma rota para o caminho '/opa'
app.get('/opa', (req, res) => {
    // Retorna uma resposta HTML
    res.send('<h2>Estou <b> bem </b>! em get</h2>')
})

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver pronto
app.listen(3000, () => {
    console.log('Backend executando...')
})
