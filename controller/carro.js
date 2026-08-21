import ServiceCarro from '../service/carro.js'

class ControllerCarro {

    // Recebimento e saída das informações
    Buscar(_, res) {
        try {
            const carros = ServiceCarro.Buscar()
            res.send({ message: carros })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = ServiceCarro.Detalhe(id)

            res.send({ message: carro })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }

    Criar(req, res) {
        try {
            const { id, marca, ano } = req.body

            ServiceCarro.Criar(id, marca, ano)

            res.send({ message: "Cadastro com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const { marca } = req.query
            const carro = carros.find(it => it.id === id)

            if (!carro) {
                res.send({ message: "Carro não encontrado" })
                return
            }
            carro.marca = marca
            res.send({ message: "alterado com sucesso" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceCarro.Deletar(id)

            res.send({ message: "Deletado!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

}

export default new ControllerCarro()