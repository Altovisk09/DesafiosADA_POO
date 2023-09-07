class Animal {
    constructor(especie, velocidade){
        this.especie = especie;
        this.velocidade = velocidade;
    }
    corre(velocidade){
        if(velocidade <= 0){
            throw new Error('Para começar a correr é necessario que a velocidade seja superior a 0')
        }else{
            return this.velocidade = velocidade;
        }
    }
    pare(){
        return this.velocidade = 0;
    }
    status(){
        if(this.velocidade > 0){    
            return console.log(`${this.especie} corre a ${this.velocidade} km|h`)
        }else{
            return console.log(`${this.especie} está parado(a)`)
        }
    }
}
 
const animal = new Animal('cachorro', 10);
animal.status();
animal.pare();
animal.status();
animal.corre(20)
animal.status();