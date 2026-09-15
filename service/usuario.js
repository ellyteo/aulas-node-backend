import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RepositoreUsuario from '../repository/usuario.js'

const segredo = 'S3gred0'

class ServiceUsuario {

    // Core- Regra de Negócio
    async Buscar() {
        return RepositoreUsuario.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoreUsuario.FindById(id)

        if (!usuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }

        return usuario
    }

    // Função(parametros)
    async Criar(email, senha) {
        if (!email || !senha) {
            throw new Error("Favor informar todos os dados!")
        }
        const usuario = await RepositoreUsuario.Create(email, senha)

        return usuario
    }

    async Alterar(id, email, senha) {
        if (!id || !email | !senha) {
            throw new Error("Favor informar o ID")
        }

        const usuarioAlterar = await RepositoreUsuario.Update(id, email, senha)

        return usuarioAlterar
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const usuario = await RepositoreUsuario.Delete(id)

        return usuario
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválidos")
        }

        const usuario = await RepositoreUsuario.FinddByEmail(email)

        if (!usuario) {
            throw new Error("Email ou senha inválidos")
        }

        if (
            !(await bcrypt.compare(String(senha), usuario.senha))
        ) {
            throw new Error("Email ou senha inválidos")
        }

        return jwt.sign(
            { id: usuario.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }

}
export default new ServiceUsuario()