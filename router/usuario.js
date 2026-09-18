import express from 'express'
import ControllerUsuario from '../controller/usuario.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()


router.post("/login", ControllerUsuario.Login)
// Buscar todos
router.get("/buscar", authMiddleware, ControllerUsuario.Buscar )

// Buscar um
router.get("/detalhe/:id", ControllerUsuario.Detalhe)

// Criar
router.post("/criar", ControllerUsuario.Criar)

// Alterar
router.put("/alterar/:id", ControllerUsuario.Alterar)

// Deletar
router.delete("/deletar/:id", ControllerUsuario.Deletar)

export default router