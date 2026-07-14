/////////////////////////////////// EXEMPLO 1 ///////////////////////////////////

import express from 'express'
import bancoDeDados from './repository/index.js'

// server ou app
const app = express()

//configura uma rota para o método HTTP GET na raiz ("/") do aplicativo
app.get("/", (req, res) => {
    //Retorna uma resposta SEND/JSON contendo uma mensagem "Hello World"
    res.send({ message: "Hello World!" })
})

/////////////////////////////////// DESAFIO 2 ///////////////////////////////////

// HTTP->  Post,   GET,  PUT,       DELETE
// CRUD -> Create, Read, Update and 

// CRIAR
app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id

    const pessoa = bancoDeDados.find(it => it.id == id)

    if (!pessoa) {
        res.send({ message: "Pessoa não encontrada" })
        return
    }

    res.send({ pessoa })
})

app.get("/api/pessoa", (req, res) => {
    // const id = req.query.id
    // const name = req.query.name

    const { id, name } = req.query

    if (!id || !name) {
        res.send({ message: "Favor informar id e name" })
        return
    }

    bancoDeDados.push({ id, name })
    console.log(bancoDeDados)

    res.send({ message: "Pessoa criada com sucesso" })
})

// ALTERAR
app.get("/api/alterar/:id", (req, res) => {
    const id = req.params.id

    const pessoa = bancoDeDados.find(it => it.id == id)

    if (!pessoa) {
        res.send({ message: "Pessoa não encontrada" })
        return
    }

    

    res.send({ pessoa })
})




/////////////////////////////////// EXEMPLO 2 ///////////////////////////////////

// app.get("/api/v1/sim", (req, res) => {
//     const num1 = 10
//     const num2 = 20
//     const resultado = num1 + num2
//     res.send({ resultado })
// })

/////////////////////////////////// DESAFIO 1 ///////////////////////////////////

// app.get("/api/v1/somar", (req, res) => {
//     // query params - router
//     console.log(req.query)
//     const num1 = Number(req.query.num1)
//     const num2 = Number(req.query.num2)
//     const resultado = num1 + num2

// res.send({resultado})

//--------------------------------- Exercícios ---------------------------------//

/////////////////////////////////// Ex01 ///////////////////////////////////

app.post("/api/v1/somar", (req, res) => {
    const {num1, num2} = req.body
    const resultado = Number(num1) + Number(num2)
 
    res.status(200).send({ message: resultado })
})

/////////////////////////////////// Ex02 ///////////////////////////////////

app.post("/api/v1/horas", (req, res) => {
    const {valor, horas} = req.body
    const resultado = Number(valor) * Number(horas)

    res.status(200).send({ message: resultado })
})

/////////////////////////////////// Ex03 ///////////////////////////////////

app.post("/api/v1/immc", (req, res) => {
    const {peso1, peso2, peso3, peso4, peso5} = req.body
    const resultado = (Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5)) / 5

    res.status(200).send({ message: resultado })
})

/////////////////////////////////// Ex04 ///////////////////////////////////

app.post("/api/v1/celsius", (req, res) => {
    const {temperatura} = req.body
    const resultado = ( 9 * Number(temperatura) + 160 ) / 
    
    res.status(200).send({ message: resultado })
})

/////////////////////////////////// Ex05 ///////////////////////////////////

app.post("/api/v1/distancia", (req, res) => {
    const {milhas} = req.body
    const resultado = Number(milhas) * 1.60934

    res.status(200).send({ message: resultado })
})

/////////////////////////////////// Ex06 ///////////////////////////////////

app.post("/api/v1/evento", (req, res) => {
    const {seg} = req.body
    const hr = Number(seg) / 3600
    const min = Number(seg) /60
    const resultado = {
        seg: Number(seg),
        hr,
        min
    }

    res.status(200).send({ message: resultado })
})

// Inicia o servidor Express na porta 3000 e define uma função de retorno chamada
app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("Servidor ouvindo na porta 3000")
})