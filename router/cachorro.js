import express from 'express'
import { somar, dividir } from '../service/cachorro.js'

const router = express.Router()

router.post("/somar", (req, res) => {
    try {
        const { num1, num2 } = req.body
        const resultado = somar(Number(num1), Number(num2))

        res.status(200).send({
            message: resultado
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

router.post("/dividir", (req, res) => {
    try{
        const { num1, num2 } = req.body
        const resultado = dividir(Number(num1), Number(num2))

        res.status(200).send({
            message : resultado
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})
export default router