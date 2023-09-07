class Roupa {
    constructor(tamanho, cor = "padrão"){
        this.tamanho = tamanho;
        this.cor = cor;
    }
    sobre(){
        return console.log(`Camisa tamanho ${this.tamanho} tem a cor ${this.cor}`)
    }
}

const padrao = new Roupa("M");
const preto = new Roupa('G', "Preta")

padrao.sobre();
preto.sobre(); 