import carro from '../model/carro.js'

// INSERT INTO carros(marca, ano) VALUES ("FIAT", 	1998) | (CRIA)
// SELECT id, marca, ano FROM carros WHERE 1 | (BUSCA)
// UPDATE carros SET marca="sim",ano=364 WHERE 1 | (ATUALIZA)
// DELETE FROM carros WHERE 0 | (DELETA)

class RepositoryCarro {

    async Find() {
        const carros = await carro.findAll()

        return carros
    }

    async FindById(id) {
        const carroDetalhes = await carro.findByPk(id)

        return carroDetalhes
    }

    async Create(marca, ano) {
        const carroCriar = await carro.create({ marca, ano })

        return carroCriar
    }

    async Update(id, marca, ano) {
        const carroAlterar = await carro.findByPk(id)

        if (!carroAlterar) {
            throw new Error("Carro não encontrado!")
        }

       carroAlterar.marca = marca
       carroAlterar.ano = ano

       await carroAlterar.save()
    }

    async Delete(id) {
        const carroDeletar = await carro.findByPk(id)

        if (!carroDeletar) {
            throw new Error("Carro não encontrado!")
        }

        await carroDeletar.destroy()

        return carroDeletar
    }
}
export default new RepositoryCarro()