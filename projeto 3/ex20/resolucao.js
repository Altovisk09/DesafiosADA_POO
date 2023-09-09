class Analisador {
    constructor() {
        this.dados = []
    }
    adicionar(nome, email){    
        this.dados.push(nome, email)
    }
    converterParaObjeto(){
        const objetos = [];

        for(let i = 0; i < this.dados.length; i +=2){ 
            const nome = this.dados[i];
            const email = this.dados[i + 1];
            objetos.push({nome, email});
        }
        return console.log(objetos);
    }
}

const analisador = new Analisador();
analisador.adicionar("João", "joao@email.com");
analisador.adicionar("Maria", "maria@email.com");
analisador.adicionar("Eric", "eric@example.com")
analisador.converterParaObjeto();


