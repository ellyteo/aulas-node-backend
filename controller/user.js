import ServiceUser from '../service/user.js'
class ControllerUser {

    async Buscar(req, res) {
        try {
            const users = await ServiceUser.Buscar()

            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
    async Detalhe(req, res) {
        try {
            // session === user logado
            const id = req.session.id
            const user = await ServiceUser.Detalhe()

            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
    async Criar(req, res) {
        try {

            const id = req.session.id
            const { nome, email, senha } = req.body

            await ServiceUser.Criar(id, nome, email, senha)

            res.status(201).send({ message: "Usuário criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
    async Alterar(req, res) {
        try {

            const id = req.session.id
            const { nome, email, senha } = req.body

            await ServiceUser.Alterar(id, nome, email, senha)

            res.status(200).send({ message: "Usuário alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
    async Deletar(req, res) {
        try {

            const id = req.session.id

            await ServiceUser.Deletar(id)

            res.status(204).send({ message: "Usuário deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
    async Login(req, res) {
        try {

            const { email, senha } = req.body

            const token = await ServiceUser.Login(email, senha)
            
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }
}

export default new ControllerUser()