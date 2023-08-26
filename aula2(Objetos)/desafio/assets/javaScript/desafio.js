class Carro {
    constructor(marca, modelo, placa, valor, condicao, proprietario) {
        if (typeof placa !== 'string' || typeof valor !== 'number') {
            throw new Error('Os tipos dos dados informados não são válidos.');
        }
        if (!marca || !modelo || !placa || isNaN(valor) || !condicao || !proprietario) {
            throw new Error('Todas as informações devem ser preenchidas corretamente.');
        }
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.valor = valor;
        this.condicao = condicao;
        this.proprietario = proprietario;
    }
}
class Cliente {
    static id = 0;
    #senha
    #loggedInEmail
    constructor(nome, sobrenome, email, senha, dinheiro, idade, habilitado) {
        try {
            if (typeof nome !== 'string' || typeof sobrenome !== 'string' || isNaN(dinheiro)
                || typeof idade !== 'number' || typeof habilitado !== 'boolean' || typeof email !== 'string') {
                throw new Error('As informações do cliente não são válidas.');
            }
            if (!nome || !sobrenome || idade <= 0) {
                throw new Error('Todas as informações devem ser preenchidas corretamente.');
            }
            if (dinheiro <= 0) {
                throw new Error('É necessario mais dinheiro para abrir a conta');
            }
            if (!email.includes('@') || !email.includes('.com') && !email.includes('.com.br')) {
                throw new Error('O formato do email é invalido, tente novamente.')
            }
            if (!senha || senha.length < 6 || !/[A-Z]/.test(senha) || !/[!@#$%^&*]/.test(senha)) {
                throw new Error('Sua senha é fraca, senhas devem conter no mínimo 1 letra maiúscula, um caractere especial e no mínimo 6 dígitos');
            }
            if(idade < 18){
                throw new Error('')
            }
        } catch (err) {
            console.log(err.message)
        };

        this.id = Cliente.id++;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.#senha = senha;
        this.dinheiro = dinheiro;
        this.idade = idade;
        this.habilitado = habilitado;
        this.carros = [];
    }
    login(email, senha) {
        try {
            if (this.email === email && this.#senha === senha) {
                this.#loggedInEmail = email; // armazena email para validação futura
                console.log("Você acessou a conta");

            } else {
                throw new Error("Email ou senha incorretos");
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    myAccount() {
        try {
            if (this.#loggedInEmail) {
                console.log(`\nBem-vindo à sua conta, ${this.nome} ${this.sobrenome}\n\nEmail: ${this.email}\nDinheiro: R$ ${this.dinheiro}\nIdade: ${this.idade}\nHabilitado: ${this.habilitado}`);
            } else {
                throw new Error("Você precisa fazer login primeiro");
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    myCars() {
        try {
            if (this.carros.length === 0) {
                throw new Error("Você ainda não possui nenhum carro.");
            } else {
                console.log("Seus carros:\n");
                this.carros.forEach((carro, index) => {
                    console.log(`Carro ${index + 1}:`);
                    console.log(`- Marca: ${carro.marca}`);
                    console.log(`- Modelo: ${carro.modelo}`);
                    console.log(`- Placa: ${carro.placa}`);
                    console.log(`- Valor: R$ ${carro.valor}`);
                    console.log(`- Condição: ${carro.condicao}`);
                    console.log(`- Proprietário: ${carro.proprietario}`);
                });
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    depositarDinheiro(destinatario, valor) {
        try {
            if (valor <= 0) {
                throw new Error("O valor do depósito deve ser maior que zero.");
            }

            this.dinheiro -= valor;
            destinatario.dinheiro += valor;
            console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.dinheiro}`);
        } catch (err) {
            console.log(err.message);
        }
    }
    receberDinheiro(destinatario, valor) {
        try {
            if (valor <= 0) {
                throw new Error("O valor a receber deve ser maior que zero.");
            }

            destinatario.dinheiro += valor;
            console.log(`Recebimento de R$ ${valor} realizado. Saldo atual: R$ ${this.dinheiro}`);
        } catch (err) {
            console.log(err.message);
        }
    }
    buyCar(placa, concessionaria) {
        try {
            if (!this.#loggedInEmail) {
                throw new Error("Você precisa fazer login primeiro");
            }
            
            const carro = concessionaria.carrosDisponiveis.find(carro => carro.placa === placa);
            if (!carro) {
                throw new Error(`Não foi encontrado um carro com a placa ${placa} disponível.`);
            }
            if (this.dinheiro < carro.valor) {
                throw new Error("Você não tem dinheiro suficiente para comprar este carro.");
            }
            const index = concessionaria.carrosDisponiveis.indexOf(carro);
            if (index !== -1) {
                const carroComprado = { ...carro };
                concessionaria.carrosDisponiveis.splice(index, 1);
                this.carros.push(carroComprado);

                // Atualiza o proprietário do carro
                carroComprado.proprietario = `${this.nome} ${this.sobrenome}`;
                console.log(`${this.nome} comprou um ${carroComprado.marca} ${carroComprado.modelo} ${carroComprado.condicao}`);
                // Realiza a transação entre o cliente e a concessionária
                this.depositarDinheiro(concessionaria, carro.valor);
            } else {
                throw new Error("Carro não encontrado na concessionária.");
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    sellCar(placa, concessionaria) {
        try {
            if (!this.#loggedInEmail) {
                throw new Error("Você precisa fazer login primeiro");
            }

            const carroParaVender = this.carros.find(carro => carro.placa === placa);
            if (!carroParaVender) {
                throw new Error(`Não foi encontrado um carro com a placa ${placa} na sua lista de carros.`);
            }

            const valorCarro = carroParaVender.valor;
            const index = this.carros.indexOf(carroParaVender);

            concessionaria.dinheiro -= carroParaVender.valor;
            this.dinheiro += carroParaVender.valor;
            
            this.carros.splice(index, 1);
            concessionaria.carrosDisponiveis.push(carroParaVender);

            console.log(`Você vendeu o carro ${carroParaVender.marca} ${carroParaVender.modelo} por R$ ${valorCarro}.`);
        } catch (err) {
            console.log(err.message);
        }
    }
}
class Concessionaria{
    constructor(nome, dinheiro) {
        this.nome = nome;
        this.dinheiro = dinheiro;
        this.carrosDisponiveis = [];
    }
    adquirirCarro(marca, modelo, placa, valor, condicao) {
        if (valor > this.dinheiro) {
            console.log(`A concessionária ${this.nome} não tem dinheiro suficiente para adquirir o carro.`);
            return
        }
    
        const novoCarro = new Carro(marca, modelo, placa, valor, condicao, this.nome);
        if (condicao === 'usado') {
            novoCarro.valor *= 0.75; //desconto de 25% 
        }
        this.dinheiro -= novoCarro.valor;
        this.carrosDisponiveis.push(novoCarro);
        if(condicao === "usado"){
            console.log(`Carro adquirido usado, desconto de 25% no valor total.`)
        }
        return novoCarro
    }
    listCars() {
        if (this.carrosDisponiveis.length === 0) {
            console.log("A concessionária não possui carros disponíveis.");
        } else {
            console.log("Carros disponíveis na concessionária:");
            this.carrosDisponiveis.forEach((carro, index) => {
                console.log(`Carro ${index + 1}:`);
                console.log(`- Marca: ${carro.marca}`);
                console.log(`- Modelo: ${carro.modelo}`);
                console.log(`- Placa: ${carro.placa}`);
                console.log(`- Valor: R$ ${carro.valor}`);
                console.log(`- Condição: ${carro.condicao}`);
                console.log(`- Proprietário: ${carro.proprietario}`);
            });
        }
    }
}

// Criação da concessionária
const concessionaria1 = new Concessionaria('TurboMax Concessionaria', 500000);

// Criação do cliente
const cliente1 = new Cliente(
    "João",
    "Silva",
    "joao@example.com",
    "Senha123!",
    200000,
    30,
    true
);

// Adquirir 5 carros na concessionária
const carros = [
    { marca: 'Toyota', modelo: 'Corolla', placa: 'ABC123', valor: 40000, condicao: 'usado' },
    { marca: 'Honda', modelo: 'Civic', placa: 'DEF456', valor: 35000, condicao: 'novo' },
    { marca: 'Volkswagen', modelo: 'Gol', placa: 'GHI789', valor: 25000, condicao: 'novo' },
    { marca: 'Ford', modelo: 'Fiesta', placa: 'JKL012', valor: 30000, condicao: 'usado' },
    { marca: 'Chevrolet', modelo: 'Onix', placa: 'MNO345', valor: 28000, condicao: 'usado' }
];
carros.forEach(carro => {
    concessionaria1.adquirirCarro(carro.marca, carro.modelo, carro.placa, carro.valor, carro.condicao);
});

// Cliente realiza login
// cliente1.login("joao@example.com", "Senha123!");


cliente1.login("joao@example.com", "Senha123!");
cliente1.buyCar('ABC123', concessionaria1);
cliente1.sellCar('ABC123', concessionaria1);
cliente1.myCars();