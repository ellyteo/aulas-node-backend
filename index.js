import express from 'express'

const app = express()


// somar
app.get("/api/v1/somar", (req, res) => {
    const {num1, num2} = req.query
    const resultado = Number(num1) + Number(num2)
 
    res.status(200).send({ message: resultado })
})

// subtrair
app.get("/api/v1/subtrair", (req, res) => {
    const {num1, num2} = req.query
    const resultado = Number(num1) - Number(num2)
 
    res.status(200).send({ message: resultado })
})

// multiplicação
app.get("/api/v1/multiplicar", (req, res) => {
    const {num1, num2} = req.query
    const resultado = Number(num1) * Number(num2)
 
    res.status(200).send({ message: resultado })
})

// divisão
app.get("/api/v1/dividir", (req, res) => {
    const {num1, num2} = req.query
    const resultado = Number(num1) / Number(num2)

    res.status(200).send({ message: resultado })
})

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})