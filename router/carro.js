import express from 'express'
import ControllerCarro from '../controller/carro.js'

const router = express.Router()

// Buscar todos
router.get("/buscar", ControllerCarro.Buscar )

// Buscar um
router.get("/detalhe/:id", ControllerCarro.Detalhe)

// Criar
router.post("/criar", ControllerCarro.Criar)

// Alterar
router.post("/alterar", ControllerCarro.Alterar)

// Deletar
router.post("/deletar", ControllerCarro.Deletar)

export default router