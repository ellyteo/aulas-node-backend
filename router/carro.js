import express from 'express'
import carros from '../repository/carro.js'

const router = express.Router()

// Buscar todos
router.get("/buscar", (req, res) => {
    res.send({ message: carros })
})

// Buscar um
router.get("/detalhe/:id", (req, res) => {
    const id = req.params.id

    const carro = carros.find(it => it.id === id)

    if (!id ) {
        res.send({ message: "Carro não encontrado!" })
        return
    }
    res.send({ message: carro })

})

// Criar
router.post("/criar", (req, res) => {
    const { id, marca, ano } = req.body

    if (!id || !marca || !ano) {
        res.send({ message: "Favor informar todos os dados!" })
        return
    }

    carros.push({ id, marca, ano })
    res.send({ message: "Cadastro com sucesso" })
})

// Alterar
router.post("/alterar", (req, res) => {
    const id = req.body.id
    const { marca } = req.query
    const carro = carros.find(it => it.id === id)

    if(!carro) {
        res.send({ message: "Carro não encontrado"})
    return
    }
    carro.marca = marca
    res.send({ message: "alterado com sucesso"})
})

// Deletar
router.post("deletar", (req, res) => {
    const id = req.body.id

    carros.splice(it => it.id === id, 1)

    res.send({ message: "Deletado!"})
})

export default router