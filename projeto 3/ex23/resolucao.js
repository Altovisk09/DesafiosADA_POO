class Cargo {
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
}
class Trabalhador {
    constructor(nome, cargo){
        this.nome = nome;
        this.cargo = cargo;
    }
}
class Empresa {
    constructor(){
        this.trabalhadores = new Map();
    }
    contratar(trabalhador){
        this.trabalhadores.set(trabalhador.nome, trabalhador)
    }
    listarFuncionarios(){
       return console.log(this.trabalhadores.values());
    }
}

const cargo1 = new Cargo("Programador Javascript jr", 8000);
const cargo2 = new Cargo("Programador Javascript sr", 18000);

const trabalhador1 = new Trabalhador("Eric", cargo2);
const trabalhador2 = new Trabalhador("Jeff", cargo1);
const trabalhador3 = new Trabalhador("Mark", cargo1);

const empresa = new Empresa();

empresa.contratar(trabalhador1);
empresa.contratar(trabalhador2);
empresa.contratar(trabalhador3);

empresa.listarFuncionarios();

console.log(trabalhador1.nome);
console.log(trabalhador1.cargo.nome);
console.log(trabalhador2.nome);
console.log(trabalhador2.cargo.nome);
console.log(cargo1.nome);