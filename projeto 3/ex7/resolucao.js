class Pessoa {
    saudacao() {
        return "Olá pessoa!";
    }
}

class Trabalhador extends Pessoa {
    saudacao() {
        return "Olá trabalhador!";
    }
}

class Aluno extends Pessoa {
    saudacao() {
        return "Olá aluno!";
    }
}

const pessoa = new Pessoa();
console.log(pessoa.saudacao()); 

const trabalhador = new Trabalhador();
console.log(trabalhador.saudacao()); 

const aluno = new Aluno();
console.log(aluno.saudacao()); 