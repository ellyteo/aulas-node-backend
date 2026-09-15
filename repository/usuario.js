import usuario from '../model/usuario.js'

// INSERT INTO usuarios(email, senha) VALUES ("FIAT", 	1998) | (CRIA)
// SELECT id, email, senha FROM usuarios WHERE 1 | (BUSCA)
// UPDATE usuarios SET email="sim",senha=364 WHERE 1 | (ATUALIZA)
// DELETE FROM usuarios WHERE 0 | (DELETA)

class RepositoryUsuario {

    async Find() {
        const usuarios = await usuario.findAll()

        return usuarios
    }

    async FindById(id) {
        const usuarioDetalhes = await usuario.findByPk(id)

        return usuarioDetalhes
    }

    async Create(email, senha) {
        const usuarioCriar = await usuario.create({ email, senha })

        return usuarioCriar
    }

    async Update(id, email, senha) {
        const usuarioAlterar = await usuario.findByPk(id)

        if (!usuarioAlterar) {
            throw new Error("Usuario não encontrado!")
        }

        usuarioAlterar.email = email
        usuarioAlterar.senha = senha

        await usuarioAlterar.save()
    }

    async Delete(id) {
        const usuarioDeletar = await usuario.findByPk(id)

        if (!usuarioDeletar) {
            throw new Error("Usuario não encontrado!")
        }

        await usuarioDeletar.destroy()

        return usuarioDeletar
    }

    async FindByEmail(email) {
        return usuario.findOne({ where: { email } })
    }

}
export default new RepositoryUsuario()