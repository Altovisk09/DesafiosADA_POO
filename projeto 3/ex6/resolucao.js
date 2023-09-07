class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade); // Chama o construtor da superclasse (Pessoa)
        this.cpf = cpf;
        this.rg = rg;
    }
}

const pessoa= new Pessoa("Marcos", 21);
console.log(pessoa.nome);
console.log(pessoa.idade);

const cidadao = new Cidadao("Fred", 53, 12345678910, 987654321);
console.log(cidadao.nome);
console.log(cidadao.idade);
console.log(cidadao.cpf);
console.log(cidadao.rg);