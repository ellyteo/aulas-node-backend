import User from "../model/user.js"

class RepositoryUser {

    async Buscar() {

        return User.findAll()

    }

    async Detalhe(id) {

        return User.findByPk(id)

    }

    async BuscarEmail(email) {

        return User.findOne({ where: { email } })

    }

    async Criar(nome, email, senha) {

        await User.create({ nome, email, senha })

    }

    async Alterar(id, nome, email, senha) {

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("Usuário não encontrado!")
        }

        user.nome = nome || user.nome
        user.email = email || user.email
        user.senha = senha || user.senha

        await user.save()
    }

    async Deletar(id) {

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("Usuário não encontrado!")
        }

        await User.destroy()

    }

    async Login() {



    }

}

export default new RepositoryUser()