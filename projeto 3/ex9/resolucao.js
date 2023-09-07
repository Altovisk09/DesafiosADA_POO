class Animal {
    constructor(){
        this.nome = '';
        this.velocidade = 0;
    }
    correr(velocidade){
        if(velocidade <= 0){
            throw new Error('Velocidade precisa ser maior que zero')
        }else{
           return this.velocidade = velocidade*2;           
 }
    }
    pare(){
       return this.velocidade = 0
    }
    status(){
        if(this.velocidade <= 0){
            console.log(`${this.nome} esta parado`)
        }else{
            console.log(`${this.nome} corre com velocidade ${this.velocidade}`)
        }
    }
}

class Coelho extends Animal {
    constructor() {
      super();
      this.name = "Coelho";
    }
  } 

const coelho = new Coelho();
coelho.correr(5);
coelho.status(); // Coelho corre com velocidade 10
coelho.pare();
coelho.status(); // Coelho está parado