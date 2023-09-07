class Pessoa {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sobre(){
        console.log(`${this.name} tem ${this.age} anos.`)
    }
}

const pessoa = new Pessoa("Matheus", 18);
pessoa.sobre();