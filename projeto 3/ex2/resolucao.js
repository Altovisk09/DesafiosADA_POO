class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto(){
        return console.log(`${this.nome} ${this.sobrenome}`);
        // ou console.log(this.nome + " " + this.sobrenome)
    } 
}

const pessoa = new Pessoa('Jonas', 'Mendez')
pessoa.nomeCompleto();