import RepositoryCarro from '../repository/carro.js'
class ServiceCarro {

    // Core- Regra de Negócio
    Buscar() {
        return RepositoryCarro
    }

    Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const carro = RepositoryCarro.find(it => it.id === id)

        if (!carro) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }

        return carro
    }
    // Função(parametros)
    Criar(id, marca, ano) {
        if (!id || !marca || !ano) {
            throw new Error("Favor informar todos os dados!")
        }
        RepositoryCarro.push({ id, marca, ano })

        return { id, marca, ano }
    }

    Alterar() { }

    Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        RepositoryCarro.splice(it => it.id === id, 1)
    
        return id
    }

}
export default new ServiceCarro()