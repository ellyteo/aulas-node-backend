import ServiceUsuario from '../service/usuario.js'

class ControllerUsuario {

    // Recebimento e saída das informações
    async Buscar(_, res) {
        try {
            const usuarios = await ServiceUsuario.Buscar()
            res.send({ message: usuarios })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const usuario = await ServiceUsuario.Detalhe(id)

            res.send({ message: usuario })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }

    async Criar(req, res) {
        try {
            const { email, senha } = req.body

            await ServiceUsuario.Criar(email, senha)

            res.send({ message: "Cadastro com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { email, senha } = req.query

            await ServiceUsuario.Alterar(id, email, senha)

            res.send({ message: "alterado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServiceUsuario.Deletar(id)

            res.send({ message: "Deletado!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body

            const token = await ServiceUsuario.Login(email, senha)

            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }

}

export default new ControllerUsuario()