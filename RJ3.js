class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = this.capitalize(razaoSocial)
        this.nomeFantasia = this.capitalize(nomeFantasia)
        this.#cnpj = cnpj
        this.endereco = this.formatarEndereco(endereco)
        this.clientes = new Set()
        this.telefones = new Set()
    }

    getRazaoSocial() {
        return this.razaoSocial
    }

    setRazaoSocial(razaoSocial) {
        this.razaoSocial = this.capitalize(razaoSocial)
    }

    getNomeFantasia() {
        return this.nomeFantasia
    }

    setNomeFantasia(nomeFantasia) {
        this.nomeFantasia = this.capitalize(nomeFantasia)
    }

    getCnpj() {
        return this.#cnpj
    }

    setCnpj(cnpj) {
        this.#cnpj = cnpj
    }

    getEndereco() {
        return this.endereco
    }

    setEndereco(endereco) {
        this.endereco = this.formatarEndereco(endereco)
    }


    adicionarCliente(cliente) {
        this.clientes.add(cliente)
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }

    removerTelefone(telefone) {
        this.telefones.delete(telefone)
    }


    capitalize(texto) {
        return texto.replace(/\b\w/g, char => char.toUpperCase())
    }

    formatarEndereco(endereco) {
        return {
            estado: endereco.estado.toUpperCase(),
            cidade: this.capitalize(endereco.cidade),
            rua: this.capitalize(endereco.rua),
            numero: endereco.numero
        };
    }


    detalhe() {
        let descricao = `Razão social: ${this.razaoSocial}\n`
        descricao += `Nome fantasia: ${this.nomeFantasia}\n`
        descricao += "-----------------------------------\n"

        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.getNome()}\n`
            const end = cliente.getEndereco()
            descricao += `Estado: ${end.estado} Cidade: ${end.cidade} Rua: ${end.rua} Número: ${end.numero}\n`;

            cliente.getTelefones().forEach(telefone => {
                descricao += `DDD: ${telefone.getDdd()} Número: ${telefone.getNumero()}\n`
            });

            descricao += "\n"
        });

        return descricao
    }
}

class Cliente {
    #cpf

    constructor(nome, cpf, endereco) {
        this.nome = this.capitalize(nome)
        this.#cpf = cpf
        this.endereco = this.formatarEndereco(endereco)
        this.telefones = new Set()
    }


    getNome() {
        return this.nome
    }

    setNome(nome) {
        this.nome = this.capitalize(nome)
    }

    getCpf() {
        return this.#cpf
    }

    setCpf(cpf) {
        this.#cpf = cpf
    }

    getEndereco() {
        return this.endereco
    }

    setEndereco(endereco) {
        this.endereco = this.formatarEndereco(endereco)
    }

    getTelefones() {
        return this.telefones
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }

    removerTelefone(telefone) {
        this.telefones.delete(telefone)
    }

    capitalize(texto) {
        return texto.replace(/\b\w/g, char => char.toUpperCase())
    }

    formatarEndereco(endereco) {
        return {
            estado: endereco.estado.toUpperCase(),
            cidade: this.capitalize(endereco.cidade),
            rua: this.capitalize(endereco.rua),
            numero: endereco.numero
        }
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    getDdd() {
        return this.ddd
    }

    setDdd(ddd) {
        this.ddd = ddd
    }

    getNumero() {
        return this.numero
    }

    setNumero(numero) {
        this.numero = numero
    }
}

const empresa = new Empresa('CPS', 'Fatec São José', '12.345.678/0001-99', 
    { estado: 'sp', cidade: 'são paulo', rua: 'mei longe, mas até q perto.', numero: '100' })

    
const cliente1 = new Cliente('Bertot', '123.456.789-00', 
    { estado: "sp", cidade: "são josé dos campos", rua: "inteligencia quase artificial.", numero: "14" })

    
const cliente2 = new Cliente('Gerson', '123.321.123-09', 
    { estado: 'sp', cidade: 'são josé dos campos', rua: 'Rua do açaí com leite condensado.', numero: '321'})

    
const cliente3 = new Cliente('Massanoti', '123.333.111-01',
    { estado: 'sp', cidade: 'são josé dos campos', rua: 'Av python melhor que js.', numero: '111'})


const cliente4 = new Cliente('Claudio', '222.333.444-11',
    { estado: 'sp', cidade : 'são josé dos ca[oms', rua: '86 slides de js e fé.', numero: '221'})


const cliente5 = new Cliente('Leonardo', '500.500.400-00',
    { estado: 'sp', cidade: 'são josé dos campos', rua: 'js parece um php sem orientação, chei de gambi.', numero: '3301'})




const telefone1Cliente1 = new Telefone(11, "98765-4321")
const telefone2Cliente1 = new Telefone(12, "91234-5678")

cliente1.adicionarTelefone(telefone1Cliente1)
cliente1.adicionarTelefone(telefone2Cliente1)

//////////////////////////////////////////////////
const telefone1Cliente2 = new Telefone(11, "98765-4321")
const telefone2Cliente2 = new Telefone(12, "91234-5678")

cliente2.adicionarTelefone(telefone1Cliente2)
cliente2.adicionarTelefone(telefone2Cliente2)

//////////////////////////////////////////////////
const telefone1Cliente3 = new Telefone(11, "98765-4321")
const telefone2Cliente3 = new Telefone(12, "91234-5678")

cliente3.adicionarTelefone(telefone1Cliente3)
cliente3.adicionarTelefone(telefone2Cliente3)

//////////////////////////////////////////////////
const telefone1Cliente4 = new Telefone(11, "98765-4321")
const telefone2Cliente4 = new Telefone(12, "91234-5678")

cliente4.adicionarTelefone(telefone1Cliente4)
cliente4.adicionarTelefone(telefone2Cliente4)

//////////////////////////////////////////////////
const telefone1Cliente5 = new Telefone(11, "98765-4321")
const telefone2Cliente5 = new Telefone(12, "91234-5678")

cliente5.adicionarTelefone(telefone1Cliente5)
cliente5.adicionarTelefone(telefone2Cliente5)

//////////////////////////////////////////////////


empresa.adicionarCliente(cliente1)
empresa.adicionarCliente(cliente2)
empresa.adicionarCliente(cliente3)
empresa.adicionarCliente(cliente4)
empresa.adicionarCliente(cliente5)

console.log(empresa.detalhe())
