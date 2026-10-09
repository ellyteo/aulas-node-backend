import RepositoryUser from '../repository/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = 'ateez'
const SALT = 12

class ServiceUser {

    async Buscar() {

        return RepositoryUser.Buscar()

    }

    async Detalhe(id) {

        if (!id) {
            throw new Error("Favor informar o ID!")
        }

        return RepositoryUser.Detalhe(id)
    }

    async Criar(nome, email, senha) {

        if (!nome || !email || !senha) {
            throw new Error("Favor informar todos os parametros!")
        }

        const cryptSenha = await bcrypt.hash(senha, SALT)

        await RepositoryUser.Criar(nome, email, cryptSenha)
    }

    async Alterar(id, nome, email, senha) {

        if (!id || !nome || !email || !senha) {
            throw new Error("Favor informar todos os parametros!")
        }

        const cryptSenha = !senha
            ? undefined
            : await bcrypt.hash(senha, SALT)

        await RepositoryUser.Alterar(id, nome, email, cryptSenha)

    }

    async Deletar(id) {

        if (!id) {
            throw new Error("Favor informar o ID!")
        }

        await RepositoryUser.Deletar(id)

    }

    async Login(email, senha) {

        if (!email || !senha) {
            throw new Error("Favor informar todos os parametros!")
        }

        const user = await RepositoryUser.BuscarEmail(email)

        if (!user || !(await bcrypt.compare(String(senha), user.senha))) {
            throw new Error("Email ou senha inválido")
        }

        //token
        return jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            SECRET,
            {
                expiresIn: 60
            }
        )

    }
}

export default new ServiceUser()