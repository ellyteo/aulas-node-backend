import express from 'express'
import cachorro from './router/cachorro.js'

const app = express()

app.use(express.json())
app.use('/api/v1/cachorro', cachorro)



app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
}) 