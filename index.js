import express from 'express'
import carro from './router/carro.js'
import database from './config/database.js'

const app = express()

app.use(express.json())

app.use("/api/v1/carro", carro)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor ouvindo na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })