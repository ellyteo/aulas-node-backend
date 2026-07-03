/////////////////////////////////// EXEMPLO 1 ///////////////////////////////////

import express from 'express'

// server ou app
const app = express()

//configura uma rota para o método HTTP GET na raiz ("/") do aplicativo
app.get("/", (req, res) => {
    //Retorna uma resposta SEND/JSON contendo uma mensagem "Hello World"
    res.send({ message: "Hello World!" })
})

// Inicia o servidor Express na porta 3000 e define uma função de retorno chamada
app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("Servidor ouvindo na porta 3000")
})

/////////////////////////////////// EXEMPLO 2 ///////////////////////////////////

app.get("/api/v1/sim", (req, res) => {
    const num1 = 10
    const num2 = 20
    const resultado = num1 + num2
    res.send({ resultado })
})

/////////////////////////////////// DESAFIO 1 ///////////////////////////////////

app.get("/api/v1/somar", (req, res) => {
    // query params - router
    console.log(req.query)
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    const resultado = num1 + num2

res.send({resultado})

})