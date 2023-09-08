class Escola {
    constructor() {
        this.alunos = []
    }

    adicionar(nome, nota) {
        this.alunos.push({ nome, nota });
    }

    media() {
        const todasAsNotas = this.alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
        const media = todasAsNotas / this.alunos.length;
        console.log(`Média das notas da turma: ${media}\n`)
    }

    ranking() {
        const alunos = this.alunos.slice(); // Crie uma cópia do array para não modificar o original
        alunos.sort((a, b) => b.nota - a.nota); // Ordena em ordem decrescente com base nas notas

        console.log("Lista de alunos ordenada por notas (decrescente):\n" )
        for (const aluno of alunos) {
            console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`);
        }
    }
}

const escola = new Escola();
escola.adicionar("Alice", 7);
escola.adicionar("João", 10);
escola.adicionar("Maria", 5);
escola.adicionar("Maurício", 7);
escola.media(); // 7.25
escola.ranking();
