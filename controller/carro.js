import ServiceCarro from '../service/carro.js'

class ControllerCarro {

    // Recebimento e saída das informações
    async Buscar(_, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.send({ message: carros })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = await ServiceCarro.Detalhe(id)

            res.send({ message: carro })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }

    async Criar(req, res) {
        try {
            const { marca, ano } = req.body

            await ServiceCarro.Criar(marca, ano)

            res.send({ message: "Cadastro com sucesso" })
        } catch (error) {
            res.status(500).  send({
                message: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { marca, ano } = req.query

            await ServiceCarro.Alterar(id, marca, ano)

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

            await ServiceCarro.Deletar(id)

            res.send({ message: "Deletado!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

}

export default new ControllerCarro()