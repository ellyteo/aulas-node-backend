import RepositoryCarro from '../repository/carro.js'
class ServiceCarro {

    // Core- Regra de Negócio
    async Buscar() {
        return RepositoryCarro.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryCarro.FindById(id)

        if (!carro) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }

        return carro
    }

    // Função(parametros)
    async Criar(marca, ano) {
        if (!marca || !ano) {
            throw new Error("Favor informar todos os dados!")
        }
        const carro = await RepositoryCarro.Create(marca, ano)

        return carro
    }

    async Alterar(id, marca, ano) {
        if (!id || !marca | !ano) {
            throw new Error("Favor informar o ID")
        }

        const carroAlterar = await RepositoryCarro.Update(id, marca, ano)

        return carroAlterar
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const carro = await RepositoryCarro.Delete(id)

        return carro
    }

}
export default new ServiceCarro()