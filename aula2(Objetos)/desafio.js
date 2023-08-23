class Carro {
    constructor(marca, modelo, placa, cambio, ano, cor, valor, condicao, proprietario) {
        if (typeof placa !== 'string' || typeof ano !== 'number' || typeof valor !== 'number') {
            throw new Error('Os tipos de dados informados não são válidos.');
        }
        if (!marca || !modelo || !placa || !cambio || !cor || isNaN(ano) || isNaN(valor) || !condicao || !proprietario) {
            throw new Error('Todas as informações devem ser preenchidas corretamente.');
        }

        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.cambio = cambio;
        this.ano = ano;
        this.cor = cor;
        this.valor = valor;
        this.condicao = condicao;
        this.proprietario = proprietario;
    }
}

class Cliente {
    constructor(nome, sobrenome, dinheiro, idade, habilitado) {
        if (typeof nome !== 'string' || typeof sobrenome !== 'string' || isNaN(dinheiro) 
        || typeof idade !== 'number' || typeof habilitado !== 'boolean') {
            throw new Error('As informações do cliente não são válidas.');
        }
        if (!nome || !sobrenome || idade <= 0) {
            throw new Error('Todas as informações devem ser preenchidas corretamente.');
        }
        if(dinheiro <= 0){
            throw new Error('É necessario mais dinheiro para abrir a conta');
        }

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dinheiro = dinheiro;
        this.idade = idade;
        this.habilitado = habilitado;
        this.carros = [];
    }
    comprarCarro(carro) {
        if (this.carros.length > 0) {
            console.log(`${this.nome} já possui um carro e não pode comprar outro.`);
            return;
        }
        
        if (!this.habilitado) {
            console.log(`${this.nome} não está habilitado para dirigir e não pode comprar um carro.`);
            return;
        }

        if (this.idade < 18) {
            console.log(`${this.nome} é menor de idade e não pode comprar um carro.`);
            return;
        }

        if (this.dinheiro >= carro.valor) {
            this.dinheiro -= carro.valor;
            if (carro.condicao === 'usado') {
                carro.valor *= 0.75; //desconto de 25%
            }
            carro.proprietario = this.nome;
            this.carros.push(carro);

            // Remove da lista de carros da concessionária
            const index = concessionaria1.carrosDisponiveis.indexOf(carro);
            if (index !== -1) {
                concessionaria1.carrosDisponiveis.splice(index, 1);
            }
            console.log(`${this.nome} comprou um ${carro.marca} ${carro.modelo}`);
        } else {
            console.log(`${this.nome} não tem dinheiro suficiente para comprar o carro.`);
        }
    }
    venderCarro() {
        if (this.carros.length === 1) {
            const carro = this.carros[0];
            const valorVenda = carro.condicao === 'usado' ? carro.valor * 0.75 : carro.valor;
            this.dinheiro += valorVenda;
            // Remove carro do cliente
            this.carros = [];
            console.log(`${this.nome} vendeu um ${carro.marca} ${carro.modelo} por R$ ${valorVenda}`);
        } else {
            console.log(`${this.nome} não possui carros para vender.`);
        }
    }
}

class Concessionaria{
    constructor(nome, dinheiro) {
        this.nome = nome;
        this.dinheiro = dinheiro;
        this.carrosDisponiveis = [];
    }

    adquirirCarro(marca, modelo, placa, cambio, ano, cor, valor, condicao) {
        if (valor > this.dinheiro) {
            console.log(`A concessionária ${this.nome} não tem dinheiro suficiente para adquirir o carro.`);
            return
        }
    
        const novoCarro = new Carro(marca, modelo, placa, cambio, ano, cor, valor, condicao, this.nome);
        if (condicao === 'usado') {
            novoCarro.valor *= 0.75; //desconto de 25% 
        }
        this.dinheiro -= novoCarro.valor;
        this.carrosDisponiveis.push(novoCarro);
        return novoCarro
    }
}

const concessionaria1 = new Concessionaria('TurboMax concessioria', 100000);

const carro1 = concessionaria1.adquirirCarro('Toyota', 'Corolla', 'ABC1234', 'Automático', 2022, 'Prata', 50000, 'Novo');
const carro2 = concessionaria1.adquirirCarro('Ford', 'Focus', 'XYZ5678', 'Manual', 2020, 'Azul', 40000, 'Usado');
const carro3 = concessionaria1.adquirirCarro('Chevrolet', 'Cruze', 'DEF5678', 'Automático', 2023, 'Branco', 60000, 'Novo');
const carro4 = concessionaria1.adquirirCarro('Nissan', 'Versa', 'GHI1234', 'Manual', 2021, 'Cinza', 45000, 'Usado');

const cliente1 = new Cliente('João', 'Silva', 60000, 25, true);
const cliente2 = new Cliente('Maria', 'Silva', 60000, 17, true);

