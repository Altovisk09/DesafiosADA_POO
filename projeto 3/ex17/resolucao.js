class Escola {
    constructor(){ // this.alunos não é static para garantir que cada escola instaciada tenha seu proprio "banco" de alunos
        this.alunos = [];
    }
    adicionar(nome, nota){
        this.alunos.push({nome, nota})
    }
    notasBaixas(){
        const alunos = this.alunos;
        let notasBaixas = []; 

        for(const aluno of alunos){
            if(aluno.nota <= 5){
                notasBaixas.push(aluno)
            }
        }
        console.log('Lista de alunos reprovados\n')
        for(const aluno of notasBaixas){
            console.log(`${aluno.nome}, nota: ${aluno.nota} - Reprovado`)
        }
    }
}

const escola = new Escola();
escola.adicionar("Guilherme", 0);
escola.adicionar("Alfredo", 9);
escola.adicionar("Onofre", 5);
escola.adicionar("Carimbo", 10);
escola.adicionar("Samanta", 3);
escola.notasBaixas();