class Animal {
    constructor(nome, som, onomatopeia){
        this.nome = nome;
        this.som = som;
        this.onomatopeia = onomatopeia;
    }
    sobre(){
        return console.log(`O animal ${this.nome} faz o som de ${this.som} e sua onomatopeia é ${this.onomatopeia}`)
    }
}

class Cavalo extends Animal{
    constructor(){
        super("Cavalo", "relinchar", "irriiirriiirrii");
    }
}

class Vaca extends Animal{
    constructor(){
        super("Vaca", "mugir", "muuuuuuuuuuuu");
    }
}

class Ovelha extends Animal{
    constructor(){
        super("Ovelha", "berrar", "méééééé");
    }
}

const cavalo = new Cavalo;
const vaca = new Vaca;
const ovelha = new Ovelha;

cavalo.sobre();
vaca.sobre();
ovelha.sobre();
